
app.controller('homeCtrl', function($scope) {

    $scope.formData = {};
    

		$scope.updateValues = function() {
				$scope.pendingTask = [];
		    $scope.finishTask = [];
		    $scope.taskHistory = [];
        $scope.savedTask = localStorage.getItem('todos');
        $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.savedTask.toString()) : [];
        
        var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; 
				var yy = today.getFullYear();



        angular.forEach($scope.todos, function(todo) {
            if (todo.done) {
            		
            		var createdAt  = new Date(parseInt(todo.created));
            		var createdDate = createdAt.getDate();
            		var createdMonth = createdAt.getMonth() + 1;
            		var createdYear = createdAt.getFullYear();
								if((dd !== createdDate && yy >= createdYear) || mm !== createdMonth){
            			 $scope.taskHistory.push(todo);
            		}else{
                	$scope.finishTask.push(todo)
            		}

            			
           		
            } else {
                $scope.pendingTask.push(todo);
            }

        })
    }

    $scope.getId = function() {
        var maxId = _.max($scope.todos, function(list) {
            return list.id
        });
        return (_.isNumber(maxId.id) && maxId.id > 0) ? maxId.id + 1 : 1;
    }


    $scope.addNewTask = function() {
        var taskObj = {
            id: $scope.getId(),
            msg: $scope.formData.newTask,
            done: false,
            created: Date.now()
        };
        $scope.todos.push(taskObj);
        $scope.pendingTask.push(taskObj);
        $scope.formData.newTask = ''; //clear the input after adding
        $scope.save();
    };


    $scope.markDone = function(id) {
        angular.forEach($scope.todos, function(task) {
            if (task.id == id) task.done = true;
        })
        $scope.save();
    }

    $scope.removeTask = function(id) {
        angular.forEach($scope.todos, function(task, index) {
            if (task.id == id) $scope.todos.splice(index, 1)
        })
        $scope.save();
    }



    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
                $scope.todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    $scope.save = function() {
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        $scope.updateValues();
    }

    $scope.updateValues();
});
