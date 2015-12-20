//Used to initialize 'newColor' session variable
Color = function(hex){
	var color = tinycolor(hex);

	this.r = color._r;
	this.g = color._g;
	this.b = color._b;
	this.rPercentage = color.toPercentageRgb().r;
	this.gPercentage = color.toPercentageRgb().g;
	this.bPercentage = color.toPercentageRgb().b;
	this.hex = color.toHexString();
	this.complement = color.complement().toHexString();
	this.triad = color.triad().map(function(t) { return t.toHexString(); });
	this.splitComplement = color.splitcomplement().map(function(t) { return t.toHexString(); });
	this.colorName = color.toName();
	this.analogous = color.analogous(3).map(function(t) { return t.toHexString(); });
}