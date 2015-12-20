Template.favoriteColorList.helpers({
	favoriteColorsExist:function(){
		var favoriteColors = FavoriteColors.find(
			{userId: Meteor.userId()}, 
			{fields:{'hexCode':1}}
		).fetch();

		if(favoriteColors.length > 0){
			return true;
		}else{
			return false;
		}
	},
	favoriteColor:function(){
		var favoriteColors = FavoriteColors.find(
			{userId: Meteor.userId()}, 
			{sort: {date:-1}}
		).fetch();

		return favoriteColors;
	},
	colorRoute:function(hex){
		return hex.replace("#", "");
	}
});

Template.favoriteColorList.events({
	'click [data-icon="remove"]':function(evt){
		var hex = evt.target.id;
		Meteor.call('removeFavoriteColor', hex);
	}
});