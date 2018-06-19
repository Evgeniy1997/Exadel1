function Menu(obj){
	this.obj = obj;
	this.menu = document.createElement("div");
	this.menu.id = obj.id;
	this.menu.className = obj.class;
	document.body.appendChild(this.menu);
};

function MenuItem(obj){
	this.obj = obj;
	this.name = obj.name;
	this.label = obj.label;
	this.class = obj.class;
	this.num = obj.num;
};

MenuItem.prototype.add = function(){
	for(var i = 0; i < arguments.length; i++){
		var menu = document.getElementById(this.obj.id);
		this.elem.innerHTML = arguments[i].label;
		this.elem.className = arguments[i].class;
		this.elem.setAttribute("name", arguments[i].name);
		menu.appendChild(this.elem);
		arguments[i].elem = this.elem;
	}
};

MenuItem.prototype.show = function(element){
	var menu = document.getElementById(this.obj.id);
	var childs = menu.childNodes;
	this.element = element;
	console.log(this.element);
	console.log("_________");
	for(var j = 0; j < childs.length; j++){
		if (this.element.elem == childs[j]) {
			console.log(childs[j] + this.element.elem);
			childs[j].hidden = true;
		};
	};
};

MenuItem.prototype.delete = function(element){
	var menu = document.getElementById(this.obj.id);
	var childs = menu.childNodes;
	this.element = element;
	console.log(this.element);
	console.log("_________");
	for(var j = 0; j < childs.length; j++){
		if (this.element.elem == childs[j]) {
			console.log(childs[j] + this.element.elem);
			childs[j].remove();
		};
	};
};

function Button(obj){
	MenuItem.apply(this, arguments);

};

Button.prototype = Object.create(MenuItem.prototype);
Button.prototype.constructor = Button;

Button.prototype.add = function(){
	this.elem = document.createElement("button");
	var self = this;
	MenuItem.prototype.add.apply(this, arguments);
};

function Select(obj){
	MenuItem.apply(this, arguments);
};

Select.prototype = Object.create(MenuItem.prototype);
Select.prototype.constructor = Select;

Select.prototype.add = function(){
	this.elem = document.createElement("select");
	MenuItem.prototype.add.apply(this, arguments);
}

function Input(obj){
	MenuItem.apply(this, arguments);
};

Input.prototype = Object.create(MenuItem.prototype);
Input.prototype.constructor = Input;

Input.prototype.add = function(){
	this.elem = document.createElement("input");
	MenuItem.prototype.add.apply(this, arguments);
}

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

Menu.prototype.add = function(){
	for(var i = 0; i < arguments.length; i++){
		if(arguments[i] instanceof Button){
			Button.prototype.add.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Select){
			Select.prototype.add.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Input){
			Input.prototype.add.call(this, arguments[i]);
		};
	};
};

Menu.prototype.show = function(){
	for(var i = 0; i < arguments.length; i++){
		if(arguments[i] instanceof Button){
			Button.prototype.show.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Select){
			Select.prototype.show.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Input){
			Input.prototype.show.call(this, arguments[i]);
		};
	};
};

Menu.prototype.delete = function(){
	for(var i = 0; i < arguments.length; i++){
		if(arguments[i] instanceof Button){
			Button.prototype.delete.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Select){
			Select.prototype.delete.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Input){
			Input.prototype.delete.call(this, arguments[i]);
		};
	};
};

Menu.prototype.move = function(){
	for(var i = 0; i < arguments.length; i++){
		if(arguments[i] instanceof Button){
			Button.prototype.move.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Select){
			Select.prototype.move.call(this, arguments[i]);
		}
		else if(arguments[i] instanceof Input){
			Input.prototype.move.call(this, arguments[i]);
		};
	};
};

var menu = new Menu({
	class: "menu",
	id: 1
});

menu.add(button4, button3, button2, input4, input5, input6, select2);
menu.show(button4);
menu.delete(input5);