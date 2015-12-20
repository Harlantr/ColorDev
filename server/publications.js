// Meteor.publish('favoriteColors', function(){
// 	return FavoriteColors.find({userId: this.userId});
// });
Meteor.publish('favoriteColors', function(){
	return FavoriteColors.find({});
});
Meteor.publish('savedPalettes', function(){
	return Palettes.find({});
});