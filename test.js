var stackexchange = require("./server");

// To test questions

// let options = {
//     "order": "desc",
//     "sort": "activity",
//     "site": "stackoverflow",
//     "key": "U4DMV*8nvpm3EOpvf69Rxw((",
//     "access_token": "ZnGGKBHHy9zsLnWzR1lO(g))"
// }

// stack_questions = new stackexchange.questions();

// stack_questions.questions(options, (response) => {
//     console.log(response);
//  });

//  stack_questions.questions_by_ids("47559184", options , (response) => {
//     console.log(response);
//  });


//  stack_questions.answers_on_questions("47596027", options , (response) => {
//     console.log(response);
//  });

// stack_questions.render_answer("47596027", {
//     "body": "hello",
//     "site": "stackoverflow"
// }, (response) => {
//     console.log(response);
// });

//  stack_questions.linked_questions("1884724", options , (response) => {
//     console.log(response);
//  });

// stack_questions.related_questions("37878662", options , (response) => {
//         console.log(response);
//      });

// stack_questions.questions_timeline("37878662", options , (response) => {
//         console.log(response);
//      });

// stack_questions.featured_questions( options , (response) => {
//         console.log(response);
//      });

// stack_questions.no_answer_questions( options , (response) => {
//     console.log(response);
//  });


// stack_questions.unanswered_questions( options , (response) => {
//     console.log(response);
//  });

// stack_questions.unanswered_questions_my_tags( options , (response) => {
//     console.log(response);
//  });

// flag_options = {
//     "key": "U4DMV*8nvpm3EOpvf69Rxw((",
//     "access_token": "ZnGGKBHHy9zsLnWzR1lO(g))",
//     "site":"stackoverflow"
// }
// stack_questions.question_flag_options("37878662", flag_options, (response) => {
//     console.log(response);
// });

// stack_questions.question_close_options("37878662", flag_options, (response) => {
//     console.log(response);
// });

// stack_questions.comments_on_questions("45934757", flag_options, (response) => {
//     console.log(response);
// });

// To test events

// let event_options = {
//     "site": "stackoverflow",
//     "access_token": "TzAfXCF6PjvW5dkOCbiEyw))",
//     "key": "U4DMV*8nvpm3EOpvf69Rxw((" 
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

// To test badges

// let badges_options = {
//     "site": "stackoverflow",
//     "key": "U4DMV*8nvpm3EOpvf69Rxw(("
// }


// stack_badges = new stackexchange.badges();

// stack_badges.badges(badges_options, (response) => {
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

//  id = "222"

// stack_badges.badge_recipients_by_id(id,  badges_options, (response) => {
//     console.log(response);
// });

// stack_badges.badge_by_tags(badges_options, (response) => {
//     console.log(response);
// });


// To test tags

let tags_options = {
    "site": "stackoverflow",
    "key": "U4DMV*8nvpm3EOpvf69Rxw(("
}

// "key": "U4DMV*8nvpm3EOpvf69Rxw((",
// "access_token": "ZnGGKBHHy9zsLnWzR1lO(g))"


stack_tags = new stackexchange.tags();

// stack_tags.tags(tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.tags_by_name("nodejs", tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.moderator_only_tags(tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.require_tags(tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.tag_synonyms(tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.faqs_by_tags("nodejs", tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.related_tags("nodejs", tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.synonyms_by_tags("nodejs", tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.top_answerers_on_tags("java", tags_options, (response) => {
//     console.log(response);
// });


// stack_tags.top_askers_on_tags("java", tags_options, (response) => {
//     console.log(response);
// });

// stack_tags.wikis_by_tags("java", tags_options, (response) => {
//     console.log(response);
// });

stack_suggested_edits = new stackexchange.suggested_edits();


let options = {
    // "order": "desc",
    // "sort": "activity",
    // "site": "stackoverflow",
    // "key": "U4DMV*8nvpm3EOpvf69Rxw((",
    // "access_token": "ZnGGKBHHy9zsLnWzR1lO(g))"
}

// stack_suggested_edits.suggested_edits(options, (response) => {
//         console.log(response);
// });

// let suggested_edit_id = "3445738"
// stack_suggested_edits.suggested_edits_by_ids(suggested_edit_id, options, (response) => {
//     console.log(response);
// });

//testing search endpoints

// const stack_search = new stackexchange.search();

// let search_options = {
//     "title": "npm install error"
// }

// stack_search.search(search_options, (response) => {
//     console.log(response);
// });


// stack_search.advanced_search(search_options, (response) => {
//     console.log(response);
// });

// stack_search.similar(search_options, (response) => {
//     console.log(response);
// });


// stack_search.excerpt_search(search_options, (response) => {
//     console.log(response);
// });

//tests for posts endpoints

const stack_posts = new stackexchange.posts();

let posts_options = {
    // "body": "npm install error",
    "site": "stackoverflow",
    //  "key": "U4DMV*8nvpm3EOpvf69Rxw((",
    // "access_token": "ZnGGKBHHy9zsLnWzR1lO(g))"
}

// stack_posts.posts(posts_options, (response) => {
//     console.log(response);
// });
let post_id = "45934757";

// stack_posts.posts_by_ids(post_id, posts_options, (response) => {
//     console.log(response);
// });

// stack_posts.comments_on_posts(post_id, posts_options, (response) => {
//     console.log(response);
// });

// stack_posts.create_comment(post_id, posts_options, (response) => {
//     console.log(response);
// });


// stack_posts.render_comment(post_id, posts_options, (response) => {
//     console.log(response);
// });

// post_id= 39892422

// stack_posts.revisions_by_ids(post_id, posts_options, (response) => {
//     console.log(response);
// });

// stack_posts.posts_on_suggested_edits(post_id, posts_options, (response) => {
//     console.log(response);
// });

//tests for comments endpoints

// const stack_comments = new stackexchange.comments();
// let comments_options = {
//     access_token: "VvGwnS49NbZKImZYu5ylJA))",
//     key: "U4DMV*8nvpm3EOpvf69Rxw(("
// };

// stack_comments.comments(comments_options, (response) => {
//     console.log(response);
// });

let comment_id = "82236358";

// stack_comments.comments_by_ids(comment_id, comments_options, (response) => {
//     console.log(response);
// });

// delete_comment

// stack_comments.delete_comment(comment_id, comments_options, (response) => {
//     console.log(response);
// });

// edit_comment

//body is required in options
// stack_comments.edit_comment(comment_id, comments_options, (response) => {
//     console.log(response);
// });

// stack_comments.create_comment_flag(comment_id, comments_options, (response) => {
//     console.log(response);
// });

// stack_comments.comment_flag_options(comment_id, comments_options, (response) => {
//     console.log(response);
// });

// stack_comments.upvote_comment(comment_id, comments_options, (response) => {
//     console.log(response);
// });

// stack_comments.undo_upvote_comment(comment_id, comments_options, (response) => {
//     console.log(response);
// });


//for testing users endpoints

const stack_users = new stackexchange.users();
let users_options = {
    access_token: "0glCUdiYHhrWXu9z1RSZhQ))",
    key: "U4DMV*8nvpm3EOpvf69Rxw(("
};
// users
let user_ids = "6414102";

// stack_users.users(users_options, (response) => {
//     console.log(response);
// });

// stack_users.users_by_ids(user_ids, users_options, (response) => {
//     console.log(response);
// });

// stack_users.answers_on_users(user_ids, users_options, (response) => {
//     console.log(response);
// });

// stack_users.badges_on_users(user_ids, users_options, (response) => {
//     console.log(response);
// });

// stack_users.comments_on_users(user_ids, users_options, (response) => {
//     console.log(response);
// });

let toid = 1427878;

// stack_users.comments_by_users_to_user(user_ids,toid , users_options, (response) => {
//     console.log(response);
// });

    // favorites_on_users FAVORITES_ON_USERS /2.2/users/6414102/favorites?order=desc&sort=activity&site=stackoverflow

// stack_users.favorites_on_users(user_ids, users_options, (response) => {
//     console.log(response);
// });

// stack_users.mentions_on_users(user_ids, users_options, (response) => {
//     console.log(response);
// });

// stack_users.users_network_activity(user_ids, users_options, (response) => {
//     console.log(response);
// });

// stack_users.user_notifications(user_ids, users_options, (response) => {
//     console.log(response);
// });

stack_users.user_notifications(user_ids, users_options, (response) => {
    console.log(response);
});





