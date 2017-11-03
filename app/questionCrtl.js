angular.module("triviaApp").controller("questionCtrl", function($scope, questionSrvc) {
    questionSrvc.getQuestions().then(questions => {
        $scope.questions = questions;
    })
})