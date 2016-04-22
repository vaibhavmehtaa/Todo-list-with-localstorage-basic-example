
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            controller: 'homeCtrl',
            url: "/home",
            templateUrl: "templates/home.html"

        })

    $urlRouterProvider.otherwise("/home")
})
