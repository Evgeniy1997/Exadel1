function Input(object){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("input");
	this.elem.id = object.id || "";
	this.elem.value = object.value || "";
	this.elem.className = object.class || "";
	this.elem.name = object.name;
	this.domelem = this.elem;
	if (typeof object.function === "function") {
        this.elem.addEventListener("", object.function.bind(this));
    }
}

Input.prototype = Object.create(FormItem.prototype);
Input.prototype.constructor = Input;

Input.prototype.getValue = function() {
   return this.elem.value;
};

Input.prototype.resetValue = function(parent) {
    return this.elem.value = "";
};
