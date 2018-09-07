app.controller('firstPageController', function firstPageController($scope, $location){
	
	$scope.title = 'First Page - REDIRECTED';
	
	$scope.goToHome = function(){
		$location.path("/");
	}
	
});