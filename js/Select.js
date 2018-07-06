function Select(object){
	FormItem.apply(this, arguments);
	this.elem = document.createElement("select");
	this.elem.id = object.id || "";
	this.elem.className = object.class || "";
	this.elem.name = object.name;
	this.domelem = this.elem;

	if(object.options){
		for(var j = 0; j < object.options.length; j++){
			this.option = document.createElement('option');
			this.option.innerHTML = object.options[j];
			this.elem.appendChild(this.option);
		}
	}

	this.getValue = function(){
		return this.elem.value;
	}

	this.resetValue = function(){
		return this.elem.firstChild.selected = true;
	}
}

Select.prototype = Object.create(FormItem.prototype);
Select.prototype.constructor = Select;
