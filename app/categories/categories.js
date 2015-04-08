'use strict';

angular.module('categories', [
    'AceMarks.models.categories'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('acemarks.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.html'
                    },
                    'bookmarks@': {
                        controller: 'BookmarksListCtrl as bookmarksListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.html'
                    }
                }
            });
    })
    .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel) {
        var categoriesListCtrl = this;
        CategoriesModel.getCategories().then(function(result) {
            categoriesListCtrl.categories = result;
            console.log('result', result);
        });
    });