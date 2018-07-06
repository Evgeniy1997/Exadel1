function Checkbox(object){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("input");
	this.elem.id = object.id || "";
	this.elem.className = object.class || "";
	this.elem.name = object.name;
	this.elem.type = "checkbox";
	this.domelem = this.elem;

	this.getValue = function(){
		return this.elem.checked;
	}

	this.resetValue = function(){
		return this.elem.checked = false;
	}
}

Checkbox.prototype = Object.create(FormItem.prototype);
Checkbox.prototype.constructor = Checkbox;