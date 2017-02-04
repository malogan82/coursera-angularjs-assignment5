(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + ".json").then(function (response) {
      return response.data;
    });
  };

  service.saveInformation = function (user) {
    service.user = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    menuItem: {
                               name: user.menuItem.name,
                               description: user.menuItem.description,
                               short_name: user.menuItem.short_name
                              }
                   };
  };

  service.getRegisteredUser = function () {
    if(service.user){
      return {
              firstName: service.user.firstName,
              lastName: service.user.lastName,
              email: service.user.email,
              phone: service.user.phone,
              menuItem : {
                          name: service.user.menuItem.name,
                          description: service.user.menuItem.description,
                          short_name: service.user.menuItem.short_name
                         }
             };
    }else {
      return {};
    }
  };

}



})();
