Template.home.helpers({
	recentFavorites:function(){
		return FavoriteColors.find(
			{}, 
			{sort: {date:-1}, limit:12}
		).fetch();
	},
	recentPalettes:function(){
		return Palettes.find(
			{}, 
			{sort: {date:-1}, limit:6}
		).fetch();
	},
	colorRoute:function(hex){
		return hex.replace("#", "");
	}
});