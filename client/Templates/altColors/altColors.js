Template.altColors.helpers({
	hexValue:function(){
		return Session.get('newColor').hex;
	},
	complementaryHexValue:function(){
		return Session.get('newColor').complement;
	},
	triad:function(){
		return Session.get('newColor').triad;
	},
	splitComplement:function(){
		return Session.get('newColor').splitComplement;
	},
	analogous:function(){
		return Session.get('newColor').analogous;
	},
	colorRoute:function(hex){
		return hex.replace("#", "");
	}
});

Template.altColors.events({
	'click .btnAltColor':function(evt){
		var btn = evt.target;
		GoToColor(btn.value);
	}
});