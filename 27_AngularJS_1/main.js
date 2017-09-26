var myApp = angular.module('studentsList', ['ui.router']);

myApp.controller('Ctrl', ['$scope', function($scope) {
    $scope.students = [
        {
            name: 'Liudmyla',
            surname: 'Bashta',
            photo: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            id: 0,
            date: '01.01.1994',
            phone: 0937821986
        },
        {
            name: 'Roman',
            surname: 'Chapkailo',
            photo: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            id: 1,
            date: '23.12.1993',
            phone: 0931841843
        },
        {
            name: 'Dalivska',
            surname: 'Khrystyna',
            photo: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            id: 2,
            date: '26.09.1995',
            phone: 0631284736
        },
        {
            name: 'Ivan',
            surname: 'Gnatyshyn',
            photo: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            id: 3,
            date: '01.09.1994',
            phone: 0637491947
        }
    ];
}]);

myApp.directive('student', function() {
        return {
            restrict: 'E',
            scope: {
                name: '=',
                surname: '=',
                photo: '=',
                id: '='
            },
            priority: 0,
            transclude: false,
            template: `<div class='student'>
                            <img src="{{photo}}" alt="student photo" ui-sref="detailed({id:{{id}}})">
                            <div class='info'>
                                <input ng-show="ifEdit" ng-model="name">
                                <input ng-show="ifEdit" ng-model="surname">
                                <span ng-show="!ifEdit">{{name}}</span>
                                <span ng-show="!ifEdit">{{surname}}</span>
                            </div>
                            <button ng-click="ifEdit=true" ng-show="!ifEdit">EDIT</button>
                            <button ng-click="ifEdit=false" ng-show="ifEdit">SAVE</button>
                    </div>`

    };
});


myApp.config(function ($stateProvider) {
    var detailed = {
        name: 'detailed',
        url: '/detailed/:id',
        template: function ($stateParams) {
            return `<div class='detailed-info'>
                        <img src="{{students[${$stateParams.id}].photo}}">
                        <div>{{students[${$stateParams.id}].name}} {{students[${$stateParams.id}].surname}}</div>
                        <div>Date of birth: {{students[${$stateParams.id}].date_of_birth}}</div>
                        <div>Phone: {{students[${$stateParams.id}].phone}}</div>
                    </div>`
        },
        controller: 'Ctrl',
    };

    var home = {
        name: 'home',
        url: '/',
        template: `<div>
                        <student ng-repeat="student in students" id="student.id" name="student.name" surname="student.surname" photo="student.photo"></student>
                    </div>`,
        controller: 'Ctrl',
    };

    $stateProvider.state(home);
    $stateProvider.state(detailed);
});
