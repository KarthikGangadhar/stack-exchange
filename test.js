var stackexchange = require("./server");

// To test questions

// let options  = {
//     "order": "desc",
//     "sort": "activity",
//     "site": "stackoverflow"
// }

// stack_questions = new stackexchange.questions();

// stack_questions.questions(options, (response) => {
//     console.log(response);
//  });

//  stack_questions.questions_by_ids("47559184", options , (response) => {
//     console.log(response);
//  });

// To test events

// let event_options = {
//     "site": "stackoverflow",
//     "key": "U4DMV*8nvpm3EOpvf69Rxw((",
//     "access_token": "B194CquqSNCf25adHix3Dw))"
// }

// stack_events = new stackexchange.events();

// stack_events.events(event_options, (response) => {
//     console.log(response);
// });

// To test info

// let info_options = {
//     "site": "stackoverflow"
// }

// stack_info = new stackexchange.info();

// stack_info.info(info_options, (response) => {
//     console.log(response);
// });


// To test privilages

// let privilages_options = {
//     "site": "stackoverflow",
//     "key" : "U4DMV*8nvpm3EOpvf69Rxw(("
// }

// stack_privilages = new stackexchange.privilages();

// stack_privilages.privilages(privilages_options, (response) => {
//     console.log(response);
// });


// To test revisions

// let revisions_options = {
//     "site": "stackoverflow",
//     "key" : "U4DMV*8nvpm3EOpvf69Rxw(("
// }

// let ids = "BCF73AEC-7F9D-4623-8C38-66E481B52513"

// stack_revisions = new stackexchange.revisions();

// stack_revisions.revisions( ids , revisions_options, (response) => {
//     console.log(response);
// });

// To test revisions

let badges_options = {
    "site": "stackoverflow",
    "key": "U4DMV*8nvpm3EOpvf69Rxw(("
}


stack_badges = new stackexchange.badges();

// stack_revisions.badges(badges_options, (response) => {
//     console.log(response);
// });

// let id = "222"



// stack_badges.badges_by_id(id, badges_options, (response) => {
//     console.log(response);
// });

// let name = "fanatic"

// stack_badges.badges_by_name(name, badges_options, (response) => {
//     console.log(response);
// });


// stack_badges.badge_recipients( badges_options, (response) => {
//     console.log(response);
// });

// let id = "222"

// stack_badges.badge_recipients_by_id(id,  badges_options, (response) => {
//     console.log(response);
// });

// stack_badges.badge_by_tags(badges_options, (response) => {
//     console.log(response);
// });