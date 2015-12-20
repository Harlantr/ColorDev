Template.header.helpers({
	hexValue:function(){ 
		return Session.get('newColor').hex; 
	}
});

Template.header.rendered = function(){
    var colorPicker = $("#colorpicker")

    //Assign colorPicker properties
    colorPicker.spectrum({
        color: "Black",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: false,
        showSelectionPalette: true,
        clickoutFiresChange: true,  
        preferredFormat: "hex",
        flat:false,
        chooseText:"Use",
        hideAfterPaletteSelect:true,
        move: function (color) {

        },
        show: function () {

        },
        beforeShow: function () {

        },
        hide: function () {
            
        },
        change: function() {
            //Route to correct hex code
            var hex = colorPicker.spectrum('get').toHex();
            Router.go('color', {_hexCode: hex});
            colorPicker.spectrum("hide");
        }
    });
}