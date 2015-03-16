angular.module('AceMarks', []).controller(
    'PrimaryCtrl', function($scope) {
        $scope.testing = "Testing, 123";

        // Sample data, to be replaced after implementing backend
        $scope.categories = [
            {"id": 0, "name": "Aviation"},
            {"id": 1, "name": "Reading"},
            {"id": 3, "name": "Nutrition"}
        ];

        $scope.bookmarks = [
            {"id": 0, "title":"Naval aviation", "url":"http://www.navy.com", "category":"Aviation"},
            {"id": 0, "title":"Goodreads", "url":"http://www.goodreads.com", "category":"Reading"}
        ];
    });