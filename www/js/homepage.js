$scope.goToOption = function ( option ) {
            switch ( option ) {
            case 1:
                if ( $scope.currentOption !== 1 ) {
                    $scope.currentOption = option;
                }
                break;
            case 2:
                if ( $scope.currentOption !== 2 ) {

                    $scope.currentOption = option;
                }
                break;
	     case 3:
               if ( $scope.currentOption !== 3 ) {
                    
                    $scope.currentOption = option;
                }
                break;
            }
        }
