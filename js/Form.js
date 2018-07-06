function Form(object){
	this.object = object;
	this.form = document.createElement("form");
	this.form.id = object.id;
	this.form.className = object.class;
	this.form.name = object.name;
	this.form.method = "POST";
	var block = document.getElementById("block");
	block.appendChild(this.form);
	this.array = [];
};

Form.prototype.add = function(elem){
	for(var i = 0; i < arguments.length; i++){
		arguments[i].setParent(this);
        this.array.push(arguments[i]);
	};
	console.log(this.array);
};

Form.prototype.show = function(element){
	this.element = element;
	for(var i = 0; i < this.array.length; i++){
		if (this.element.id == this.array[i].id) {
			this.array[i].elem.style = "visibility: hidden";
		};
	};
};

Form.prototype.delete = function(element){
	this.element = element;
	for(var i = 0; i < this.array.length; i++){
		if (this.element.id == this.array[i].id) {
			this.array.splice(i, 1);
		};
	};
};

Form.prototype.move = function(element, number){
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

Form.prototype.getData = function(){
	var data = [];
	for(var i = 0; i < this.array.length; i++){
		if (this.array[i].getValue){
			if(this.array[i].validator){
				var c = this.array[i].validator();
				if(c == false){
					data = null;
				}
			}
			data.push(this.array[i].getValue());
		}
	};
	return data;
}

Form.prototype.resetData = function(){
	for(var i = 0; i < this.array.length; i++){
		if (this.array[i].elem.tagName != "BUTTON") {
			this.array[i].resetValue();
		}
	};
}

Form.prototype.send = function(){
	var self = this;
	var arrayDOM = this.array;
	var dataArray = this.getData();
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
			self.resetData();
		};
	};
	xhr.send(data)
};

Form.prototype.render = function(){
	this.form.innerHTML = "";
	for(var i = 0; i < this.array.length; i++){
		this.form.appendChild(this.array[i].elem);
	};
};