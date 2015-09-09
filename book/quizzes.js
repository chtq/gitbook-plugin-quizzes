require(["gitbook"], function(gitbook) {
    // Bind a quiz
    var prepareQuiz = function($quiz) {

        $quiz.find(".quiz-answers input").click(function(e) {
            //e.preventDefault();
        });

        // Submit: test code
        $quiz.find(".action-submit").click(function(e) {
            //console.log("dsdfsfsdfdsfsfd");
            //e.preventDefault();
            gitbook.events.trigger("exercise.submit", {type: "quiz"});
            $quiz.find("tr.alert-danger,li.alert-danger").removeClass("alert-danger");
            $quiz.find(".alert-success,.alert-danger").addClass("hidden");

            var answer='';
            $quiz.find(".question").each(function(q) {
                var result = true;

                var $questions = $(this).find(".question-content").find("input[type=radio], input[type=checkbox]");
                var $answers = $(this).find(".question-answers").find("input[type=radio], input[type=checkbox]");

                //console.log($questions)
                //console.log($answers)
                $questions.each(function(i) {
                    //console.log($(this));
                    
                    //console.log(fname);
                    if($(this).is(":checked"))
                    {
                      console.log(i);
                      if(i==0)
                       answer +='A';
                      if(i==1)
                       answer +='B';
                      if(i==2)
                       answer +='C';
                      if(i==3)
                       answer +='D';
                      if(i==4)
                       answer +='E';
                      if(i==5)
                       answer +='F';
                    }
                    var correct = $(this).is(":checked") === $answers.slice(i).first().is(":checked");
                    result = result && correct;
                    if (!correct) {
                        $(this).closest("tr, li").addClass("alert-danger");
                    }
                });
                var url = window.location.pathname;
                var fname = url.substring(0, url.lastIndexOf('.'));

                console.log(window.location.search);
                var reg = new RegExp("(^|&)" + "username" + "=([^&]*)(&|$)","i");
                var r = window.location.search.substr(1).match(reg);
                if (r!=null) name=unescape(r[2]);
                
                if(name!='')
                    {
		        var mydata = 'xz' + fname + '-' + name + ';;;' + answer;
		        console.log(mydata);
		        var ws = new WebSocket('ws://192.168.0.253:3368');
		        ws.onopen = function(){
                          console.log("send");
		          ws.send(mydata);
                        };
		        ws.onmessage = function(result){console.log(result.data);}
		        ws.onclose=function(evt){console.log("close");};
		        ws.onerror=function(evt){console.log("error");};
                   }
              //  $(this).find(result ? "div.alert-success" : "div.alert-danger").toggleClass("hidden");
            });

        });

        $quiz.find(".action-solution").click(function(e) {
            e.preventDefault();
            $quiz.find(".question-content, .question-answers").toggleClass("hidden");
        });
    };

    // Prepare all exercise
    var init = function() {
        gitbook.state.$book.find("section.quiz").each(function() {
            prepareQuiz($(this));
        });
    };

    gitbook.events.bind("page.change", function() {
       // alert("dadasdasdas");
        
        init();
    });
});
