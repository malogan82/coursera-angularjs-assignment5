(function () {
"use strict";

angular.module('public')
.controller('FormController', FormController);

FormController.$inject = ['MenuService'];

function FormController(MenuService) {
  var $ctrl = this;
  $ctrl.errorMessage = "";
  $ctrl.message = "";
  $ctrl.menuItem = {};
  $ctrl.getMenuItem = function(shortName){
    var promise = MenuService.getMenuItem(shortName);
    promise.then(function(response) {
			$ctrl.user.menuItem = response;
      $ctrl.errorMessage = "";
      MenuService.saveInformation($ctrl.user);
      $ctrl.message = "Your information has been saved";
		}).catch(function (error) {
			console.log(error);
      $ctrl.errorMessage = "No such menu number exists";
      $ctrl.message = "";
		})
  }
}


})();
