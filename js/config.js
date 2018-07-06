var send = new Button({
	label: "send",
    name: "send",
    class: "button",
    id: "send",
    value: "sadca",
    text: "Send",
    type: "button",
	function: (function(){
    	this.getParent().send();
    })
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

var select3 = new Select({
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
    value: "adasdw",
    validator: (function(){
    	var value = this.getValue();
    	if(value > 100){
			this.errorMessage();
			this.span.innerHTML = "Вы ввели цифру больше 100!!!";
			return false;
	    } else {
	    	this.errorMessage();
	    	return true;
	    } 	
    })
});

var input5 = new Input({
	label: "Click me4",
    name: "input4",
    class: "input",
    id: "input5",
    text: "input4",
    value: "ghgfhgf",
    validator: (function(){
    	var value = this.getValue();
    	if(value.indexOf("@") == -1){
			this.errorMessage();
			this.span.innerHTML = "Введите email!!!"
			return false;
	    } else {
	    	this.errorMessage();
	    	return true;
	    } 	
    })
});

var checkbox1 = new Checkbox({
	label: "Click me4",
    name: "checkbox1",
    class: "checkbox",
});

var menu = new Form({
	class: "menu",
	id: 333,
	name: "form1"
});

menu.add(send, 	reset, input5, input4, select3);
menu.render();

var menu2 = new Form({
	class: "menu",
	id: 444,
	name: "form1"
});

menu2.add(select2, checkbox1);
menu2.render();