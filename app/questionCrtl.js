angular.module("triviaApp").controller("questionCtrl", function ($scope, questionSrvc) {

    $scope.modalOpen = false;

    questionSrvc.getQuestions().then(questions => {
        $scope.questions = questions;
    })

    $scope.deleteQuestion = function (question_id) {
        if (question_id) {
            questionSrvc.deleteQuestion(question_id);
        }
        questionSrvc.getQuestions().then(questions => {
            $scope.questions = questions;
        })
    }

    $scope.openModal = function (question) {
        $scope.modalOpen = true;
        if (question) {
            $scope.currentQuestion = question;
        }
    }

    $scope.closeModal = function () {
        $scope.modalOpen = false;
    }
})
