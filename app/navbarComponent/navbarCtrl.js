(function () {
    'use strict';

    angular
        .module('myApp')
        .component('navBar', {
            templateUrl:'/app/navbarComponent/navbarcomponent.html' ,
            controller: navbarCtrl,
            controllerAs:'vm',
        })

        navbarCtrl.$inject = [];

        function navbarCtrl(){



        }
})();
