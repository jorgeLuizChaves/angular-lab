(function(){
  
  var module = angular.module("githubViewer");
  
  var RepoCtrl = function($scope, github, $routeParams){
    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    $scope.username = username;
     
    var onRepoSuccess = function(data){ 
      $scope.total_issues = data.open_issues_count;
      $scope.contributors = data.contributors;
    };
    
    var onRepoError = function(){   
      alert("error");
    }
    
    var promise =github.findRepoInfoByUsername(username, reponame);
    
    promise.then(onRepoSuccess, onRepoError);
  };
  
  module.controller("RepoCtrl", RepoCtrl);
}());