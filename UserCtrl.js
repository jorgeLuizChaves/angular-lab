(function(){
	
	var app = angular.module("githubViewer");

	// custom service don't need to have a dollar sign to be declared.
	var UserCtrl = function($scope, github, $routeParams){

		
		var onRepo = function(data){
			$scope.repos = data;
			//set location to be scrolled
			//$location.hash("userdetails");
			//$anchorScroll();
		}

		var onRepoError = function(res){
			if(res.status == 404){
				$log.error("repository not found");
				alert("user not found");
			}else{
				$log.error("generic error");
				alert("error to get repo");
			}
		$scope.name = null;
		}

		var onUser = function(data){
			var user = data;
			$scope.name = user.name;

			var promise = github.findRepoByUsername(user.login);
			promise.then(onRepo, onRepoError);
		}

		var onError = function(res){
			if(res.status == 404){
				log.error("user not found");
				alert("user not found");
			}else{
				log.error("generic error.");
				alert("error to get user");
			}
			$scope.name = null;
		}

	$scope.inputName = $routeParams.username;
	$scope.orderByOpt = "name"; 
	github.findByUser($scope.inputName).then(onUser, onError);
	};

	app.controller("UserCtrl", UserCtrl);

}());