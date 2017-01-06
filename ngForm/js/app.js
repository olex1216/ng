// 应用程序
var app = angular.module('leajoyApp', []);

//跨域访问白名单
app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://f.apiplus.cn/bj11x5.json',
    ]);
}]);

// Controller--开奖信息
app.controller('dataController', ['$scope', 'dataService', function($scope, dataService) {
    dataService.getData().then(
        //请求成功
        function(res) {
            $scope.data = res;
            $scope.currentdata = $scope.data[1].opencode.split(',').sort();//当期号码转换成数组
            $scope.historydata = $scope.data.slice(2);//截取之前三期的数据

        },
        //请求失败
        function(error) {
            $scope.error = error;
        });
}]);

//service-- 跨域请求数据
app.factory('dataService', ['$http', '$q', function($http, $q) {
    return {
        getData: function() {
            var deferred = $q.defer();
            var promise = $http.jsonp('http://f.apiplus.cn/bj11x5.json?callback=JSON_CALLBACK');
            promise.then(
                //请求成功的处理
                function(response) {
                    res = response.data.data;
                    deferred.resolve(res);
                    console.log(res);
                },
                //请求失败的处理
                function(error) {

                    deferred.reject(error);
                });
            return deferred.promise;
        }
    };
}]);






//filter--过滤掉opencode中的","
app.filter('strToArr',function() {
    return function (str) {
        var arr = str.split(',').sort();//str转为升序的arr
        var newStr = arr.join(' ');//arr转为加空格后的str
        return newStr;
    };

});
