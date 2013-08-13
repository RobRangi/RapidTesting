'use strict';

var appRapid = angular.module('appRapid', ['ui.bootstrap.collapse']);

// The router load the correct view and passed the corresponding Controller
// =========================================================================
appRapid.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'cntlHome',
            templateUrl: 'htm/view-home.htm'
        })
        .when('/services', {
            controller: 'cntlSimple',
            templateUrl: 'htm/view-services.htm'
        })
        .when('/about', {
            controller: 'cntlAbout',
            templateUrl: 'htm/view-about.htm'
        })
        .when('/media', {
            controller: 'cntlSimple',
            templateUrl: 'htm/view-media.htm'
        })
        .when('/blog', {
            controller: 'cntlSimple',
            templateUrl: 'htm/view-blog.htm'
        })
        .when('/contact', {
            controller: 'cntlSimple',
            templateUrl: 'htm/view-contact.htm'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// The factories for the data - connect to external CMS, DB etc in future
// =========================================================================
appRapid.factory('rapidMenu', function() {
    var rapidMenu = {};

    rapidMenu.menuItems = [{
        menuRoute: '/',
        menuIcon: 'icon-home',
        menuName: 'Home'
    }, {
        menuRoute: '/services',
        menuIcon: 'icon-cog',
        menuName: 'Services'
    }, {
        menuRoute: '/about',
        menuIcon: 'icon-cog',
        menuName: 'About'
    }, {
        menuRoute: '/media',
        menuIcon: 'icon-camera',
        menuName: 'Media'
    }, {
        menuRoute: '/blog',
        menuIcon: 'icon-book',
        menuName: 'Blog'
    }, {
        menuRoute: '/contact',
        menuIcon: 'icon-envelope',
        menuName: 'Contact'
    }];

    return rapidMenu;
})



var controllers = {};

// Controls the Menu bar routenames, items and icons
// ============================================================
controllers.menuController = function($scope, $location, rapidMenu) {
    $scope.location = $location;
    $scope.menuItems = rapidMenu.menuItems;
};

// Model Controller for the Sales-Pitch section
// ============================================================
controllers.cntlHome = function($scope, $http) {
    $http.get('txt/modelHome.json').success(function(data) {
        $scope.dataHome = data;
    });
}

// Model Controller for the About view
// ============================================================
controllers.cntlAbout = function($scope, $http) {
    $http.get('txt/modelAbout.json').success(function(data) {
        $scope.dataAbout = data;
    });
}

// Model Controller for the Courses.htm
// ============================================================
controllers.cntlCourse = function($scope, $http) {
    $http.get('txt/modelCourse.json').success(function(data) {
        $scope.dataCourse = data;
    });
}

// Model Controller for the Blog view
// ============================================================
controllers.cntlBlog = function($scope, $http) {
    $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=http://bjosman.wordpress.com/feed/').success(function(data) {
        $scope.dataBlog = data.responseData.feed.entries;
    });
}

controllers.cntlSimple = function($scope) {};

appRapid.controller(controllers);
