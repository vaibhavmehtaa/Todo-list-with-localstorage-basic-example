'use strict';

app.service('$taskManageService', function() {
	 var $this = this;
	 $this.addNewTask = function(task){
	 	if($this.getTaskList() != null){
	 		var previousList = JSON.parse(task);
	 	}else{

	 	}

	 	localStorage.setItem("todolist",task)
	 },
	 $this.getTaskList = function(){
	 	return localStorage.getItem("todolist");
	 },
	 $this.createRow = function(task){
	 	var obj = {};
	 	obj.msg = task;
	 	obj.created = moment.now();
	 	done.done = false;
	}

})