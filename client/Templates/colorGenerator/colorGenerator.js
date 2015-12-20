Template.colorGenerator.helpers({
	redValue:function(){
		return Session.get('newColor').r;
	},
	greenValue:function(){
		return Session.get('newColor').g;
	},
	blueValue:function(){
		return Session.get('newColor').b;
	},
	redPercentage:function(){
		return Session.get('newColor').rPercentage;
	},
	greenPercentage:function(){
		return Session.get('newColor').gPercentage;
	},
	bluePercentage:function(){
		return Session.get('newColor').bPercentage;
	},
	hexValue:function(){
		return Session.get('newColor').hex;
	},
	colorName:function(){
		if(Session.get('newColor').colorName){
			return "(" + capitalizeFirstLetter(Session.get('newColor').colorName) + ")";
		}else{
			return "";
		}
	},
	favoriteColorExists:function(){
		var existingColor = FavoriteColors.findOne({
			userId: Meteor.userId(), 
			hexCode:Session.get('newColor').hex
		});

		if(!existingColor){
			return true;
		} else{
			return false;
		}
	}
});

Template.colorGenerator.events({
	'click #btnAddFavoriteColor': function() {
		var hex = Session.get('newColor').hex;
		var existingColor = FavoriteColors.findOne({
			userId: Meteor.userId(), 
			hexCode:hex
		});

		if(!existingColor){
			Meteor.call('addFavoriteColor', hex);
		}else{
			return false;
		}
	},
	'click #btnAddToPalette': function() {
		Router.go('paletteCreator');
	}
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}