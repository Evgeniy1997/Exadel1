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
	this.validator = obj.validator;
	this.parent = null;
};

FormItem.prototype.getParent = function() {
    return this.parent;
}
FormItem.prototype.setParent = function(parent) {
    this.parent = parent;
}