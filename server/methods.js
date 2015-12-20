Meteor.methods({
	'addFavoriteColor':function(hexCode){
		var date = new Date();

		FavoriteColors.insert({
			userId: Meteor.userId(),
			hexCode: hexCode,
			date: date
		})
	},
	'removeFavoriteColor':function(hexCode){
		FavoriteColors.remove({
			userId: Meteor.userId(),
			hexCode: hexCode
		})
	},
	'savePalette':function(array, name){
		var date = new Date();

		Palettes.insert({
			userId: Meteor.userId(),
			name: name,
			colors:array,
			date: date
		})
	}
});