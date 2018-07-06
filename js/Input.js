function Input(object){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("input");
	this.elem.id = object.id || "";
	this.elem.value = object.value || "";
	this.elem.className = object.class || "";
	this.elem.name = object.name;
	this.domelem = this.elem;


}

Input.prototype = Object.create(FormItem.prototype);
Input.prototype.constructor = Input;

Input.prototype.getValue = function() {
   return this.elem.value;
};

Input.prototype.resetValue = function(parent) {
    return this.elem.value = "";
};

Input.prototype.errorMessage = function() {
    if(!this.span){
    	this.elem.style = "color: red"
    	this.span = document.createElement("span");
		this.elem.after(this.span);
    	this.span.style = "color: red"
	} else {
		this.elem.style = "color: black"
		this.span.remove();
    }
};
