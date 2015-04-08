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
                        controller: 'BookmarksListCtrl as bookmarksListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.html'
                    }
                }
            });
    })
    .controller('BookmarksListCtrl', function($stateParams, BookmarksModel) {
        var bookmarksListCtrl = this;
        bookmarksListCtrl.currentCategoryName = $stateParams.category;
        BookmarksModel.getBookmarks().then(function(result) {
            bookmarksListCtrl.bookmarks = result;
            console.log('bookmarks', result);
        });
    });