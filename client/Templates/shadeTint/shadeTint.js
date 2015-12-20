Template.shadeTint.helpers({
	shadeDivs:function(){
		var ar = [];
		for(i=1; i<=10; i++){
			ar.push(CreateShade(i));
		}
		return ar;
	},
	tintDivs:function(){
		var ar = [];
		for(i=1; i<=10; i++){
			ar.push(CreateTint(i));
		}
		return ar;
	},
	colorRoute:function(hex){
		return hex.replace("#", "");
	}
});

Template.shadeTint.events({
	'click .btnAltColor':function(evt){
		var btn = evt.target;
		GoToColor(btn.value);
	}
});

function CreateShade(shadeNum){
	var r = Session.get('newColor').r;
	var g = Session.get('newColor').g;
	var b = Session.get('newColor').b;

	var redIncrement = r / 10;
	var greenIncrement = g / 10;
	var blueIncrement = b / 10;

	var newRed = r - (redIncrement * shadeNum);
	var newGreen = g - (greenIncrement * shadeNum);
	var newBlue = b - (blueIncrement * shadeNum);

	var color = tinycolor({ r: newRed, g: newGreen, b: newBlue });
	return color.toHexString();
}

function CreateTint(tintNum){
	var r = Session.get('newColor').r;
	var g = Session.get('newColor').g;
	var b = Session.get('newColor').b;

	var redIncrement = (255 - r) / 10;
	var greenIncrement = (255 - g) / 10;
	var blueIncrement = (255 - b) / 10;

	var newRed = r + (redIncrement * tintNum);
	var newGreen = g + (greenIncrement * tintNum);
	var newBlue = b + (blueIncrement * tintNum);

	var color = tinycolor({ r: newRed, g: newGreen, b: newBlue });
	return color.toHexString();
}