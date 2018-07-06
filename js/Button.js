function Button(object){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("button");
	this.elem.type = object.type;
	this.elem.id = object.id || "";
	this.elem.value = object.value || "";
	this.elem.innerHTML = object.text || "";
	this.elem.className = object.class || "";
	this.elem.name = object.name;
	this.elem.setAttribute("label", object.label);
	if (typeof object.function === "function") {
        this.elem.addEventListener("click", object.function.bind(this));
    }
}

Button.prototype = Object.create(FormItem.prototype);
Button.prototype.constructor = Button;