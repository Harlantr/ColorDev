Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

//Home Page
Router.route('/', {name: "home"});

//Color Page
Router.route('/color/:_hexCode', {
	name: "color",
	template: "colorGenerator",
	//Redirect if # is supplied in router.  Keeps page URLs consistent
	onRun: function(){
		if(this.params._hexCode.indexOf("#") != -1){
			this.redirect('color', {_hexCode:this.params._hexCode.replace("#","")})
		}
		this.next();
	},
	//Set new values to session and colorpicker
	onAfterAction: function(){
		Session.set('newColor', new Color(this.params._hexCode));
		$("#colorpicker").spectrum('set', this.params._hexCode);
	}
});

//Profile Page
Router.route('/profile/:_id', {
  name: 'profile',
  data: function() {
    return Meteor.users.findOne(this.params._id);
  }
});

//Palette Creation Page
Router.route('/palette/create', {
  name: 'paletteCreator'
});