(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['registeredUser', 'ApiPath'];
function InfoController(registeredUser, ApiPath) {
  var $ctrl = this;
  $ctrl.registeredUser = registeredUser;
  $ctrl.basePath = ApiPath;
}


})();
