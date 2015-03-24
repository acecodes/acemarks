angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'AceMarks.models.categories',
    'AceMarks.models.bookmarks'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('acemarks.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.html',
                        controller: 'BookmarksCtrl'
                    }
                }
            });
    })
    .controller('BookmarksCtrl', function($scope, $stateParams) {
        $scope.currentCategoryName = $stateParams.category;
    });