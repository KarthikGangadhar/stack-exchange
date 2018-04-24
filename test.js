// const stackexchange = require('./server')({ version : '2.2'});

// // To test questions

// // let options = {
// //     "order": "desc",
// //     "sort": "activity",
// //     "site": "stackoverflow",
// //     "key":"U4DMV*8nvpm3EOpvf69Rxw((",
// //     "access_token":"hWdvdUtE3viqDRE1LjVjxA))"
// // }
// let stack_questions = stackexchange.questions;

// // stack_questions.questions(options, (response) => {
// //     console.log(response);
// //  });

// //  stack_questions.questions_by_ids("47559184", options , (response) => {
// //     console.log(response);
// //  });


// //  stack_questions.answers_on_questions("47596027", options , (response) => {
// //     console.log(response);
// //  });

// // stack_questions.render_answer("47596027", {
// //     "body": "hello",
// //     "site": "stackoverflow"
// // }, (response) => {
// //     console.log(response);
// // });

// //  stack_questions.linked_questions("1884724", options , (response) => {
// //     console.log(response);
// //  });

// // stack_questions.related_questions("37878662", options , (response) => {
// //         console.log(response);
// //      });

// // stack_questions.questions_timeline("37878662", options , (response) => {
// //         console.log(response);
// //      });

// // stack_questions.featured_questions( options , (response) => {
// //         console.log(response);
// //      });

// // stack_questions.no_answer_questions( options , (response) => {
// //     console.log(response);
// //  });


// // stack_questions.unanswered_questions( options , (response) => {
// //     console.log(response);
// //  });

// // stack_questions.unanswered_questions_my_tags( options , (response) => {
// //     console.log(response);
// //  });

// let  flag_options = {
//     'key': 'U4DMV*8nvpm3EOpvf69Rxw((',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };
// // stack_questions.question_flag_options("37878662", flag_options, (response) => {
// //     console.log(response);
// // });

// // stack_questions.question_close_options("37878662", flag_options, (response) => {
// //     console.log(response);
// // });

// // stack_questions.comments_on_questions("45934757", flag_options, (response) => {
// //     console.log(response);
// // });

// // To test events

// let event_options = {
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };

// let stack_events = stackexchange.events;

// // stack_events.events(event_options, (response) => {
// //     console.log(response);
// // });

// // To test info

// let info_options = {
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };

// let  stack_info = stackexchange.info;

// // stack_info.info(info_options, (response) => {
// //     console.log(response);
// // });


// // To test privilages

// let privilages_options = {
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };

// let stack_privilages = stackexchange.privilages;

// // stack_privilages.privilages(privilages_options, (response) => {
// //     console.log(response);
// // });


// // To test revisions

// let revisions_options = {
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };

// // let ids = "BCF73AEC-7F9D-4623-8C38-66E481B52513"

// // stack_revisions = stackexchange.revisions;

// // stack_revisions.revisions( ids , revisions_options, (response) => {
// //     console.log(response);
// // });

// // To test badges

// let badges_options = {
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };


// let stack_badges = stackexchange.badges;

// // stack_badges.badges(badges_options, (response) => {
// //     console.log(response);
// // });

// // let id = "222"



// // stack_badges.badges_by_id(id, badges_options, (response) => {
// //     console.log(response);
// // });

// // let name = "fanatic"

// // stack_badges.badges_by_name(name, badges_options, (response) => {
// //     console.log(response);
// // });


// // stack_badges.badge_recipients( badges_options, (response) => {
// //     console.log(response);
// // });

// //  id = "222"

// // stack_badges.badge_recipients_by_id(id,  badges_options, (response) => {
// //     console.log(response);
// // });

// // stack_badges.badge_by_tags(badges_options, (response) => {
// //     console.log(response);
// // });


// // To test tags

// let tags_options = {
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };


// let  stack_tags = stackexchange.tags;

// // stack_tags.tags(tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.tags_by_name("nodejs", tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.moderator_only_tags(tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.require_tags(tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.tag_synonyms(tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.faqs_by_tags("nodejs", tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.related_tags("nodejs", tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.synonyms_by_tags("nodejs", tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.top_answerers_on_tags("java", tags_options, (response) => {
// //     console.log(response);
// // });


// // stack_tags.top_askers_on_tags("java", tags_options, (response) => {
// //     console.log(response);
// // });

// // stack_tags.wikis_by_tags("java", tags_options, (response) => {
// //     console.log(response);
// // });

// let stack_suggested_edits = stackexchange.suggested_edits;


// let options = {
//     'order': 'desc',
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };

// // stack_suggested_edits.suggested_edits(options, (response) => {
// //         console.log(response);
// // });

// // let suggested_edit_id = "3445738"
// // stack_suggested_edits.suggested_edits_by_ids(suggested_edit_id, options, (response) => {
// //     console.log(response);
// // });

// //testing search endpoints

// const stack_search = stackexchange.search;

// // let search_options = {
// //     "title": "npm install error",
// //     "key":"U4DMV*8nvpm3EOpvf69Rxw((",
// //     "access_token":"hWdvdUtE3viqDRE1LjVjxA))"
// // }

// // stack_search.search(search_options, (response) => {
// //     console.log(response);
// // });


// // stack_search.advanced_search(search_options, (response) => {
// //     console.log(response);
// // });

// // stack_search.similar(search_options, (response) => {
// //     console.log(response);
// // });


// // stack_search.excerpt_search(search_options, (response) => {
// //     console.log(response);
// // });

// //tests for posts endpoints

// const stack_posts = stackexchange.posts;

// let posts_options = {
//     // "body": "npm install error",
//     'site': 'stackoverflow',
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'hWdvdUtE3viqDRE1LjVjxA))'
// };

// // stack_posts.posts(posts_options, (response) => {
// //     console.log(response);
// // });
// let post_id = '45934757';

// // stack_posts.posts_by_ids(post_id, posts_options, (response) => {
// //     console.log(response);
// // });

// // stack_posts.comments_on_posts(post_id, posts_options, (response) => {
// //     console.log(response);
// // });

// // stack_posts.create_comment(post_id, posts_options, (response) => {
// //     console.log(response);
// // });


// // stack_posts.render_comment(post_id, posts_options, (response) => {
// //     console.log(response);
// // });

// post_id= 39892422;

// // stack_posts.revisions_by_ids(post_id, posts_options, (response) => {
// //     console.log(response);
// // });

// // stack_posts.posts_on_suggested_edits(post_id, posts_options, (response) => {
// //     console.log(response);
// // });

// //tests for comments endpoints

// const stack_comments = stackexchange.comments;
// let comments_options = {
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'9EyME9jJ0Pim9YQtvNUccA))'
// };

// // stack_comments.comments(comments_options, (response) => {
// //     console.log(response);
// // });

// let comment_id = '82236358';

// // stack_comments.comments_by_ids(comment_id, comments_options, (response) => {
// //     console.log(response);
// // });

// // delete_comment

// // stack_comments.delete_comment(comment_id, comments_options, (response) => {
// //     console.log(response);
// // });

// // edit_comment

// //body is required in options
// // stack_comments.edit_comment(comment_id, comments_options, (response) => {
// //     console.log(response);
// // });

// // stack_comments.create_comment_flag(comment_id, comments_options, (response) => {
// //     console.log(response);
// // });

// // stack_comments.comment_flag_options(comment_id, comments_options, (response) => {
// //     console.log(response);
// // });

// // stack_comments.upvote_comment(comment_id, comments_options, (response) => {
// //     console.log(response);
// // });

// // stack_comments.undo_upvote_comment(comment_id, comments_options, (response) => {
// //     console.log(response);
// // });


// //for testing users endpoints

// const stack_users = stackexchange.users;
// let users_options = {
//     'key':'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token':'XeU2fEpraLcrpkqWK((WmQ))'
// };
// // users
// let user_ids = '6414102';

// // stack_users.users(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.users_by_ids(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.answers_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.badges_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.comments_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// let toid = 1427878;

// // stack_users.comments_by_users_to_user(user_ids,toid , users_options, (response) => {
// //     console.log(response);
// // });


// // stack_users.favorites_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.mentions_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.users_network_activity(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.user_notifications(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.user_unread_notifications(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.posts_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.privileges_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.questions_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.featured_questions_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.no_answer_questions_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.unaccepted_questions_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.unanswered_questions_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.reputation_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.reputation_history(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.full_reputation_history(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.suggested_edits_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// let tags = 'nodejs';

// // stack_users.top_user_answers_in_tags(user_ids, tags,  users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.top_user_questions_in_tags(user_ids, tags,  users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.timeline_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.top_answer_tags_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.top_tags_on_users(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.moderators(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.elected_moderators(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.user_inbox(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.user_unread_inbox(user_ids, users_options, (response) => {
// //     console.log(response);
// // });

// // testing me section 


// const stack_me = stackexchange.me;
// // users_options = {
// //     key: "U4DMV*8nvpm3EOpvf69Rxw((",
// //     access_token: "QfbROTOhsIYYN6GwBEVfkw))"
// // };
// // users
// user_ids = '6414102';

// // stack_me.me( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_answers( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_badges( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_comments( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_comments_to(toid, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_favorites(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_mentioned(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_network_activity(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_notifications(users_options, (response) => {
// //     console.log(response);
// // });    

// // stack_me.me_unread_notifications(users_options, (response) => {
// //     console.log(response);
// // });    

// // stack_me.me_unread_notifications(users_options, (response) => {
// //     console.log(response);
// // });    

// // stack_me.me_posts(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_privileges(users_options, (response) => {
// //     console.log(response);
// // });


// // stack_me.me_questions(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_featured_questions(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_no_answer_questions(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_no_answer_questions(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_unaccepted_questions(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_unanswered_questions(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_reputation(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_reputation_history(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_full_reputation_history(users_options, (response) => {
// //     console.log(response);
// // });


// // stack_me.me_suggested_edits(users_options, (response) => {
// //     console.log(response);
// // });


// // stack_me.me_tags(users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_tags_top_answers(tags, users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_top_answer_tags( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_top_question_tags( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_top_tags( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_inbox( users_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_unread_inbox( users_options, (response) => {
// //     console.log(response);
// // });


// // to test network endpoints

// const stack_network = stackexchange.network;

// let invalidate_options = {
//     key: 'U4DMV*8nvpm3EOpvf69Rxw((',
//     access_token: 'ySHeOxbEL0j8IWW2Hlg0zw))'
// };

// let access_token = 'U4DMV*8nvpm3EOpvf69Rxw((';

// // stack_network.invalidate_access_tokens(invalidate_options, (response) => {
// //     console.log(response);
// // });

// read_options = {
//     key: 'U4DMV*8nvpm3EOpvf69Rxw((',
//     access_token: 'bU0bMrtbr33nVjMdwjBf*Q))'
// };

// // stack_network.read_access_tokens( read_options, (response) => {
// //     console.log(response);
// // });

// // stack_network.application_de_authenticate( read_options, (response) => {
// //     console.log(response);
// // });

// // stack_network.errors( read_options, (response) => {
// //     console.log(response);
// // });

// // stack_network.simulate_errors("401", read_options, (response) => {
// //     console.log(response);
// // });

// create_filter_options = {
//     'include': '.quota_max',
//     'exclude': '.quota_remaining',
//     'unsafe': false
// };
// // stack_network.create_filter(create_filter_options, (response) => {
// //     console.log(response);
// // });

// filter = '.quota_max';

// // stack_network.read_filter(filter, read_options, (response) => {
// //     console.log(response);
// // });

// // inbox INDOX /2.2/inbox?key=U4DMV*8nvpm3EOpvf69Rxw((&access_token=S8Irmb83HARHUwZ1CXGvwg))&filter=default
// inbox_options = {
//     'key': 'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token': 'ECPqOGhEOcwFHTVAQZjURg))'
// };
// // stack_network.inbox(inbox_options, (response) => {
// //     console.log(response);
// // });

// // stack_network.inbox_unread(inbox_options, (response) => {
// //     console.log(response);
// // });


// // stack_network.notifications(inbox_options, (response) => {
// //     console.log(response);
// // });

// // stack_network.unread_notifications(inbox_options, (response) => {
// //     console.log(response);
// // });

// // stack_network.sites(inbox_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.associated_users(user_ids, inbox_options, (response) => {
// //     console.log(response);
// // });

// // stack_users.merge_history(user_ids, inbox_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_associated_users(inbox_options, (response) => {
// //     console.log(response);
// // });

// // stack_me.me_merge_history(inbox_options, (response) => {
// //     console.log(response);
// // });


// // tests for answers endpoints

// // answers /2.2/answers?order=desc&sort=activity&site=stackoverflow
// const stack_answers = stackexchange.answers;

// let answers_options = {
//     'key': 'U4DMV*8nvpm3EOpvf69Rxw((',
//     'access_token': 'ECPqOGhEOcwFHTVAQZjURg))'
// };
// // stack_answers.answers(answers_options, (response) => {
// //     console.log(response);
// // });

// // stack_answers.answers_by_ids("6414102", answers_options, (response) => {
// //     console.log(response);
// // });

// // stack_answers.accept_answer("6414102", answers_options, (response) => {
// //     console.log(response);
// // });

// // stack_answers.undo_accept_answer("47451356", answers_options, (response) => {
// //     console.log(response);
// // });

// // stack_answers.comments_on_answers("37886434", answers_options, (response) => {
// //     console.log(response);
// // });
