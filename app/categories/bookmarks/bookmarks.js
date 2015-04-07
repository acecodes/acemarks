'use strict';

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
                        controller: 'BookmarksListCtrl as bookmarksListCtrl'
                    }
                }
            });
    })
    .controller('BookmarksListCtrl', function($stateParams, BookmarksModel) {
        var bookmarksListCtrl = this;
        bookmarksListCtrl.currentCategoryName = $stateParams.category;
        bookmarksListCtrl.bookmarks = BookmarksModel.getBookmarks();
    });