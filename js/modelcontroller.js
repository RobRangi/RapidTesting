'use strict';

var appRapid = angular.module('appRapid', ['ui.bootstrap.collapse']);

// The router load the correct view and passed the corresponding Controller
// =========================================================================
appRapid.config(function ($routeProvider) {
    $routeProvider
        .when('/', { controller: 'cntlHome', templateUrl: 'htm/view-home.htm'})
        .when('/services', { controller: 'cntlHome', templateUrl: 'htm/view-home.htm'})
        .when('/about', { controller: 'aboutController', templateUrl: 'htm/view-about.htm'})
        .when('/courses', { controller: 'courseController', templateUrl: 'htm/view-courses.htm'})
        .when('/media', { controller: 'simpleController', templateUrl: 'htm/view-media.htm'})
        .when('/blog', { controller: 'simpleController', templateUrl: 'htm/view-blog.htm'})
        .when('/contact', { controller: 'simpleController', templateUrl: 'htm/view-contact.htm'})
        .otherwise({ redirectTo: '/' });
});

// The factories for the data - connect to external CMS, DB etc in future
// =========================================================================
appRapid.factory('rapidMenu', function() {
    var rapidMenu = {};

    rapidMenu.menuItems = 
    [ {menuRoute: '/', menuIcon: 'icon-home', menuName: 'Home'}
    , {menuRoute: '/services', menuIcon: 'icon-cog', menuName: 'Services'}
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
controllers.cntlHome = function($scope, $http) {
    $http.get('txt/modelHome.json').success(function(data){
        $scope.dataHome = data;
    });
}

// Model Controller for the About view
// ============================================================
controllers.aboutController = function ($scope, $http) {
    $http.get('txt/modelAbout.json').success(function(data){
        $scope.aboutCntl = data;
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