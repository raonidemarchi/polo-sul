app.config(function($routeProvider) {

    $routeProvider

        .when('/home', {
            templateUrl: 'view/home.html'
        })

        .otherwise({ redirectTo: '/home' });

});