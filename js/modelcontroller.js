'use strict';

var appRapid = angular.module('appRapid', ['ui.bootstrap.collapse']);

// The router load the correct view and passed the corresponding Controller
// =========================================================================
appRapid.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { controller: 'pitchController', templateUrl: 'htm/view-home.htm'})
        .when('/about', { controller: 'simpleController', templateUrl: 'htm/view-about.htm'})
        .when('/courses', { controller: 'courseController', templateUrl: 'htm/view-courses.htm'})
        .when('/media', { controller: 'simpleController', templateUrl: 'htm/view-media.htm'})
        .when('/blog', { controller: 'simpleController', templateUrl: 'htm/view-blog.htm'})
        .when('/contact', { controller: 'simpleController', templateUrl: 'htm/view-contact.htm'})
        .otherwise({ redirectTo: '/home' });
});

// The factories for the data - connect to external CMS, DB etc in future
// =========================================================================
appRapid.factory('rapidMenu', function() {
    var rapidMenu = {};

    rapidMenu.menuItems = 
    [ {menuRoute: '/home', menuIcon: 'icon-home', menuName: 'Home'}
    , {menuRoute: '/about', menuIcon: 'icon-cog', menuName: 'About'}
    , {menuRoute: '/courses', menuIcon: 'icon-user', menuName: 'Courses'}
    , {menuRoute: '/media', menuIcon: 'icon-camera', menuName: 'Media'}
    , {menuRoute: '/blog', menuIcon: 'icon-book', menuName: 'Blog'}
    , {menuRoute: '/contact', menuIcon: 'icon-envelope', menuName: 'Contact'}];

    return rapidMenu;
})



var controllers = {};

// Controls the Menu bar routenames, items and icons
// ============================================================
controllers.menuController = function ($scope, $location, rapidMenu) {
    $scope.location = $location;
    $scope.menuItems = rapidMenu.menuItems;   
};

// Model Controller for the Sales-Pitch section
// ============================================================
controllers.pitchController = function($scope, $http) {
    $http.get('txt/modelHome.json').success(function(data){
        $scope.homeCntl = data;
    });
}

// Model Controller for the Courses.htm
// ============================================================
controllers.courseController = function ($scope, $http) {
    $http.get('txt/modelCourse.json').success(function(data){
        $scope.courseCntl = data;
    });
}

controllers.simpleController = function ($scope) {
};

appRapid.controller(controllers);