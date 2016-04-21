/**
 * Author: Vaibhav Mehta
 * Company: Grofers
 * Created: 19 Dec 15
 */

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            controller: 'homeCtrl',
            url: "/home",
            templateUrl: "templates/home.html"

        })

    $urlRouterProvider.otherwise("/home")
})
