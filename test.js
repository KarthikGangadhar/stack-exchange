var stackexchange  = require("./server");

let options  = {
    "order": "desc",
    "sort": "activity",
    "site": "stackoverflow"
}

stack_questions = new stackexchange.question();

stack_questions.questions({}, (response) => {
    console.log(response);
 });

 stack_questions.questions_by_ids({}, "47559184" , (response) => {
    console.log(response);
 });

 