
app = angular.module('myApp',[]);

app.directive('', ['', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {

        }
    };
}]);





/*app.controller('FormController',function($scope){
    $scope.fields = [
    {placeholder: 'Username', isRequired: true},
    {placeholder: 'Password', isRequired: true},
    {placeholder: 'Email (optional)', isRequired: false}
    ];

    $scope.submitForm = function() {
    alert("it works!");
    };

});*/

/*app.controller('FormController',function($scope) {
$scope.person = {
name: null
};
$scope.people = [];
$scope.submit = function() {
if ($scope.person.name) {
$scope.people.push({name: $scope.person.name});
$scope.person.name = '';
}
};
});*/
/*app.controller('CityController',function($scope) {
$scope.cities = [
{name: 'Seattle'},
{name: 'San Francisco'},
{name: 'Chicago'},
{name: 'New York'},
{name: 'Boston'}
];
});*/
// ng-change
/*app.controller('MyCtrl', ['$scope',function($scope){
    $scope.equation = {};
    $scope.change = function() {
        $scope.equation.output =parseInt($scope.equation.x) + 2;

    };
}])*/

/*子作用域
app.controller('MyCtrl', ['$scope', function($scope){
    $scope.someBareValue = {
        value:'Hello'
    };
    $scope.action = function() {
        $scope.someBareValue.value =  'hello human, from parent';
    };
}])
.controller('ChildCtrl', ['$scope', function($scope){
    $scope.childAction = function() {
        $scope.someBareValue.value ='hello human, from child';
    };
}]);*/

/*指令绑定策略
.directive('aDirective', function() {
    return {
    restrict: 'AECM',
    replace: true,
    scope:{
        myUrl : '@',
        linkText : '=text',
    },
    template: '<div><label>My URL </label><input type="text" ng-model="linkText"/><a href="{{ myUrl }}" >{{ linkText }}</a></div>'
    };
})*/

// .run(['$rootScope', '$timeout',function($rootScope,$timeout){
//     $timeout(function(){
//         $rootScope.myHref ='http://baidu.com';
//     }, 2000);

// }])
