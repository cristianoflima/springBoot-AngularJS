app.controller('homeController', function homeController($scope, $location){
	
	$scope.title = 'Home page -  REDIRECTED';
	
	$scope.goToFirstPage = function(){
		$location.path("/fp");
	}
	
});