(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.dishList="";
		$scope.message = "";
		$scope.arrayofDishes=[];
		// $scope.numberofDishes = $scope.dishList.split().length
		

	$scope.returnMessage = function() {
		
		$scope.arrayofDishes = $scope.dishList.split(",");

		console.log($scope.arrayofDishes.length);

		console.log($scope.arrayofDishes[0].valueOf());

		// if ($scope.arrayofDishes.length = 1 && $scope.arrayofDishes[0].valueOf() == "" ) {
		// 	$scope.message = "Please enter data first";
		// }

		if ($scope.arrayofDishes.length <= 3) {
			 $scope.message = "Enjoy!";
			}
		
		else if ($scope.arrayofDishes.length > 3){
			$scope.message = "Too Much!";
		}

		if ($scope.arrayofDishes.length = 1 && $scope.arrayofDishes[0].valueOf() == "" ) {
			$scope.message = "Please enter data first!";
		}
		
		return $scope.message
		
	};
};

})();
