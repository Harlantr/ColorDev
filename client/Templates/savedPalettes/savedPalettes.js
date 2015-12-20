Template.savedPalettes.helpers({
	savedPalette:function(){
		var palettes = Palettes.find(
			{userId: Meteor.userId()}, 
			{sort: {date:-1}}
		).fetch();

		return palettes;
	}
});