'use strict';

var appRapid = angular.module('appRapid', ['ui.bootstrap.accordion']);

// The router load the correct view and passed the corresponding Controller
// =========================================================================
appRapid.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { controller: 'pitchController', templateUrl: 'htm/home.htm'})
        .when('/services', { controller: 'simpleController', templateUrl: 'htm/services.htm'})
        .when('/courses', { controller: 'courseController', templateUrl: 'htm/courses.htm'})
        .when('/media', { controller: 'simpleController', templateUrl: 'htm/media.htm'})
        .when('/blog', { controller: 'simpleController', templateUrl: 'htm/blog.htm'})
        .when('/contact', { controller: 'simpleController', templateUrl: 'htm/contact.htm'})
        .otherwise({ redirectTo: '/home' });
});

var controllers = {};

// Controls the Menu bar routenames, items and icons
// ============================================================
controllers.menuController = function ($scope, $location) {
    $scope.location = $location;
    $scope.menuItems = 
    [ {menuRoute: '/home', menuIcon: 'icon-home', menuName: 'Home'}
    , {menuRoute: '/services', menuIcon: 'icon-cog', menuName: 'Services'}
    , {menuRoute: '/courses', menuIcon: 'icon-user', menuName: 'Courses'}
    , {menuRoute: '/media', menuIcon: 'icon-camera', menuName: 'Media'}
    , {menuRoute: '/blog', menuIcon: 'icon-book', menuName: 'Blog'}
    , {menuRoute: '/contact', menuIcon: 'icon-envelope', menuName: 'Contact'}];
};

// Model Controller for the Sales-Pitch section
// ============================================================
controllers.pitchController = function ($scope) {
    $scope.pitchItems = 
    [ 
    { pitchName: 'Test Consultancy'
    , pitchText: 'Rapid can show you how to develop organisational test policies and enterprise test strategies that fit with the way you deliver your projects today.'
    , pitchIcon: 'img/consult.svg'
    , pitchLink: '#/services'}
    , 
    { pitchName: 'Test Management'
    , pitchText: 'Our Test Managers are experienced in industry best practices and can implement test frameworks that are structured, efficient and relevant.'
    , pitchIcon: 'img/manage.svg'
    , pitchLink: '#/services'}
    ,
    { pitchName: 'Test-based Training'
    , pitchText: 'Let us work collaboratively with your organization to develop efficient, effective staff who can develop world-class test capability for your projects.'
    , pitchIcon: 'img/train.svg'
    , pitchLink: '#/courses'}
    ];
};

// Model Controller for the Courses.htm
// ============================================================
controllers.courseController = function ($scope) {
    $scope.groups = [ 
        { title: "Agile Testing"
        , duration: "2 days"
        , content: "Agile development methods have become increasingly popular over the last few years. It radically changes the approach to the software development lifecycle, but where does it leave the tester?"
        , objectives: 
            [ "An introduction to agile and what is agile?"
            , "Testing in an agile context"
            , "How to adapt to agile"
            , "Test planning in an agile context"
            , "Test analysis and design in an agile context"
            , "Stories, acceptance criteria and how testing deals with these" ]
        } ,
        { title: "Exploratory Testing"
        , duration: "1 day"
        , content: "Exploratory Testing is a focused introduction to effective, practical exploratory testing.This is a hands on course that uses various heuristics and approaches to help testers become better testers."
        , objectives: 
            [ "Lean approach to software testing"
            , "Understanding and using heuristics and oracles"
            , "How bias affects our test effort"
            , "Using maps and tours"
            , "Becoming more effective at software testing"
            , "Strategies"
            , "Becoming a better skilled tester" ]
        } ,
        { title: "Exploratory Test Management"
        , duration: "1 day"
        , content: "Exploratory Test Management teaches testers how to apply an effective management framework over the top of your exploratory testing using session and thread based test management."
        , objectives:                 
            [ "Lean test management"
            , "Using mind-maps"
            , "Session based test management including the use of charters"
            , "Deriving reporting metrics to help tell the testing story"
            , "Thread based test management"
            , "How to tell an effective testing story" ]
        } ,
        { title: "Fundamental Software Testing"
        , duration: "2 days"
        , content: "Fundamental Software Testing focuses on building the thinking and questioning skills of a tester. We show how to take a critical approach to testing with an emphasis on structured exploratory testing using a mixture of lecture, hands on learning games, socratic questioning and the use of different media."
        , objectives:
            [ "What is testing?"
            , "What are the different software development life-cycles and how testing fits in"
            , "Agile - what is it , what can we learn from it and how does testing fit?"
            , "Test analysis and design"
            , "Test approaches"
            , "Test management" ]
        } , 
        { title: "Test Leadership"
        , duration: "1 days"
        , content: "Test Leadership course helps the aspiring test leaders, test managers or test directors understand the principles of leadership, ethics, motivation as well as practical test management."
        , objectives:
            [ "What is leadership?"
            , "Principles and types of leadership"
            , "Ethics"
            , "Motivating test teams"
            , "Test management and how to become a leader"
            , "Coaching and mentoring"
            , "Building teams"
            , "Building communities" ]
        } ];
}


controllers.simpleController = function ($scope) {};

appRapid.controller(controllers);