var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = "Fluffy";
	this.imgSrc = "images/fluffy.jpg";
	this.imgAttribution = "Karlinha";
	
	this.level = ko.computed(function() {
        if (this.clickCount() < 20) {
            return "Infant";
        } else if (this.clickCount() < 50) {
            return "Teen";
        } else {
            return "Adult";
        }
    }, this);	
 
    this.nickname = ko.observableArray(['Brown', 'KaffeMilch', 'Blau']);
}

var ViewModel = function(){	
	this.currentCat = ko.observable( new Cat() );
	
	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());

