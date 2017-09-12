(function () {
    'use strict';

    angular
        .module('myApp')
        .component('cardComponent', {
            templateUrl:'app/cardComponent/cardcomponent.html' ,
            controller: cardCtrl,
            controllerAs:'vm',
        })

        cardCtrl.$inject = [];

        function cardCtrl(){



        }
})();
