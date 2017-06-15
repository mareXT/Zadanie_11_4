function Phone(brand, price, color, wow_effect) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
	this.wow_effect = wow_effect;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and is " + this.wow_effect + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "cool");
iPhone6S.printInfo();
var samsungGalaxyS6 = new Phone("Samsung", 2150, "white", "cool enough");
samsungGalaxyS6.printInfo();
var onePlusOne = new Phone("OnePlus", 1950, "black", "well... it's ok" + ".");
onePlusOne.printInfo();