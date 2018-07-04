function Form(object){
	this.object = object;
	this.menu = document.createElement("form");
	this.menu.id = object.id;
	this.menu.className = object.class;
	this.menu.name = object.name;
	this.menu.method = "POST";
	var block = document.getElementById("block");
	block.appendChild(this.menu);
	this.array = [];
};

Form.prototype.send = function(){
	var arrayDOM = this.array;
	var dataArray = [];
	for(var i = 0; i < this.array.length; i++){
		if(this.array[i].elem.tagName != "BUTTON"){
			dataArray.push(this.array[i].getValue());
		};
	};
	console.log(dataArray);
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
				if(arrayDOM[i].elem.tagName != "BUTTON"){
					arrayDOM[i].resetValue();
				}
			};
		};
	};
	xhr.send(data)
};

Form.prototype.render = function(){
	var menu = document.getElementById(this.object.id);
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

FormItem.prototype.add = function(elem){
	for(var i = 0; i < arguments.length; i++){
		this.form = document.getElementById(this.object.id);
		this.clone = {};
		for(var key in arguments[i]){
			this.clone[key] = arguments[i][key];
		}
		if(arguments[i] instanceof Button){
			Button.apply(this, arguments);
		} else if(arguments[i] instanceof Select){
			Select.apply(this, arguments);
		} else if(arguments[i] instanceof Input){
			Input.apply(this, arguments);
		} else if(arguments[i] instanceof Checkbox){
			Checkbox.apply(this, arguments);
		}
		this.elem.id = arguments[i].id || "";
		this.elem.value = arguments[i].value || "";
		this.elem.innerHTML = arguments[i].text || "";
		this.elem.className = arguments[i].class || "";
		this.elem.setAttribute("name", arguments[i].name);
		this.elem.setAttribute("label", arguments[i].label);
		this.elem.setAttribute("onclick", arguments[i].function || "");
		this.clone.form = this.menu;
		this.clone.elem = this.elem;
		var form = this;
		this.clone.elem.getParent = function(){
			return form;
		}();
		this.array.push(this.clone);
	};
};

FormItem.prototype.show = function(element){
	console.log(this.array);
	this.element = element;
	for(var i = 0; i < this.array.length; i++){
		if (this.element.id == this.array[i].id) {
			this.array[i].elem.style = "visibility: hidden";
		};
	};
};

FormItem.prototype.delete = function(element){
	this.element = element;
	for(var i = 0; i < this.array.length; i++){
		if (this.element.id == this.array[i].id) {
			this.array.splice(i, 1);
		};
	};
};

FormItem.prototype.move = function(element, number){
	this.element = element;
	this.number = number;
	var index = this.array.indexOf(this.element);
	for(var i = 0; i < this.array.length; i++){
		if (this.element.id == this.array[i].id) {
			var a = this.array[i];
		};
	}
	for(var i = 0; i < this.array.length; i++){
		if(this.number == i){
			this.array.splice(this.number, 0, a);
		}
	}
};

function Button(){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("button");
	this.elem.type = "button";
}

Button.prototype = Object.create(FormItem.prototype);
Button.prototype.constructor = Button;

Button.prototype.add = function(){
	FormItem.prototype.add.apply(this, arguments);
}

function Select(){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("select");
	this.getValue = function(){
		return this.elem.value;
	}

	this.resetValue = function(){
		return this.elem.value = "";
	}
}

Select.prototype = Object.create(FormItem.prototype);
Select.prototype.constructor = Select;

function Input(){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("input");
	this.getValue = function(){
		return this.elem.value;
	}

	this.resetValue = function(){
		return this.elem.value = "";
	}
}

Input.prototype = Object.create(FormItem.prototype);
Input.prototype.constructor = Input;

function Checkbox(){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("input");
	this.elem.type = "checkbox";
	this.getValue = function(){
		return this.elem.checked;
	}

	this.resetValue = function(){
		return this.elem.checked = false;
	}
}

Checkbox.prototype = Object.create(FormItem.prototype);
Checkbox.prototype.constructor = Checkbox;

var send = new Button({
	label: "send",
    name: "send",
    class: "button",
    id: "send",
    value: "sadca",
    text: "Send",
    type: "button",
    function: "(function(){send.getParent.send()})()"
});

var reset = new Button({
	label: "reset",
    name: "reset",
    class: "button",
    id: "reset",
    text: "Reset",
    type: "reset"
});

var select2 = new Select({
	label: "Click me1",
	class: "select",
	name: "select2",
	id: "select2",
	options: ["aaaa", "bbbb", "cccc"]
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
});

Form.prototype.add = function(){
	for(var i = 0; i < arguments.length; i++){
		arguments[i].add.call(this, arguments[i]);
	};
};

Form.prototype.show = function(){
	for(var i = 0; i < arguments.length; i++){
		arguments[i].show.call(this, arguments[i]);
	};
};

Form.prototype.delete = function(){
	for(var i = 0; i < arguments.length; i++){
		arguments[i].delete.call(this, arguments[i]);
	};
};

Form.prototype.move = function(element, number){
	element.move.call(this, element, number)
};

var menu = new Form({
	class: "menu",
	id: 333,
	name: "form1"
});

var menu2 = new Form({
	class: "menu",
	id: 555,
	name: "form2"
});

var menu3 = new Form({
	class: "menu",
	id: 888,
	name: "form2"
});

menu.add(send, reset, input4, select2, checkbox1);
menu.render();

menu2.add(send, reset, input4, select2);
menu2.render();

menu3.add(send, reset, input4);
menu3.render();