angular.module("triviaApp").controller("questionCtrl", function ($scope, questionSrvc) {

    $scope.modalOpen = false;
    // $scope.id = $stateParams.id;

    questionSrvc.getQuestions().then(questions => {
        $scope.questions = questions;
    })

    $scope.openModal = function (question) {
        $scope.modalOpen = true;
        console.log($scope.modalOpen)
        if (question) {
            questionSrvc.getQuestion(question._id).then(question => {
                $scope.currentQuestion = question;
            })
        }
    }

    $scope.closeModal = function () {
        $scope.modalOpen = false;
        console.log($scope.modalOpen)
    }
})
