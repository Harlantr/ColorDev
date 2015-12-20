Template.paletteCreator.rendered = function(){
    var colorPicker = $("[data-type='colorpicker']")

    $("#paletteColor1").spectrum({
        showInitial: true, 
        showInput: true, 
        showButtons: false, 
        preferredFormat: "hex",
        color:"#eeeeee",
        move: function(color) {
            var selectedcolor = color.toHexString();
            $('#divPaletteColor1').css('background-color', selectedcolor);
        },
        change:function(color){
            var selectedcolor = color.toHexString();
            $('#divPaletteColor1').css('background-color', selectedcolor);
        }
    });
    $("#paletteColor2").spectrum({
        showInitial: true, 
        showInput: true, 
        showButtons: false, 
        preferredFormat: "hex",
        color:"#dddddd",
        move: function(color) {
            var selectedcolor = color.toHexString();
            $('#divPaletteColor2').css('background-color', selectedcolor);
        },
        change:function(color){
            var selectedcolor = color.toHexString();
            $('#divPaletteColor2').css('background-color', selectedcolor);
        }
    });
    $("#paletteColor3").spectrum({
        showInitial: true, 
        showInput: true, 
        showButtons: false, 
        preferredFormat: "hex",
        color:"#cccccc",
        move: function(color) {
            var selectedcolor = color.toHexString();
            $('#divPaletteColor3').css('background-color', selectedcolor);
        },
        change:function(color){
            var selectedcolor = color.toHexString();
            $('#divPaletteColor3').css('background-color', selectedcolor);
        }
    });
    $("#paletteColor4").spectrum({
        showInitial: true, 
        showInput: true, 
        showButtons: false, 
        preferredFormat: "hex",
        color:"#bbbbbb",
        move: function(color) {
            var selectedcolor = color.toHexString();
            $('#divPaletteColor4').css('background-color', selectedcolor);
        },
        change:function(color){
            var selectedcolor = color.toHexString();
            $('#divPaletteColor4').css('background-color', selectedcolor);
        }
    });
    $("#paletteColor5").spectrum({
        showInitial: true, 
        showInput: true, 
        showButtons: false, 
        preferredFormat: "hex",
        color:"#aaaaaa",
        move: function(color) {
            var selectedcolor = color.toHexString();
            $('#divPaletteColor5').css('background-color', selectedcolor);
        },
        change:function(color){
            var selectedcolor = color.toHexString();
            $('#divPaletteColor5').css('background-color', selectedcolor);
        }
    });
}

Template.paletteCreator.helpers({

});

Template.paletteCreator.events({
    'click #btnSavePalette': function(){
        var txtPaletteName = $('#txtPaletteName')
        var name = txtPaletteName.val();
        if(name == ""){
             $("#txtPaletteName")
            .animate( { backgroundColor: "#c10000" }, 200 )
            .animate( { backgroundColor: "white" }, 200 );
            return false;
        }

        var palette = [];
        palette.push($("#paletteColor1").spectrum('get').toHexString());
        palette.push($("#paletteColor2").spectrum('get').toHexString());
        palette.push($("#paletteColor3").spectrum('get').toHexString());
        palette.push($("#paletteColor4").spectrum('get').toHexString());
        palette.push($("#paletteColor5").spectrum('get').toHexString());

        Meteor.call('savePalette', palette, name);

        Router.go('profile', {_id: Meteor.userId()});
    }
});