function MenuItem(obj){

	this.add = function(){
		for(var i = 0; i < arguments.length; i++){
			var menu = document.getElementById(this.obj.id);
				this.elem = document.createElement("button");
			this.elem.innerHTML = arguments[i].label;
			this.elem.className = arguments[i].class;
			this.elem.setAttribute("name", arguments[i].name);
			menu.appendChild(this.elem);
			arguments[i].elem = this.elem;
			this.array.push(arguments[i]);
		}
	}

	// this.show = function(element){
	// 	var menu = document.getElementById(this.obj.id);
	// 	var childs = menu.childNodes;
	// 	this.element = element;
	// 	for(var j = 0; j < childs.length; j++){
	// 		if (this.element.elem == childs[j]) {
	// 			childs[j].hidden = true;
	// 		};
	// 	};
	// }

	// this.delete = function(element){
	// 	var menu = document.getElementById(this.obj.id);
	// 	var childs = menu.childNodes;
	// 	this.element = element;
	// 	for(var j = 0; j < childs.length; j++){
	// 		if (this.element.elem == childs[j]) {
	// 			childs[j].remove();
	// 		};
	// 	};
	// }

	// this.move = function(element, number){
	// 	var menu = document.getElementById(this.obj.id);
	// 	var childs = menu.childNodes;
	// 	this.element = element;
	// 	this.number = number;
	// 	for(var i = 0; i < childs.length; i++){
	// 		if(this.number == i){
	// 			childs[i].before(this.element.elem);
	// 		}
	// 	}
};

function Button(obj){
	MenuItem.apply(this, arguments);
};

function Select(obj){
	this.elem = document.createElement("select");
	MenuItem.apply(this, arguments);
};

function Input(obj){
	this.elem = document.createElement("input");
	MenuItem.apply(this, arguments);
};

var select2 = new Select({
	label: "Click me1",
	class: "select",
	name: "select2",
	num: 0
});

var button3 = new Button({
	label: "Click me 2",
    name: "button3",
    class: "button",
    num: 0
});

var button2 = new Button({
	label: "Click me 3",
    name: "button2",
    class: "button",
    num: 0
});

var input4 = new Input({
	label: "Click me4",
    name: "input4",
    class: "input",
    num: 0
});

var input5 = new Input({
	label: "Click me5",
    name: "input5",
    class: "input",
    num: 0
});

var input6 = new Input({
	label: "Click me6",
    name: "input6",
    class: "input",
    num: 0
});

var button4 = new Button({
	class: "button",
	name: "button4",
	label: "Click me 4"
});

function Menu(obj){
	this.obj = obj;
	this.menu = document.createElement("div");
	this.menu.id = obj.id;
	this.menu.className = obj.class;
	document.body.appendChild(this.menu);
	this.array = [];

	this.add = function(){
		for(var i = 0; i < arguments.length; i++){
			console.log(arguments[i]);
			arguments[i].add();
		};
	}
};


var menu = new Menu({
	class: "menu",
	id: 1
});

menu.add(button4, button3, button2);
