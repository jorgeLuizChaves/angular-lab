(function(){

	var app = angular.module("githubViewer", ["ngRoute"]);

	app.config(function($routeProvider){
		$routeProvider.when("/main",{
			templateUrl: "main.html",
			//the first letter of the name must be capital letter
			controller: "MainCtrl"
		}).when("/user/:username",{
		  templateUrl: "user.html", 
		  controller: "UserCtrl"
		}).when("/repo/:username/:reponame", {
		  templateUrl: "repo.html",
		  controller: "RepoCtrl" 
		})
		.otherwise({redirectTo:"/main"});
	});
}());