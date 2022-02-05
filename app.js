(function () {
  'use strict';
  angular.module('lunchApp', [])
  .controller('LunchCheckController', mFunction);
  mFunction.inject = ['$scope'];
  function mFunction($scope) {
    $scope.foods = "";
    $scope.foodStatus ="";
    $scope.textColor = "black";

    $scope.showMessage = function () {
      var mMessage = returnMessage($scope.foods);
      $scope.foodStatus = mMessage;
    };

    function returnMessage(string) {
      var splitString = string.trim().split(',');
      var count = 0;

      splitString.forEach((item, i) => {
        if(!item.trim()==""){
            count++;
        }

      });



      if(count > 3){

        $scope.textColor = "green";
        return "Too much";
      }
      else if (count==0) {
        $scope.textColor = "red";
        return "Please Enter Data First";
      }
      else {

        $scope.textColor = "green";
        return "Enjoy!";
      }

    }

  }

})();
