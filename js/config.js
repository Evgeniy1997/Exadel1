function Menu(obj){
	this.obj = obj;
	this.menu = document.createElement("form");
	this.menu.id = obj.id;
	this.menu.className = obj.class;
	this.menu.name = obj.name;
	this.menu.method = "POST";
	document.body.appendChild(this.menu);
	this.array = [];
};

Menu.prototype.send = function(){
	var arrayDOM = this.array;
	this.send = document.getElementById("send");
	this.send.onclick = function(){
		var dataArray = [];
		for(var i = 0; i < arrayDOM.length; i++){
			if(arrayDOM[i].elem.tagName == "INPUT" && arrayDOM[i].elem.type == "checkbox"){
				dataArray.push(arrayDOM[i].name + ": " + arrayDOM[i].elem.checked);
			} else if(arrayDOM[i].elem.tagName == "INPUT"){
				dataArray.push(arrayDOM[i].name + ": " + arrayDOM[i].elem.value);
			} else if(arrayDOM[i].elem.tagName == "SELECT"){

				dataArray.push(arrayDOM[i].name + ": " + arrayDOM[i].elem.value);
			}
		}
		var data = JSON.stringify(dataArray); 
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://example.com', true);
		xhr.onreadystatechange = function () {
			if (this.readyState != 4) return;
			if(xhr.status != 200) {
				alert(xhr.status);
			} else {
				alert("Запрос получен " + xhr.responseURL);
				for(var i = 0; i < arrayDOM.length; i++){
					if(arrayDOM[i].elem.tagName == "INPUT" && arrayDOM[i].elem.type == "checkbox"){
						arrayDOM[i].elem.checked = false;
					} else if(arrayDOM[i].elem.tagName == "INPUT"){
						arrayDOM[i].elem.value = "";
					} else if(arrayDOM[i].elem.tagName == "SELECT"){
						var first = arrayDOM[i].elem.firstChild;
						first.selected = true;
					}
				}
			}
		}
		xhr.send(data);

	};
		}

Menu.prototype.render = function(){
	var menu = document.getElementById(this.obj.id);
	menu.innerHTML = "";
	for(var i = 0; i < this.array.length; i++){
		if(this.array[i].options){
			for(var j = 0; j < this.array[i].options.length; j++){
				this.option = document.createElement('option');
				this.option.innerHTML = this.array[i].options[j];
				this.array[i].elem.appendChild(this.option);
			}
		}
		menu.appendChild(this.array[i].elem);
	};
};

function FormItem(obj){
	this.obj = obj;
	this.name = obj.name;
	this.label = obj.label;
	this.class = obj.class;
	this.id = obj.id;
	this.text = obj.text;
	this.value = obj.value;
	this.type = obj.type;
	this.options = obj.options;
	this.function = obj.function;
};

FormItem.prototype.add = function(){
	for(var i = 0; i < arguments.length; i++){
		if(arguments[i] instanceof Button){
			this.elem = document.createElement('button');
			this.elem.type = arguments[i].type;
		} else if(arguments[i] instanceof Select){
			this.elem = document.createElement('select');
		} else if(arguments[i] instanceof Input){
			this.elem = document.createElement('input');
		} else if(arguments[i] instanceof Checkbox){
			this.elem = document.createElement('input');
			this.elem.type = "checkbox";
		}
		this.elem.id = arguments[i].id || "";
		this.elem.value = arguments[i].value || "";
		this.elem.innerHTML = arguments[i].text || "";
		this.elem.className = arguments[i].class || "";
		this.elem.setAttribute("name", arguments[i].name);
		this.elem.setAttribute("label", arguments[i].label);
		this.elem.setAttribute("onclick", arguments[i].function) || "";
		arguments[i].elem = this.elem;
		this.array.push(arguments[i]);
	};	
};

FormItem.prototype.show = function(element){
	this.element = element;
	for(var i = 0; i < this.array.length; i++){
		if (this.element.elem == this.array[i].elem) {
			this.array[i].elem.style = "display: none";
		};
	};
};

FormItem.prototype.delete = function(element){
	this.element = element;
	for(var i = 0; i < this.array.length; i++){
		if (this.element.elem == this.array[i].elem) {
			this.array.splice(i, 1);
		};
	};
};

FormItem.prototype.move = function(element, number){
	this.element = element;
	this.number = number;
	var index = this.array.indexOf(this.element);
	for(var i = 0; i < this.array.length; i++){
		if(this.number == i){
			this.array.splice(this.number, 0, this.element);
			this.array.splice(index, 1);
		}
	}
};

function Button(obj){
	FormItem.apply(this, arguments);
};

Button.prototype = Object.create(FormItem.prototype);
Button.prototype.constructor = Button;

function Select(obj){
	FormItem.apply(this, arguments);
};

Select.prototype = Object.create(FormItem.prototype);
Select.prototype.constructor = Select;

function Input(obj){
	FormItem.apply(this, arguments);
};

Input.prototype = Object.create(FormItem.prototype);
Input.prototype.constructor = Input;

function Checkbox(obj){
	FormItem.apply(this, arguments);
};

Checkbox.prototype = Object.create(FormItem.prototype);
Checkbox.prototype.constructor = Checkbox;

var select2 = new Select({
	label: "Click me1",
	class: "select",
	name: "select2",
	id: "select2",
	options: ["aaaaaa", "bbbbbb", "ccccccc"]
});

var select3 = new Select({
	label: "Click me1",
	class: "select",
	name: "select3",
	id: "select3",
	options: ["aaaaa3", "bbbbb3", "cccccc3"]
});

var button3 = new Button({
	label: "Click me 3",
    name: "button3",
    class: "button",
    id: "button3",
    text: "button3",
    value: "adasdw"
});

var input4 = new Input({
	label: "Click me4",
    name: "input4",
    class: "input",
    id: "input4",
    text: "input4",
    value: "adasdw"
});

var checkbox1 = new Checkbox({
	label: "Click me4",
    name: "checkbox1",
    class: "checkbox",
    text: "input4",
    value: "adasdw"
});

var reset = new Button({
	label: "reset",
    name: "reset",
    class: "button",
    id: "reset",
    text: "Reset",
    type: "reset"
});

var send = new Button({
	label: "send",
    name: "send",
    class: "button",
    id: "send",
    text: "Send",
    type: "button",
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
	id: 1,
	name: "form1"
});

menu.add(send, reset, input4, select2, checkbox1, select3);
menu.render();
menu.send();