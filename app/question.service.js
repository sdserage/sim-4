angular.module("triviaApp").service('questionSrvc', function($http) {

    this.getQuestions = function() {
        return $http.get("https://practiceapi.devmountain.com/api/trivia/questions").then(response=> {
            return response
        }).catch(err=>{console.log("Error in questions", err)})
    }
})