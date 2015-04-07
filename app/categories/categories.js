angular.module('categories', [
    'AceMarks.models.categories'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('acemarks.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesCtrl',
                        templateUrl: 'app/categories/categories.html'
                    },
                    'bookmarks@': {
                        controller: 'BookmarksListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.html'
                    }
                }
            });
    })
    .controller('CategoriesCtrl', function CategoriesCtrl($scope) {

    });