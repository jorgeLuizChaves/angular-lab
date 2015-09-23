(function(){
	var module = angular.module("githubViewer");
	
	var github = function($http){
		var findByUser = function(username){
			return $http.get("https://api.github.com/users/" + username)
			.then(function(res){
				return res.data;
			});
		};

		var findRepoByUsername = function(username){
			var repo;
			var repoUrl = "https://api.github.com/users/" + username + "/repos";
			return $http.get(repoUrl)
				.then(function(res){
					repo = res.data;
		      return repo;
				});
		};
		
		var findRepoInfoByUsername = function(username, reponame){
		  var repo;

			var repoUrl = "https://api.github.com/users/" + username + "/repos";
		  return $http.get(repoUrl).then(function(res){ 
		    repo = res.data;
		    var contributorUrl = "https://api.github.com/repos/" + 
		    username + "/" + reponame + "/contributors";
		    return $http.get(contributorUrl).then(function(res){
		      repo.contributors = res.data;
		      return repo;
		    });
		  });
		}

		return{
			findByUser:findByUser, 
			findRepoByUsername: findRepoByUsername,
			findRepoInfoByUsername:findRepoInfoByUsername
		}
	};


	module.factory("github", github);

}());