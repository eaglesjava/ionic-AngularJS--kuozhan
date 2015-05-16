angular.module("ezApp",["ionic"])

.config(function($stateProvider){
	//配置状态机的各个状态
	$stateProvider.state("state1",{templateUrl:"state1.html"})
	$stateProvider.state("state2",{templateUrl:"state2.html"})
	$stateProvider.state("state3",{templateUrl:"state3.html"});
})

.controller("ezCtrl",function($scope,$state){
	//根据参数切换到指定的状态
	$scope.go = function(state){
		$state.go(state);
	};
});

