'use strict';

angular.module('AceMarks.models.categories', [])
    .service('CategoriesModel', function() {
        var model = this,
            categories = [{
                'id': 0,
                'name': 'Aviation'
            }, {
                'id': 1,
                'name': 'Reading'
            }, {
                'id': 2,
                'name': 'Nutrition'
            }];

        model.getCategories = function() {
            return categories;
        };

    });