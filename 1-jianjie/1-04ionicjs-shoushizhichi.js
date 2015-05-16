angular.module("ezApp", ["ionic"])
	.controller("ezCtrl", function($scope) {
		$scope.icon = "ion-arrow-expand";
		$scope.onSwipeUp = function() {
			$scope.icon = "ion-arrow-up-a";
		};
		$scope.onSwipeDown = function() {
			$scope.icon = "ion-arrow-down-a";
		};
		$scope.onSwipeLeft = function() {
			$scope.icon = "ion-arrow-left-a";
		};
		$scope.onSwipeRight = function() {
			$scope.icon = "ion-arrow-right-a";
		};
	});