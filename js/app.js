// Main module
var app = angular.module('electronApp',['ngRoute']);
var mysql = require('mysql');

// Example usage of mysql on electron 
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "electronDB"
});

// var query = "CREATE TABLE IF NOT EXISTS electronTbl (id int primary key auto_increment, field_one varchar(25))";
// connection.query(query,function(err, rows){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(rows);
// 	}
// });


app.controller('mainCtrl',function($scope, $http){

	$scope.tab1Stat = true;
	$scope.tab2Stat = false;

	$scope.tabSwitcher = function(tabToSet){
		if(tabToSet == 1){
			$scope.tab1Stat = true;
			$scope.tab2Stat = false;
		}
		else{
			$scope.tab1Stat = false;
			$scope.tab2Stat = true;
		}
	};

	$http.get('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=67bf39cd4b7d4aa8a6feb1b1a6b768a6')
	.then(function(res){
		$scope.newsData = res.data.articles;
	});


	$http.get('https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=67bf39cd4b7d4aa8a6feb1b1a6b768a6')
	.then(function(res){
		$scope.cnnData = res.data.articles;
	});
});