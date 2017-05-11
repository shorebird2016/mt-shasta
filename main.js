angular.module('shastaApp', ['ngRoute', 'ngMap'])
    .controller('shastaCtrl', ['$http', function ($http) {
        var vm = this;
        vm.msg = "Hello world from shasta controller....";
        vm.cityCoord = "[41.32069, -122.31503]";//Mt. Shasta
        vm.houseCoord = "[41.376246, -122.369850]";//The house 5817 Serrano Dr.
        vm.originCoord = "[37.333913, -122.044765]";//my home
        vm.wayPoints = [
            { location: { lat:37.342155, lng: -121.997373 }, stopover: true }, //C&C home
            { location: { lat:37.377740, lng: -121.850216 }, stopover: true },//Chi-chang home 37.377740, -121.850216
            { location: { lat:38.366529, lng: -121.957151 }, stopover: true },//vacaville outlet mall 38.366529, -121.957151
            { location: { lat:40.616870, lng: -122.358667 }, stopover: true },//redding lunch 40.616870, -122.358667
            { location: { lat:41.242296, lng: -122.266966 }, stopover: true }//massbare waterfall Dunsmuir 41.242296, -122.266966
        ];
        vm.housePhotos = [
            "front-view", "front-view2", "side-view", "living-room", "living-room2", "kitchen", "kitchen-2", "dining-room",
            "bedroom-queen", "twin-bedroom", "master-bath", "hot-tub", "hot-tub2", "game-room", "game-room2", "half-bath"
        ];
    }])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/',       { templateUrl: 'tpl/city.html' } )
            .when('/path',   { templateUrl: 'tpl/direction.html' } )
            .when('/house',  { templateUrl: 'tpl/house.html' } )
            .when('/day1',   { templateUrl: 'tpl/day1.html' } )
            .when('/day2',   { templateUrl: 'tpl/day2.html' } )
            .when('/day3',   { templateUrl: 'tpl/day3.html' } )
            .when('/day4',   { templateUrl: 'tpl/day4.html' } )
            .otherwise( {redirectTo: '!/house'} )
    }])
;
