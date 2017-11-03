angular.module("triviaApp").controller("questionCtrl", function($scope, $stateParams, questionSrvc) {
    
    $scope.modalOpen = false;
    $scope.id = $stateParams.id;

    questionSrvc.getQuestions().then(questions => {
        $scope.questions = questions;
    })

    $scope.openModal= function(question){
        $scope.modalOpen = true;
        if(question) {
        questionSrvc.getQuestion($stateParams.id).then(question => {
            $scope.currentQuestion = question;
    })
        }else{
            return null;
        }
    }
})
