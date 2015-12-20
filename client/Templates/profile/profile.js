Template.profile.helpers({
	userName:function(){
		var userId =  Router.current().params._id;
		var user = Meteor.users.findOne({_id: userId});
		return user.username;
	}
});