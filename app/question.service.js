angular.module("triviaApp").service('questionSrvc', function($http) {

    this.getQuestions = function() {
        return $http.get("https://practiceapi.devmountain.com/api/trivia/questions").then(response=> {
            return response
        }).catch(err=>{console.log("Error in questions", err)})
    }

    this.deleteQuestion = function(id) {
        return $http.delete("https://practiceapi.devmountain.com/api/trivia/questions/:" + id).then(response => {
            return "Delete Successful"
        }).catch( err => {console.log("error in delete", err)})
    }

})