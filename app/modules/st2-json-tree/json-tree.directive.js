'use strict';
var myApp = angular.module('myApp');

/**
 * recursive angular directive
 */
myApp.directive("jsonTree", function(RecursionHelper) {
    return {
        restrict: "E",
        scope: {json: '='},
        template: 
        '<p>{{ json.name }} <span ng-if="json.value"> -> {{json.value}}</span></p>'+
            '<ul>' + 
                '<li ng-repeat="child in json.children">' + 
                    '<json-tree json="child"></json-tree>' +
                '</li>' +
            '</ul>',
        controller : "jsonTreeCtrl",
        link: function(scope,element,attr){
        },
        compile: function(element) {
            return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
                // Define your normal link function here.
                // Alternative: instead of passing a function,
                // you can also pass an object with 
                // a 'pre'- and 'post'-link function.        
            });
        }
    };
  });


