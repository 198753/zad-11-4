function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var samsungGalaxyS6 = new Phone("Samsung", 1950, "black");
var iPhone6S = new Phone("Apple", 2250, "silver");
var onePlusOne = new Phone("OnePlus", 156, "white");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

Phone.prototype.applyDiscount = function (applyDiscount) {
	
	this.price = (this.price - applyDiscount);
}

samsungGalaxyS6.applyDiscount(100);
iPhone6S.applyDiscount(100);
onePlusOne.applyDiscount(100);

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();