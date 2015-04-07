'use strict';

angular.module('AceMarks.models.bookmarks', [])
    .service('BookmarksModel', function() {
        var model = this,
            bookmarks = [{
                'id': 0,
                'title': 'Naval aviation',
                'url': 'http://www.navy.com',
                'category': 'Aviation'
            }, {
                'id': 1,
                'title': 'Goodreads',
                'url': 'http://www.goodreads.com',
                'category': 'Reading'
            }];

        model.getBookmarks = function() {
            return bookmarks;
        };
    });