angular.module("triviaApp").service('questionSrvc', function ($http) {

    this.getQuestions = function () {
        return $http.get("https://practiceapi.devmountain.com/api/trivia/questions").then(response => {
            return response.data
        }).catch(err => { console.log("Error in questions", err) })
    }

    this.deleteQuestion = function (id) {
        if (id) {
            return $http.delete("https://practiceapi.devmountain.com/api/trivia/questions/" + id).then(response => {
                console.log()
                // return console.log("Delete Successful")
            }).catch(err => { console.log("error in delete", err) })
        }
    }

    this.addQuestion = function () {
        return $http.post("https://practiceapi.devmountain.com/api/trivia/questions/").then(response => {
            return response.data
        })
    }

    this.editQuestion = function (question) {
            return $http.put("https://practiceapi.devmountain.com/api/trivia/questions/" + question._id, question).then(response => {
                return response.data
            }).catch(err => { console.log("error in delete", err) })
    }

})