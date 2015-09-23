(function(){
    var app = angular.module("githubViewer");
	// custom service don't need to have a dollar sign to be declared.
	var mainCtrl = function($scope, $interval, $location){

		$scope.search = function(name){
			if(countDownInterval){
				//var promise =  github.findByUser(name);
				//promise.then(onUser, onError);
				$interval.cancel(countDownInterval);
				$scope.countDown = null;
			}
			$location.path("/user/" + name);
			
		}

		var decremetation = function(){
		$scope.countDown -= 1;

		if($scope.countDown < 1){
			$scope.search($scope.inputName);
		}
	}

	var countDownInterval = null;
	var startCountDown = function(){
		//function, timer, how much times to run
		countDownInterval = $interval(decremetation, 1000, $scope.countDown);
	}

	$scope.countDown = 5;
	startCountDown();
	};


	//app.controller("MainCtrl", ["$scope", "$http", "$interval", MainCtrl]);
	//the first letter of the name must be capital letter
	app.controller("MainCtrl", mainCtrl);

}());