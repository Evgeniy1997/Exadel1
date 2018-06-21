function Menu(obj){
	this.obj = obj;
	this.menu = document.createElement("div");
	this.menu.id = obj.id;
	this.menu.className = obj.class;
	document.body.appendChild(this.menu);
	this.array = [];
};

Menu.prototype.render = function(){
	var menu = document.getElementById(this.obj.id);
	menu.innerHTML = "";
	for(var i = 0; i < this.array.length; i++){
		menu.appendChild(this.array[i].elem);
	};
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
		if(arguments[i] instanceof Button){
			this.elem = document.createElement('button');
		} else if(arguments[i] instanceof Select){
			this.elem = document.createElement('select');
		} else if(arguments[i] instanceof Input){
			this.elem = document.createElement('input');
		};
		var menu = document.getElementById(this.obj.id)
		this.elem.innerHTML = arguments[i].label;
		this.elem.className = arguments[i].class;
		this.elem.setAttribute("name", arguments[i].name);
		arguments[i].elem = this.elem;
		this.array.push(arguments[i]);
		Menu.prototype.render.call(this, arguments);
	};
};

MenuItem.prototype.show = function(element){
	this.element = element;
	for(var i = 0; i < this.array.length; i++){
		if (this.element.elem == this.array[i].elem) {
			this.array[i].elem.style = "visibility: hidden";
		};
	};
};

MenuItem.prototype.delete = function(element){
	this.element = element;
	console.log(this.array);
	for(var i = 0; i < this.array.length; i++){
		if (this.element.elem == this.array[i].elem) {
			this.array.splice(i, 1);
			Menu.prototype.render.call(this, arguments);
		};
	};
};

MenuItem.prototype.move = function(element, number){
	this.element = element;
	this.number = number;
	var index = this.array.indexOf(this.element);
	console.log(index);
	for(var i = 0; i < this.array.length; i++){
		if(this.number == i){
			this.array.splice(this.number, 0, this.element);
			this.array.splice(index+1, 1);
			Menu.prototype.render.call(this, arguments);
		}
	}
};

function Button(obj){
	MenuItem.apply(this, arguments);
};

Button.prototype = Object.create(MenuItem.prototype);
Button.prototype.constructor = Button;

function Select(obj){
	MenuItem.apply(this, arguments);
};

Select.prototype = Object.create(MenuItem.prototype);
Select.prototype.constructor = Select;

function Input(obj){
	MenuItem.apply(this, arguments);
};

Input.prototype = Object.create(MenuItem.prototype);
Input.prototype.constructor = Input;

var select2 = new Select({
	label: "Click me1",
	class: "select",
	name: "select2",
	num: 0
});

var button3 = new Button({
	label: "Click me 3",
    name: "button3",
    class: "button",
    num: 0
});

var button2 = new Button({
	label: "Click me 2",
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
	label: "Click me 4",
	num: 0
});

Menu.prototype.add = function(){
	for(var i = 0; i < arguments.length; i++){
		arguments[i].add.call(this, arguments[i]);
	};
};

Menu.prototype.show = function(){
	for(var i = 0; i < arguments.length; i++){
		arguments[i].show.call(this, arguments[i]);
	};
};

Menu.prototype.delete = function(){
	for(var i = 0; i < arguments.length; i++){
		arguments[i].delete.call(this, arguments[i]);
	};
};

Menu.prototype.move = function(element, number){
	element.move.call(this, element, number)
};

var menu = new Menu({
	class: "menu",
	id: 1
});

menu.add(button4, button3, button2, input4, input5, input6, select2);
menu.show(button4);
menu.delete(button3);
menu.move(input4, 1);