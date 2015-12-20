Template.layout.created = function(){
	var value = "#" + Router.current().params._hexCode;
	Session.set('newColor', new Color(value));
};

Template.layout.rendered = function(){
	var value = "#" + Router.current().params._hexCode;
	$("#colorpicker").spectrum('set', value);
};