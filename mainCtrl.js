(function(){
	var app = angular.module("githubViewer", []);


	var MainCtrl = function($scope, $http){

		$scope.orderByOpt = "name";
		var onRepo = function(res){
			$scope.repos = res.data;
		}

		var onRepoError = function(){
			alert("error to get repo");
		}

		var onUser = function(res){
			var user = res.data;
			$scope.name = user.name;

			var promise = $http.get("https://api.github.com/users/" + user.login + "/repos");
			promise.then(onRepo, onRepoError);
		}

		var onError = function(res){
			alert("error to get user");
		}

		$scope.search = function(name){
			var promise = $http.get("https://api.github.com/users/" + name);

			promise.then(onUser, onError);

		}
	};

	app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);

}());