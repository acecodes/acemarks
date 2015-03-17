angular.module('AceMarks', []).controller(
    'PrimaryCtrl', function($scope) {
        $scope.testing = "Testing, 123";

        $scope.user = "John Doe";

        // Sample data, to be replaced after implementing backend
        $scope.categories = [{
            "id": 0,
            "name": "Aviation"
        }, {
            "id": 1,
            "name": "Reading"
        }, {
            "id": 2,
            "name": "Nutrition"
        }];

        $scope.bookmarks = [{
            "id": 0,
            "title": "Naval aviation",
            "url": "http://www.navy.com",
            "category": "Aviation"
        }, {
            "id": 1,
            "title": "Goodreads",
            "url": "http://www.goodreads.com",
            "category": "Reading"
        }];

        // Initial values

        $scope.isCreating = false;
        $scope.isEditing = false;
        $scope.currentCategory = null;
        $scope.editedBookmark = null;


        // Categories

        function setCurrentCategory(category) {
            $scope.currentCategory = category;

            cancelCreating();
            cancelEditing();
        }

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        // CRUD operations

        function resetCreateForm() {
            $scope.newBookmark = {
                title: '',
                url: '',
                category: $scope.currentCategory
            };
        }

        function createBookmark(bookmark) {
            bookmark.id = $scope.bookmarks.length;
            $scope.bookmarks.push(bookmark);

            resetCreateForm();
        }

        // Creating/editing states

        function startCreating() {
            $scope.isCreating = true;
            $scope.isEditing = false;

            resetCreateForm();
        }

        function cancelCreating() {
            $scope.isCreating = false;
        }

        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }

        function cancelEditing() {
            $scope.isEditing = false;
        }

        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }

        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

        function setEditedBookmark(bookmark) {
            $scope.editedBookmark = angular.copy(bookmark);
        }

        function updateBookmark(bookmark) {
            var index = _.findIndex($scope.bookmarks, function(b) {
                return b.id === bookmark.id;
            });

            $scope.bookmarks[index] = bookmark;
            $scope.editedBookmark = null;
            $scope.isEditing = false;
        }

        function isSelectedBookmark(bookmarkId) {
            return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
        }

        function deleteBookmark(bookmark) {
            var index = _.findIndex($scope.bookmarks, function(b) {
                return b.id === bookmark.id;
            });

            $scope.bookmarks.splice(index, 1);
        }


        // Make functions public (available to views)

        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;

        $scope.createBookmark = createBookmark;
        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.shouldShowCreating = shouldShowCreating;

        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowEditing = shouldShowEditing;
        $scope.setEditedBookmark = setEditedBookmark;
        $scope.updateBookmark = updateBookmark;
        $scope.isSelectedBookmark = isSelectedBookmark;

        $scope.deleteBookmark = deleteBookmark;

    });