# stack-exchange

[![NPM](https://nodei.co/npm/stack-exchange.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stack-exchange/)

The [stack-exchange](https://api.stackexchange.com/docs) is a simple npm module that provides a wrapper to access StackOverflow API endpoint.

[![Build Status](https://travis-ci.org/KarthikGangadhar/stack-exchange.svg "Build Status = Tests Passing")](https://travis-ci.org/KarthikGangadhar/stack-exchange)
[![npm version](https://badge.fury.io/js/stack-exchange.svg)]()
[![Node.js Version](https://img.shields.io/node/v/stack-exchange.svg?style=flat "Node.js 10 & 12 and io.js latest both supported")](http://nodejs.org/download/)
[![Known Vulnerabilities](https://snyk.io/test/github/KarthikGangadhar/stack-exchange/badge.svg?targetFile=package.json)](https://snyk.io/test/github/KarthikGangadhar/stack-exchange?targetFile=package.json)

## Installation
Installation is done using the npm install command:
```js
$ npm install stack-exchange
```

## Quick Start

You can make 300 requests without a key per day, with a key you can make 10,000 requests. To generate key visit [here](https://stackapps.com/apps/oauth/register).The sections are as follows

* [Users section](https://www.npmjs.com/package/stack-exchange#users-section)
* [Me section](https://www.npmjs.com/package/stack-exchange#me-section)
* [Questions section](https://www.npmjs.com/package/stack-exchange#questions-section)
* [Answers section](https://www.npmjs.com/package/stack-exchange#answers-section)
* [Badges section](https://www.npmjs.com/package/stack-exchange#badges-section)
* [Tags section](https://www.npmjs.com/package/stack-exchange#tags-section)
* [Comments section](https://www.npmjs.com/package/stack-exchange#comments-section)
* [Posts section](https://www.npmjs.com/package/stack-exchange#posts-section)
* [Search section](https://www.npmjs.com/package/stack-exchange#search-section)
* [Suggested Edits section](https://www.npmjs.com/package/stack-exchange#suggested_edits-section)
* [Network section](https://www.npmjs.com/package/stack-exchange#network-section)
* [Info section](https://www.npmjs.com/package/stack-exchange#info-section)
* [Privilages section](https://www.npmjs.com/package/stack-exchange#privilages-section)
* [Revisions section](https://www.npmjs.com/package/stack-exchange#revisions-section)
* [Events section](https://www.npmjs.com/package/stack-exchange#events-section)

For more details about the endpoints on each section visit [table-of-content](https://www.npmjs.com/package/stack-exchange#table-of-content). To use above mentioned sections endpoints, you need to create their respective sections objects as follows:

```javascript
// You can specify the version of api you want to use by passing object with version field.
// if version is not provided, by default api response with version 2.2 will be provided 

const stackexchange  = require("stack-exchange")({ version : "2.2" });

const stack_users = stackexchange.users;//for users sections endpoints
const stack_me = stackexchange.me;//for me sections endpoints
const stack_questions = stackexchange.questions; //for questions sections endpoints
const stack_answers = stackexchange.answers; //for answers sections endpoints
const stack_badges = stackexchange.badges; //for badges sections endpoints
const stack_tags = stackexchange.tags; //for tags sections endpoints
const stack_comments = stackexchange.comments;//for comments sections endpoints
const stack_posts = stackexchange.posts;//for posts sections endpoints
const stack_search = stackexchange.search;//for search sections endpoints
const stack_suggested_edits = stackexchange.suggested_edits;//for suggested_edits sections endpoints
const stack_network = stackexchange.network;//for network sections endpoints
const stack_info = stackexchange.info; //for info sections endpoints
const stack_privilages = stackexchange.privilages; //for privilages sections endpoints
const stack_revisions = stackexchange.revisions; //for revisions sections endpoints
const stack_events = stackexchange.events; //for events sections endpoints
```

## users section
All user methods that take an {ids} parameter have a /me equivalent method that takes an access_token instead. 

```js

//  users object
const stack_users = stackexchange.users;

```

#### users
Get all users on the site.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

 // using users endpoint 
stack_users.users(users_options, (response) => {
    console.log(response);
});

```

#### users_by_ids
Get the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using users_by_ids endpoint 
stack_users.users_by_ids(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### answers_on_users
Get the answers posted by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using answers_on_users endpoint 
stack_users.answers_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### badges_on_users
Get the badges earned by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using badges_on_users endpoint 
stack_users.badges_on_users(user_ids, users_options, (response) => {
    console.log(response);
});
```

#### comments_on_users
Get the comments posted by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using comments_on_users endpoint 
stack_users.comments_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### comments_by_users_to_user
Get the comments posted by a set of users in reply to another user.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// id of another user
let toid = 1427878;

// using comments_by_users_to_user endpoint 
stack_users.comments_by_users_to_user(user_ids, toid , users_options, (response) => {
    console.log(response);
});

```

#### favorites_on_users
Get the questions favorited by users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using favorites_on_users endpoint 
stack_users.favorites_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### mentions_on_users
Get the comments that mention one of the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using mentions_on_users endpoint 
stack_users.mentions_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### users_network_activity
Gets a user's activity across the Stack Exchange network.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using users_network_activity endpoint 
stack_users.users_network_activity(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### user_notifications
Get a user's notifications.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using user_notifications endpoint 
stack_users.user_notifications(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### user_unread_notifications
Get a user's unread notifications.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using user_unread_notifications endpoint 
stack_users.user_unread_notifications(user_ids, users_options, (response) => {
    console.log(response);
});
```

#### posts_on_users
Get all posts (questions and answers) owned by a set of users.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using posts_on_users endpoint 
stack_users.posts_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### privileges_on_users
Get the privileges the given user has on the site.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using privileges_on_users endpoint 
stack_users.privileges_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### questions_on_users
Get the questions asked by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using questions_on_users endpoint 
stack_users.questions_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### featured_questions_on_users
Get the questions on which a set of users, have active bounties.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using featured_questions_on_users endpoint 
stack_users.featured_questions_on_users(user_ids, users_options, (response) => {
    console.log(response);
});
```

#### no_answer_questions_on_users
Get the questions asked by a set of users, which have **no** answers.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using no_answer_questions_on_users endpoint 
stack_users.no_answer_questions_on_users(user_ids, users_options, (response) => {
    console.log(response);
});
```


#### unaccepted_questions_on_users
Get the questions asked by a set of users, which have at least one answer but no accepted answer.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using unaccepted_questions_on_users endpoint 
stack_users.unaccepted_questions_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### unanswered_questions_on_users
Get the questions asked by a set of users, which are not considered to be adequately answered.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using unanswered_questions_on_users endpoint 
stack_users.unanswered_questions_on_users(user_ids, users_options, (response) => {
    console.log(response);
});
```

#### reputation_on_users
Get a subset of the reputation changes experienced by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using reputation_on_users endpoint 
stack_users.reputation_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### reputation_history
Get a history of a user's reputation, excluding private events.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using reputation_history endpoint 
stack_users.reputation_history(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### full_reputation_history
Get a full history of a user's reputation. **auth required**

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using full_reputation_history endpoint 
stack_users.full_reputation_history(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### tags_on_users
Get the tags that the users (identified by a set of ids) have been active in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using tags_on_users endpoint 
stack_users.tags_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### suggested_edits_on_users
Get the suggested edits provided by users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using suggested_edits_on_users endpoint 
stack_users.suggested_edits_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```


#### top_user_answers_in_tags
Get the top answers a user has posted on questions with a set of tags.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

//user tags
let tags = "nodejs";

// using top_user_answers_in_tags endpoint 
stack_users.top_user_answers_in_tags(user_ids, tags,  users_options, (response) => {
    console.log(response);
});

```

#### top_user_questions_in_tags
Get the top questions a user has posted with a set of tags.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

//user tags
let tags = "nodejs";

// using top_user_questions_in_tags endpoint 
stack_users.top_user_questions_in_tags(user_ids, tags,  users_options, (response) => {
    console.log(response);
});
```

#### timeline_on_users
Get a subset of the actions of that have been taken by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using timeline_on_users endpoint 
stack_users.timeline_on_users(user_ids, users_options, (response) => {
    console.log(response);
});
```

#### top_answer_tags_on_users
Get the top tags (by score) a single user has posted answers in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using top_answer_tags_on_users endpoint 
stack_users.top_answer_tags_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### top_tags_on_users
Get the top tags (by score) a single user has posted in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using top_tags_on_users endpoint 
stack_users.top_tags_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### top_question_tags_on_users
Get the top tags (by score) a single user has asked questions in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using top_question_tags_on_users endpoint 
stack_users.top_question_tags_on_users(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### moderators
Get the users who have moderation powers on the site.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using moderators endpoint 
stack_users.moderators(users_options, (response) => {
    console.log(response);
});
```

#### elected_moderators
Get the users who are active moderators who have also won a moderator election.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using elected_moderators endpoint 
stack_users.elected_moderators(users_options, (response) => {
    console.log(response);
});
```

#### user_inbox
Get a user's inbox. **auth required**

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using user_inbox endpoint 
stack_users.user_inbox(user_ids, users_options, (response) => {
    console.log(response);
});
```

#### user_unread_inbox
Get the unread items in a user's inbox. **auth required**
 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using user_unread_inbox endpoint 
stack_users.user_unread_inbox(user_ids, users_options, (response) => {
    console.log(response);
});

```

#### associated_users
Get a user's associated accounts.

```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using associated_users endpoint 
stack_users.associated_users(user_ids, users_options, (response) => {
    console.log(response);
});
```

#### merge_history
Get the merges a user's accounts has undergone.

```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// id of the user
let user_ids = "6414102";

// using merge_history endpoint 
stack_users.merge_history(user_ids, users_options, (response) => {
    console.log(response);
});

```




## me section
/me are users equivalent methods that takes an **access_token** instead. These methods are provided for developer convenience, with the exception of plain [/me](https://api.stackexchange.com/docs/me), which is actually necessary for discovering which user [authenticated](https://api.stackexchange.com/docs/authentication) to an application.

```js

//  me object
const stack_me = stackexchange.me;

```

#### me
Get the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

 // using users endpoint 
stack_me.me( users_options, (response) => {
    console.log(response);
});

```

#### me_answers
Get the answers posted by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_answers endpoint 
stack_me.me_answers( users_options, (response) => {
    console.log(response);
});
```

#### me_badges
Get the badges earned by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_badges endpoint 
stack_me.me_badges( users_options, (response) => {
    console.log(response);
});
```

#### me_comments
Get the comments posted by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_comments endpoint 
stack_me.me_comments( users_options, (response) => {
    console.log(response);
});

```

#### me_comments_to
Get the comments posted by a set of users in reply to another user.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//another user_id
let toid = 1427878;


// using me_comments_to endpoint 
stack_me.me_comments_to(toid, users_options, (response) => {
    console.log(response);
});

```

#### me_favorites
Get the questions favorited by users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_favorites endpoint 
stack_me.me_favorites(users_options, (response) => {
    console.log(response);
});

```

#### me_mentioned
Get the comments that mention one of the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_mentioned endpoint 
stack_me.me_mentioned(users_options, (response) => {
    console.log(response);
});


```


#### me_network_activity
Gets a user's activity across the Stack Exchange network.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_network_activity endpoint 
stack_me.me_network_activity(users_options, (response) => {
    console.log(response);
});

```

#### me_notifications
Get a user's notifications.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_notifications endpoint 
stack_me.me_notifications(users_options, (response) => {
    console.log(response);
});    

```

#### me_unread_notifications
Get a user's unread notifications.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_unread_notifications endpoint 
stack_me.me_unread_notifications(users_options, (response) => {
    console.log(response);
});    

```


#### me_posts
Get all posts (questions and answers) owned by a set of users.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_posts endpoint 
stack_me.me_posts(users_options, (response) => {
    console.log(response);
});
   

```

#### me_privileges
Get the privileges the given user has on the site.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_privileges endpoint 
stack_me.me_privileges(users_options, (response) => {
    console.log(response);
});
   
```

#### me_questions
Get the questions asked by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_questions endpoint 
stack_me.me_questions(users_options, (response) => {
    console.log(response);
});
   
```


#### me_featured_questions
Get the questions on which a set of users, have active bounties.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_featured_questions endpoint 
stack_me.me_featured_questions(users_options, (response) => {
    console.log(response);
});
   
```

#### me_no_answer_questions
Get the questions asked by a set of users, which have **no** answers.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_no_answer_questions endpoint 
stack_me.me_no_answer_questions(users_options, (response) => {
    console.log(response);
});

   
```


#### me_unaccepted_questions
Get the questions asked by a set of users, which have at least one answer but no accepted answer.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_unaccepted_questions endpoint 
stack_me.me_unaccepted_questions(users_options, (response) => {
    console.log(response);
});
   
```

#### me_unanswered_questions
Get the questions asked by a set of users, which are not considered to be adequately answered.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_unanswered_questions endpoint 
stack_me.me_unanswered_questions(users_options, (response) => {
    console.log(response);
});
   
```

#### me_reputation
Get a subset of the reputation changes experienced by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_reputation endpoint 
stack_me.me_reputation(users_options, (response) => {
    console.log(response);
});
   
```

#### me_reputation_history
Get a history of a user's reputation, excluding private events.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_reputation_history endpoint 
stack_me.me_reputation_history(users_options, (response) => {
    console.log(response);
});
   
```

#### me_full_reputation_history
Get a full history of a user's reputation. **auth required**

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_full_reputation_history endpoint 
stack_me.me_full_reputation_history(users_options, (response) => {
    console.log(response);
});
   
```

#### me_suggested_edits
Get the suggested edits provided by users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_suggested_edits endpoint 
stack_me.me_suggested_edits(users_options, (response) => {
    console.log(response);
});
   
```

#### me_tags
Get the tags that the users (identified by a set of ids) have been active in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_tags endpoint 
stack_me.me_tags(users_options, (response) => {
    console.log(response);
});   
```

#### me_tags_top_questions
Get the top questions a user has posted with a set of tags.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//user tags
let tags = "nodejs";

// using me_tags_top_questions endpoint 
stack_me.me_tags_top_questions(tags, users_options, (response) => {
    console.log(response);
}); 
```

#### me_tags_top_answers
Get the top answers a user has posted on questions with a set of tags.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}
//user tags
let tags = "nodejs";

// using me_tags_top_answers endpoint 
stack_me.me_tags_top_answers(tags, users_options, (response) => {
    console.log(response);
});  
```

#### me_top_answer_tags
Get the top tags (by score) a single user has posted answers in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_top_answer_tags endpoint 
stack_me.me_top_answer_tags( users_options, (response) => {
    console.log(response);
});
```

#### me_top_question_tags
Get the top tags (by score) a single user has asked questions in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_top_question_tags endpoint 
stack_me.me_top_question_tags( users_options, (response) => {
    console.log(response);
});

```

#### me_timeline
Get a subset of the actions of that have been taken by the users identified by a set of ids.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_timeline endpoint 
stack_me.me_timeline(users_options, (response) => {
    console.log(response);
});
```

#### me_top_tags
Get the top tags (by score) a single user has posted in.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_top_tags endpoint 
stack_me.me_top_tags( users_options, (response) => {
    console.log(response);
});
```

#### me_inbox
Get a user's inbox. **auth required**

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_inbox endpoint 
stack_me.me_inbox( users_options, (response) => {
    console.log(response);
});
```


#### me_unread_inbox
Get the unread items in a user's inbox. **auth required**

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_unread_inbox endpoint 
stack_me.me_unread_inbox( users_options, (response) => {
    console.log(response);
});

```
#### me_associated_users
Get a user's associated accounts.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_associated_users endpoint 
stack_me.me_associated_users(users_options, (response) => {
    console.log(response);
});

```

#### me_merge_history
Get the merges a user's accounts has undergone.

 ```js
//options for users
let users_options = {
    "key": "your_key",
    "access_token": "your_token"
}

// using me_merge_history endpoint 
stack_me.me_merge_history(inbox_options, (response) => {
    console.log(response);
});

```

## questions section

The options object is optional, can be an empty object also. update all your query fields in it. supported query fields are as follows:

```js
let options  = {
    "order": "desc",
    "sort": "activity",
    "site": "stackoverflow",
    "key" : "your_key"
}

//  questions object
const stack_questions = stackexchange.questions;
```

#### questions
 Get all questions on the site.
 
 ```js
 // using questions endpoint 
stack_questions.questions(options , (response) => {
    // response will be json 
    console.log(response);
 });
``` 
#### questions by ids
Get the questions identified by a set of ids.

 ```js
 ids = "47559184"
 // using questions_by_ids endpoint 
 stack_questions.questions_by_ids(ids , options , (response) => {
    // response will be json 
    console.log(response);
 });
``` 


#### answers on questions
Get the answers to the questions identified by a set of ids.
 ```js
 id = "47596027"
 // using answers_on_questions endpoint 
 stack_questions.answers_on_questions(id, options , (response) => {
    // response will be json 
    console.log(response);
 });
``` 

#### render answers

 Renders a hypothetical answer to a question. This is a post endpoints, the options section looks like this, both fields are required.
 ```js
  let options = {
    "body": "hello",
    "site": "stackoverflow"
}

// id of the question
 let id = "47596027"
 
 // using render_answer endpoint 
stack_questions.render_answer("47596027", options , (response) => {
   // response returns hypothetical solution
    console.log(response);
});
``` 

#### linked questions
Get the questions that link to the questions identified by a set of ids.

 ```js
 // id of the question
 let id = "1884724";
 
 // using answers_on_questions endpoint 
 stack_questions.linked_questions(id, options , (response) => {
    console.log(response);
 });
 
``` 

#### related questions
Get the questions that are related to the questions identified by a set of ids.

 ```js
 // id of the question
 let id = "37878662";
 
 // using related_questions endpoint 
 stack_questions.related_questions(id, options , (response) => {
        console.log(response);
 });
 
``` 


#### questions timeline
Get the timelines of the questions identified by a set of ids.

 ```js
 // id of the question
 let id = "37878662";
 
 // using questions_timeline endpoint 
stack_questions.questions_timeline(id, options, (response) => {
    console.log(response);
});
 
```

#### featured questions
Get all questions on the site with active bounties.

 ```js
 
 // using featured_questions endpoint 
stack_questions.featured_questions(options, (response) => {
      //will return featured questions
    console.log(response);
});

```

#### no answer questions
Get all questions on the site with no answers.

 ```js
 
 // using no_answer_questions endpoint 
stack_questions.no_answer_questions( options , (response) => {
   // will return no-answer questions
    console.log(response);
 });
```



#### unanswered questions
Get all questions the site considers unanswered.

 ```js
 
 // using unanswered_questions endpoint 
stack_questions.unanswered_questions( options , (response) => {
    //returns unanswered questions details
    console.log(response);
 });
```



#### unanswered questions my tags

Get questions the site considers unanswered within a user's favorite or interesting tags. **auth required** This endpoint required access_token and key in options. 
 ```js

 // using unanswered_questions_my_tags endpoint 
stack_questions.unanswered_questions_my_tags( options , (response) => {
    console.log(response);
 });
```

#### question flag options

Returns valid flag options for the given question. **auth required**. This endpoint required access_token and key in options. 
 ```js
let options = {
    "key": "your_key",
    "access_token": "your_token",
    "site": "stackoverflow"
}

let question_id = "37878662";

 // using question_flag_options endpoint 
stack_questions.question_flag_options(question_id, options, (response) => {
    console.log(response);
});
```

#### question close options

Returns valid flag options which are also close reasons for the given question. **auth required**. This endpoint required access_token and key in options. 
 ```js
let options = {
    "key": "your_key",
    "access_token": "your_token",
    "site": "stackoverflow"
}

let question_id = "37878662";

 // using question_close_options endpoint 
stack_questions.question_close_options(question_id, options, (response) => {
    console.log(response);
});
```

#### comments on questions

Get the comments on the questions identified by a set of ids. This endpoint required access_token and key in options. 
 ```js
let options = {
    "key": "your_key",
    "access_token": "your_token",
    "site": "stackoverflow"
}

let question_id = "45934757";

 // using comments_on_questions endpoint 
stack_questions.comments_on_questions(question_id, options, (response) => {
    console.log(response);
});

```
## answers section

The options object is optional, can be an empty object also. update all your query fields in it.

```js

//  answers object
const stack_answers = stackexchange.answers;
```

#### answers
 Get all answers on the site.
 
 ```js
 // answer query options
 let options = {
    "key": "your_key",
    "access_token": "your_token"
}

 // using answers endpoint 
stack_answers.answers(answers_options, (response) => {
    console.log(response);
});
```

#### answers_by_ids
 Get answers identified by a set of ids.
 
 ```js
 // query options
 let options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the answer
let answer_id = "6414102";

 // using answers_by_ids endpoint 
stack_answers.answers_by_ids(answer_id, answers_options, (response) => {
    console.log(response);
});

```

#### accept_answer
 Casts an accept vote on the given answer. **auth required**
 
 ```js
 // query options
 let options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the answer
let answer_id = "6414102";

 // using accept_answer endpoint 
stack_answers.accept_answer(answer_id, answers_options, (response) => {
    console.log(response);
});
```

#### undo_accept_answer
 Undoes an accept vote on the given answer. **auth required**
 
 ```js
 // query options
 let options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the answer
let answer_id = "47451356";

 // using undo_accept_answer endpoint 
stack_answers.undo_accept_answer(answer_id, answers_options, (response) => {
    console.log(response);
});
```
#### comments_on_answers
 Get comments on the answers identified by a set of ids.
 
 ```js
 // query options
 let options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the answer
let answer_id = "37886434";

 // using comments_on_answers endpoint 
stack_answers.comments_on_answers(answer_id, answers_options, (response) => {
    console.log(response);
});
```

## badges section

```js
let badges_options = {
    "site": "stackoverflow",
    "key": "U4DMV*8nvpm3EOpvf69Rxw(("
}

//  badges object
const stack_badges = stackexchange.badges;

```

#### badges
Get all badges on the site, in alphabetical order.

 ```js
 // using badges endpoint 
stack_badges.badges(badges_options, (response) => {
    // response will be json     
    console.log(response);
});

```

#### badges_by_id
Get the badges identified by ids.

 ```js
// id of the badge
let id = "222"
 // using badges_by_id endpoint 
stack_badges.badges_by_id(id, badges_options, (response) => {
    // response will be json    
    console.log(response);
});

```
#### badges_by_name
 Get all non-tagged-based badges in alphabetical order.
 
 ```js
 
// name of the badge
let name = "fanatic"

 // using badges_by_name endpoint 
stack_badges.badges_by_name(name, badges_options, (response) => {
    // response will be json    
    console.log(response);
});

```

#### badge_recipients
Get badges recently awarded on the site.

 ```js
//  options fields are as follows 
 let options = {
        "site": "stackoverflow"
    }

 // using badge_recipients endpoint 
stack_badges.badge_recipients( options, (response) => {
    // response will be json        
    console.log(response);
});

```

#### badge_recipients_by_id
Get the recent recipients of the given badges.

 ```js
 //  options fields are as follows 
 let options = {
        "site": "stackoverflow"
    }

// id of the badge
let id = "222"
 // using badge_recipients_by_id endpoint 
stack_badges.badge_recipients_by_id(id,  badges_options, (response) => {
    // response will be json        
    console.log(response);
});

```


#### badge_by_tags
Get all tagged-based badges in alphabetical order.

 ```js
//  options fields are as follows 
 let options = {
        "order": "desc",
        "sort": "popular",
        "site": "stackoverflow"
    }

 // using badge_by_tags endpoint 
stack_badges.badge_by_tags(options, (response) => {
    // response will be json        
    console.log(response);
});

```
## tags section
```js
let tags_options = {
    "site": "stackoverflow",
    "key": "your_key"
}


//  tags object
const stack_tags = stackexchange.tags;
```

#### tags
Get the tags on the site.

 ```js
 // using tags endpoint 
stack_tags.tags(tags_options, (response) => {
    console.log(response);
});
```

#### tags by name
Get tags on the site by their names.

 ```js
 //tag name for search
 let tag_name = "nodejs"
 // using tags_by_name endpoint 
stack_tags.tags_by_name(tag_name, tags_options, (response) => {
    console.log(response);
});
```
#### moderator only tags
Get the tags on the site that only moderators can use.

 ```js
 // using moderator_only_tags endpoint 
stack_tags.moderator_only_tags(tags_options, (response) => {
    console.log(response);
});
```

#### require tags
Get the tags on the site that fulfill required tag constraints.

 ```js
 // using require_tags endpoint 
stack_tags.require_tags(tags_options, (response) => {
    console.log(response);
});
```

#### tag synonyms
Get all the tag synonyms on the site.

 ```js
 // using tag_synonyms endpoint 
stack_tags.tag_synonyms(tags_options, (response) => {
    console.log(response);
});
```

#### faqs by tags
Get frequently asked questions in a set of tags.

 ```js
 //tag name for search
 let tag_name = "nodejs"
 // using faqs_by_tags endpoint 
stack_tags.faqs_by_tags(tag_name, tags_options, (response) => {
    console.log(response);
});
```

#### related tags
Get related tags, based on common tag pairings.

 ```js
 //tag name for search
 let tag_name = "nodejs"
 // using related_tags endpoint 
stack_tags.related_tags(tag_name, tags_options, (response) => {
    console.log(response);
});

```

#### synonyms by tags
Get the synonyms for a specific set of tags.

 ```js
 //tag name for search
 let tag_name = "nodejs"
 // using synonyms_by_tags endpoint 
stack_tags.synonyms_by_tags("nodejs", tags_options, (response) => {
    console.log(response);
});

```

#### top answerers on tags
Get the top answer posters in a specific tag, either in the last month or for all time.

 ```js
 //tag name for search
 let tag_name = "java"
 // using top_answerers_on_tags endpoint 
stack_tags.top_answerers_on_tags(tag_name, tags_options, (response) => {
    console.log(response);
});
```

#### top askers on tags
Get the top question askers in a specific tag, either in the last month or for all time.

 ```js
 //tag name for search
 let tag_name = "java"
 // using top_askers_on_tags endpoint 
stack_tags.top_askers_on_tags(tag_name, tags_options, (response) => {
    console.log(response);
});
```

#### wikis by tags
Get the wiki entries for a set of tags.

 ```js
 //tag name for search
 let tag_name = "java"
 // using wikis_by_tags endpoint 
stack_tags.wikis_by_tags(tag_name, tags_options, (response) => {
    console.log(response);
});
```

## comments section

```js

//  comments object
const stack_comments = stackexchange.comments;


```

#### comments
Get all comments on the site. comments_options can be empty object. 

 ```js

 let comments_options = {
    "key": "your_key",
    "access_token": "your_token"
}

 // using comments endpoint 
stack_comments.comments(comments_options, (response) => {
    console.log(response);
});

```

#### comments_by_ids
Get comments identified by a set of ids.

 ```js
//options for comments
 let comments_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the comment
let comment_id = "131321";

// using comments_by_ids endpoint 
stack_comments.comments_by_ids(comment_id, comments_options, (response) => {
    console.log(response);
});

```

#### delete_comment
Delete a comment identified by its id. **auth required**

 ```js
//options for comments
 let comments_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the comment
let comment_id = "12135";

// using delete_comment endpoint 
stack_comments.delete_comment(comment_id, comments_options, (response) => {
    console.log(response);
});


```

#### edit_comment
Edit a comment identified by its id. **auth required**. body is required in options

 ```js
//options for comments
 let comments_options = {
    "body": "edited comment"
    "key": "your_key",
    "access_token": "your_token"
}

//id of the comment
let comment_id = "12135";

// using edit_comment endpoint 
stack_comments.edit_comment(comment_id, comments_options, (response) => {
    console.log(response);
});


```

#### create_comment_flag
Casts a flag on the given comment. **auth required**. option_id is required in options

 ```js
//options for comments
 let comments_options = {
    "option_id": "1323"
    "key": "your_key",
    "access_token": "your_token"
}

//id of the comment
let comment_id = "12135";

// using create_comment_flag endpoint 
stack_comments.create_comment_flag(comment_id, comments_options, (response) => {
    console.log(response);
});

```

#### comment_flag_options
Returns valid flag options for the given comment. **auth required**

 ```js
//options for comments
 let comments_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the comment
let comment_id = "12135";

// using comment_flag_options endpoint 
stack_comments.comment_flag_options(comment_id, comments_options, (response) => {
    console.log(response);
});

```

#### upvote_comment
Casts an upvote on the given comment. **auth required**

 ```js
//options for comments
 let comments_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the comment
let comment_id = "12135";

// using upvote_comment endpoint 
stack_comments.upvote_comment(comment_id, comments_options, (response) => {
    console.log(response);
});

```

#### undo_upvote_comment
Undoes an upvote on the given comment. **auth required**

 ```js
//options for comments
 let comments_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the comment
let comment_id = "12135";

// using undo_upvote_comment endpoint 
stack_comments.undo_upvote_comment(comment_id, comments_options, (response) => {
    console.log(response);
});

```

## posts section

```js

//  posts object
const stack_posts = stackexchange.posts;

```

#### posts
Get all posts (questions and answers) in the system. posts_options can be empty object. 

 ```js

 let posts_options = {
    "key": "your_key",
    "access_token": "your_token"
}

 // using posts endpoint 
stack_posts.posts(posts_options, (response) => {
    console.log(response);
});
```

#### posts_by_ids
Get all posts identified by a set of ids. Useful for when the type of post (question or answer) is not known. 

 ```js

 let posts_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the post
let post_id = "45934757";

 // using posts_by_ids endpoint 
stack_posts.posts_by_ids(post_id, posts_options, (response) => {
    console.log(response);
});
```

#### comments_on_posts
Get comments on the posts (question or answer) identified by a set of ids. 

 ```js

 let posts_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the post
let post_id = "45934757";

 // using comments_on_posts endpoint 
stack_posts.comments_on_posts(post_id, posts_options, (response) => {
    console.log(response);
});
```

#### create_comment
Create a new comment on the post identified by id. **auth required**. the comment should be included in options as body.

 ```js
// body is required field.
 let posts_options = {
    "body": "Adding test comment"
    "key": "your_key",
    "access_token": "your_token"
}

//id of the post
let post_id = "45934757";

 // using create_comment endpoint 
stack_posts.create_comment(post_id, posts_options, (response) => {
    console.log(response);
});
```

#### render_comment
Renders a hypothetical comment on the given post.

 ```js
 
 let posts_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the post
let post_id = "45934757";

 // using render_comment endpoint 
stack_posts.render_comment(post_id, {}, (response) => {
    console.log(response);
});
```

#### revisions_by_ids
Get revisions on the set of posts in ids.

 ```js
 
 let posts_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the post
let post_id= 39892422;

 // using revisions_by_ids endpoint 
stack_posts.revisions_by_ids(post_id, posts_options, (response) => {
    console.log(response);
});
```

#### posts_on_suggested_edits
Get suggested edits on the set of posts in ids.
`
 ```js
 let posts_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//id of the post
let post_id= 39892422;

 // using posts_on_suggested_edits endpoint 
stack_posts.posts_on_suggested_edits(post_id, posts_options, (response) => {
    console.log(response);
});
```

## search section

```js

//  search object
const stack_search = stackexchange.search;
```

#### search
Search the site for questions meeting certain criteria. search_options must contain one of **tagged** or **intitle** field.

 ```js

 let search_options = {
    "tagged": "nodejs",
    "key": "your_key",
    "access_token": "your_token"
}

 // using search endpoint 
stack_search.search(search_options, (response) => {
    console.log(response);
});
```

#### advanced_search
Search the site for questions using most of the on-site search options. for more search_options please visit [advanced_search](https://api.stackexchange.com/docs/advanced-search) endpoint of stackexchange.

 ```js

 let search_options = {
    "key": "your_key",
    "access_token": "your_token"
}

 // using advanced_search endpoint 
stack_search.advanced_search(search_options, (response) => {
    console.log(response);
});
```

#### similar
Search the site based on similarity to a title. title must be set in search_options. 

 ```js

 let search_options = {
    "title": "npm install error",
    "key": "your_key",
    "access_token": "your_token"
}

 // using similar endpoint 
stack_search.similar(search_options, (response) => {
    console.log(response);
});
```

#### excerpt_search
Searches a site. For more search_options see [excerpt_search](https://api.stackexchange.com/docs/excerpt-search) endpoint of stackexchange. 

 ```js

 let search_options = {
    "key": "your_key",
    "access_token": "your_token"
}

 // using excerpt_search endpoint 
stack_search.excerpt_search(search_options, (response) => {
    console.log(response);
});
```

## suggested_edits section

```js
let suggested_edits_options = {
    "key": "your_key",
    "access_token": "your_token"
}

//  suggested_edits object
const stack_suggested_edits = stackexchange.suggested_edits;
```

#### suggested_edits
Get all the suggested edits on the site. options is optional, can be an empty object

 ```js
 // using suggested_edits endpoint 
stack_suggested_edits.suggested_edits(suggested_edits_options, (response) => {
        console.log(response);
});
```

#### suggested_edits_by_ids
Get the suggested edits identified by a set of ids. options is optional, can be an empty object

 ```js
 // id of the suggested_edit
let suggested_edit_id = "3445738"

 // using suggested_edits_by_ids endpoint 
stack_suggested_edits.suggested_edits_by_ids(suggested_edit_id, suggested_edits_options, (response) => {
    console.log(response);
});
```

## network section
These methods return data across the entire Stack Exchange network of sites. Accordingly, you do not pass a site parameter to them.

```js

//  network object
const stack_network = stackexchange.network;

```

### Access Tokens

#### invalidate_access_tokens
Allows an application to dispose of access_tokens when it is done with them.

 ```js
//options for users
let invalidate_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
 
 // using invalidate_access_tokens endpoint 
stack_network.invalidate_access_tokens(invalidate_options, (response) => {
    console.log(response);
});

```

#### read_access_tokens
Allows an application to inspect access_tokens it has, useful for debugging.

 ```js
//options for users
let read_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using read_access_tokens endpoint 
stack_network.read_access_tokens( read_options, (response) => {
    console.log(response);
});

```

### Applications

#### application_de_authenticate
Allows an application to de-authorize itself for a set of users.

 ```js
//options for users
let read_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using application_de_authenticate endpoint 
stack_network.application_de_authenticate( read_options, (response) => {
    console.log(response);
});


```

### Errors

#### errors
Get descriptions of all the errors that the API could return.

 ```js
//options for users
let read_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using errors endpoint 
stack_network.errors( read_options, (response) => {
    console.log(response);
});


```

#### simulate_errors
Simulate an API error for testing purposes.

 ```js
//options for users
let read_options = {
    "key": "your_key",
    "access_token": "your_token"
}

let error_id = "401"; 
 
// using simulate_errors endpoint 
stack_network.simulate_errors(error_id, read_options, (response) => {
    console.log(response);
});

```

### Filters

#### create_filter
Create a new [filter](https://api.stackexchange.com/docs/filters).

 ```js
//options for users
let read_options = {
    "include": ".quota_max",
    "exclude": ".quota_remaining",
    "unsafe": false
    "key": "your_key",
    "access_token": "your_token"
}
 
// using create_filter endpoint 
stack_network.create_filter(create_filter_options, (response) => {
    console.log(response);
});

```

#### read_filter
Decode a set of filters, useful for debugging purposes.

 ```js
//options for users
let read_options = {
     "key": "your_key",
    "access_token": "your_token"
}
 
let filter = ".quota_max"
 
// using read_filter endpoint 
stack_network.read_filter(filter, read_options, (response) => {
    console.log(response);
});

```


### Inbox

#### Inbox
Get a user's inbox, outside of the context of a site. **auth required**

 ```js
//options for users
let inbox_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using inbox endpoint 
stack_network.inbox(inbox_options, (response) => {
    console.log(response);
});

```

#### inbox_unread
Get the unread items in a user's inbox, outside of the context of a site. **auth required**

 ```js
//options for users
let inbox_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using inbox_unread endpoint 
stack_network.inbox_unread(inbox_options, (response) => {
    console.log(response);
});

```

### Notifications

#### notifications
Get a user's notifications, outside of the context of a site. **auth required**

 ```js
//options for users
let inbox_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using notifications endpoint 
stack_network.notifications(inbox_options, (response) => {
    console.log(response);
});

```

#### unread_notifications
Get a user's notifications, outside of the context of a site. **auth required**

 ```js
//options for users
let inbox_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using unread_notifications endpoint 
stack_network.unread_notifications(inbox_options, (response) => {
    console.log(response);
});

```

### Sites

#### sites
Get all the sites in the Stack Exchange network.

 ```js
//options for users
let inbox_options = {
    "key": "your_key",
    "access_token": "your_token"
}
 
// using sites endpoint 
stack_network.sites(inbox_options, (response) => {
    console.log(response);
});

```

## info section
```js
let info_options = {
    "site": "stackoverflow"
}

//  info object
const stack_info = stackexchange.info;
```

#### info
Get information about the entire site.

 ```js
 // using info endpoint 
stack_info.info(info_options, (response) => {
    // response will be json 
    console.log(response);
});
```

## privilages section

```js
let privilages_options = {
    "site": "stackoverflow",
    "key" : "your_key"
}

//  privilages object
const stack_privilages = stackexchange.privilages;
```

#### privilages
Get all the privileges available on the site.

 ```js
 // using info endpoint 
stack_privilages.privilages(privilages_options, (response) => {
    // response will be json 
    console.log(response);
});
```

## revisions section

```js
let revisions_options = {
    "site": "stackoverflow",
    "key" : "your_key"
}

// privilages object
const stack_revisions = stackexchange.revisions;
```

#### revisions
Get all revisions identified by a set of ids.

 ```js
 // ids will be available from posts_id endpoint, can be single or multiple seperated by comma. 
 let ids = "BCF73AEC-7F9D-4623-8C38-66E481B52513"
 // using info endpoint 
stack_revisions.revisions( ids , revisions_options, (response) => {
    // response will be json 
    console.log(response);
});
```

## events section

To use events endpoint you need to have access_token and key, you can generate your access_token and key [here](https://api.stackexchange.com/docs/events).
```js
let event_options = {
    "site": "stackoverflow",
    "key": "your_key",
    "access_token": "your_token"
}

// ; events object
const stack_events = stackexchange.events;
```

#### events
Get recent events that have occurred on the site. Effectively a stream of new users and content. **auth required**
 ```js
 // using info endpoint 
stack_events.events(event_options, (response) => {
    // response will be json 
    console.log(response);
});
```



## Table of Content

The module exposes following endpoints of stackexchange api:

* [Users section](https://www.npmjs.com/package/stack-exchange#users-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [users](https://www.npmjs.com/package/stack-exchange#users) | Get all users on the site. | [users](https://api.stackexchange.com/docs/users) |
| [users_by_ids](https://www.npmjs.com/package/stack-exchange#users_by_ids) | Get the users identified by a set of ids. | [users/{ids}](https://api.stackexchange.com/docs/users-by-ids) |
| [answers_on_users](https://www.npmjs.com/package/stack-exchange#answers_on_users) | Get the answers posted by the users identified by a set of ids. | [users/{ids}/answers]( https://api.stackexchange.com/docs/answers-on-users) |
| [badges_on_users](https://www.npmjs.com/package/stack-exchange#badges_on_users) | Get the badges earned by the users identified by a set of ids. | [users/{ids}/badges](https://api.stackexchange.com/docs/badges-on-users) |
| [comments_on_users](https://www.npmjs.com/package/stack-exchange#comments_on_users) | Get the comments posted by the users identified by a set of ids. | [users/{ids}/comments](https://api.stackexchange.com/docs/comments-on-users) |
| [comments_by_users_to_user](https://www.npmjs.com/package/stack-exchange#comments_by_users_to_user) | Get the comments posted by a set of users in reply to another user. | [/users/{ids}/comments/{toid}](https://api.stackexchange.com/docs/comments-by-users-to-user) |
|[favorites_on_users](https://www.npmjs.com/package/stack-exchange#favorites_on_users)  | Get the questions favorited by users identified by a set of ids. | [users/{ids}/favorites](https://api.stackexchange.com/docs/favorites-on-users) |
| [mentions_on_users](https://www.npmjs.com/package/stack-exchange#mentions_on_users) | Get the comments that mention one of the users identified by a set of ids. | [users/{ids}/mentioned](https://api.stackexchange.com/docs/mentions-on-users) |
| [users_network_activity](https://www.npmjs.com/package/stack-exchange#users_network_activity) | Gets a user's activity across the Stack Exchange network. | [users/{id}/network-activity](https://api.stackexchange.com/docs/users-network-activity) |
| [user_notifications](https://www.npmjs.com/package/stack-exchange#user_notifications) | Get a user's notifications. | [users/{id}/notifications](https://api.stackexchange.com/docs/user-notifications) |
| [user_unread_notifications](https://www.npmjs.com/package/stack-exchange#user_unread_notifications) | Get a user's unread notifications. | [users/{id}/notifications/unread](https://api.stackexchange.com/docs/user-unread-notifications) |
|[posts_on_users](https://www.npmjs.com/package/stack-exchange#posts_on_users) | Get all posts (questions and answers) owned by a set of users. | [users/{ids}/posts](https://api.stackexchange.com/docs/posts-on-users) |
| [privileges_on_users](https://www.npmjs.com/package/stack-exchange#privileges_on_users) | Get the privileges the given user has on the site. | [users/{id}/privileges](https://api.stackexchange.com/docs/privileges-on-users) |
| [questions_on_users](https://www.npmjs.com/package/stack-exchange#questions_on_users) | Get the questions asked by the users identified by a set of ids. | [users/{ids}/questions](https://api.stackexchange.com/docs/questions-on-users) |
| [featured_questions_on_users](https://www.npmjs.com/package/stack-exchange#featured_questions_on_users) | Get the questions on which a set of users, have active bounties. | [users/{ids}/questions/featured](https://api.stackexchange.com/docs/featured-questions-on-users) |
| [no_answer_questions_on_users](https://www.npmjs.com/package/stack-exchange#no_answer_questions_on_users) | Get the questions asked by a set of users, which have no answers. | [users/{ids}/questions/no-answers](https://api.stackexchange.com/docs/no-answer-questions-on-users) |
| [unaccepted_questions_on_users](https://www.npmjs.com/package/stack-exchange#unaccepted_questions_on_users) | Get the questions asked by a set of users, which have at least one answer but no accepted answer. | [users/{ids}/questions/unaccepted](https://api.stackexchange.com/docs/unaccepted-questions-on-users) |
| [unanswered_questions_on_users](https://www.npmjs.com/package/stack-exchange#unanswered_questions_on_users) | Get the questions asked by a set of users, which are not considered to be adequately answered. | [users/{ids}/questions/unanswered](https://api.stackexchange.com/docs/unanswered-questions-on-users) |
| [reputation_on_users](https://www.npmjs.com/package/stack-exchange#reputation_on_users) | Get a subset of the reputation changes experienced by the users identified by a set of ids. | [users/{ids}/reputation](https://api.stackexchange.com/docs/reputation-on-users) |
| [reputation_history](https://www.npmjs.com/package/stack-exchange#reputation_history) | Get a history of a user's reputation, excluding private events. | [users/{ids}/reputation-history](https://api.stackexchange.com/docs/reputation-history) |
| [full_reputation_history](https://www.npmjs.com/package/stack-exchange#full_reputation_history) | Get a full history of a user's reputation. auth required | [users/{id}/reputation-history/full](https://api.stackexchange.com/docs/full-reputation-history) |
| [tags_on_users](https://www.npmjs.com/package/stack-exchange#tags_on_users) | Get the tags that the users (identified by a set of ids) have been active in. | [users/{ids}/tags](https://api.stackexchange.com/docs/tags-on-users) |
| [suggested_edits_on_users](https://www.npmjs.com/package/stack-exchange#suggested_edits_on_users) | Get the suggested edits provided by users identified by a set of ids. | [users/{ids}/suggested-edits](https://api.stackexchange.com/docs/suggested-edits-on-users) |
| [top_user_answers_in_tags](https://www.npmjs.com/package/stack-exchange#top_user_answers_in_tags) | Get the top answers a user has posted on questions with a set of tags. | [users/{id}/tags/{tags}/top-answers](https://api.stackexchange.com/docs/top-user-answers-in-tags) |
| [top_user_questions_in_tags](https://www.npmjs.com/package/stack-exchange#top_user_questions_in_tags) | Get the top questions a user has posted with a set of tags. | [users/{id}/tags/{tags}/top-questions](https://api.stackexchange.com/docs/top-user-questions-in-tags) |
| [timeline_on_users](https://www.npmjs.com/package/stack-exchange#timeline_on_users) | Get a subset of the actions of that have been taken by the users identified by a set of ids. | [users/{ids}/timeline](https://api.stackexchange.com/docs/timeline-on-users) |
| [top_answer_tags_on_users](https://www.npmjs.com/package/stack-exchange#top_answer_tags_on_users) | Get the top tags (by score) a single user has posted answers in. | [users/{id}/top-answer-tags](https://api.stackexchange.com/docs/top-answer-tags-on-users) |
| [top_tags_on_users](https://www.npmjs.com/package/stack-exchange#top_tags_on_users) | Get the top tags (by score) a single user has posted in. | [users/{id}/top-tags](https://api.stackexchange.com/docs/top-tags-on-users) |
| [top_question_tags_on_users](https://www.npmjs.com/package/stack-exchange#top_question_tags_on_users) | Get the top tags (by score) a single user has asked questions in. | [users/{id}/top-question-tags](https://api.stackexchange.com/docs/top-question-tags-on-users) |
| [moderators](https://www.npmjs.com/package/stack-exchange#moderators) | Get the users who have moderation powers on the site. | [users/moderators](https://api.stackexchange.com/docs/moderators) |
| [elected_moderators](https://www.npmjs.com/package/stack-exchange#elected_moderators) | Get the users who are active moderators who have also won a moderator election. | [users/moderators/elected](https://api.stackexchange.com/docs/elected-moderators) |
| [user_inbox](https://www.npmjs.com/package/stack-exchange#user_inbox) | Get a user's inbox. auth required  | [users/{id}/inbox](https://api.stackexchange.com/docs/user-inbox) |
| [user_unread_inbox](https://www.npmjs.com/package/stack-exchange#user_unread_inbox) | Get the unread items in a user's inbox. auth required  | [users/{id}/inbox/unread](https://api.stackexchange.com/docs/user-unread-inbox) |
| [associated_users](https://www.npmjs.com/package/stack-exchange#associated_users) | Get a user's associated accounts. | [users/{ids}/associated](https://api.stackexchange.com/docs/associated-users) |
| [merge_history](https://www.npmjs.com/package/stack-exchange#merge_history) | Get the merges a user's accounts has undergone. | [users/{ids}/merges](https://api.stackexchange.com/docs/merge-history) |

* [Me section](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [me](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me) | Get the users identified by a set of ids. | [me](https://api.stackexchange.com/docs/me) |
| [me_answers](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_answers) | Get the answers posted by the users identified by a set of ids. | [me/answers](https://api.stackexchange.com/docs/me-answers) |
| [me_badges](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_badges) | Get the badges earned by the users identified by a set of ids. | [me/badges](https://api.stackexchange.com/docs/me-badges) |
| [me_comments](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_comments) | Get the comments posted by the users identified by a set of ids. | [me/comments](https://api.stackexchange.com/docs/me-comments) |
| [me_comments_to](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_comments_to) | Get the comments posted by a set of users in reply to another user. | [me/comments/{toId}](https://api.stackexchange.com/docs/me-comments-to) |
| [me_favorites](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_favorites) | Get the questions favorited by users identified by a set of ids. | [me/favorites](https://api.stackexchange.com/docs/me-favorites) |
| [me_mentioned](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_mentioned) | Get the comments that mention one of the users identified by a set of ids. | [me/mentioned](https://api.stackexchange.com/docs/me-mentioned) |
| [me_network_activity](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_network_activity) | Gets a user's activity across the Stack Exchange network. | [me/network-activity](https://api.stackexchange.com/docs/me-network-activity) |
| [me_notifications](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_notifications) | Get a user's notifications. | [me/notifications](https://api.stackexchange.com/docs/me-notifications) |
| [me_unread_notifications](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_unread_notifications) | Get a user's unread notifications. | [me/notifications/unread](https://api.stackexchange.com/docs/me-unread-notifications) |
| [me_posts](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_posts) | Get all posts (questions and answers) owned by a set of users. | [me/posts](https://api.stackexchange.com/docs/me-posts) |
| [me_privileges](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_privileges) | Get the privileges the given user has on the site. | [me/privileges](https://api.stackexchange.com/docs/me-privileges) |
| [me_questions](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_questions) | Get the questions asked by the users identified by a set of ids. | [me/questions](https://api.stackexchange.com/docs/me-questions) |
| [me_featured_questions](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_featured_questions) | Get the questions on which a set of users, have active bounties. | [me/questions/featured](https://api.stackexchange.com/docs/me-featured-questions) |
| [me_no_answer_questions](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_no_answer_questions) | Get the questions asked by a set of users, which have **no** answers. | [me/questions/no-answers](https://api.stackexchange.com/docs/me-no-answer-questions) |
| [me_unaccepted_questions](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_unaccepted_questions) | Get the questions asked by a set of users, which have at least one answer but no accepted answer. | [me/questions/unaccepted](https://api.stackexchange.com/docs/me-unaccepted-questions) |
| [me_unanswered_questions](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_unanswered_questions) | Get the questions asked by a set of users, which are not considered to be adequately answered. | [me/questions/unanswered](https://api.stackexchange.com/docs/me-unanswered-questions) |
| [me_reputation](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_reputation) | Get a subset of the reputation changes experienced by the users identified by a set of ids. | [me/reputation](https://api.stackexchange.com/docs/me-reputation) |
| [me_reputation_history](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_reputation_history) | Get a history of a user's reputation, excluding private events. | [me/reputation-history](https://api.stackexchange.com/docs/me-reputation-history) |
| [me_full_reputation_history](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_full_reputation_history) | Get a full history of a user's reputation. **auth required** | [me/reputation-history/full](https://api.stackexchange.com/docs/me-full-reputation-history) |
| [me_suggested_edits](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_suggested_edits) | Get the suggested edits provided by users identified by a set of ids. | [me/suggested-edits](https://api.stackexchange.com/docs/me-suggested-edits) |
| [me_tags](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_tags) | Get the tags that the users (identified by a set of ids) have been active in. | [me/tags](https://api.stackexchange.com/docs/me-tags) |
| [me_tags_top_questions](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_tags_top_questions) | Get the top answers a user has posted on questions with a set of tags. | [me/tags/{tags}/top-answers](https://api.stackexchange.com/docs/me-tags-top-answers) |
| [me_tags_top_answers](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_top_answer_tags) | Get the top questions a user has posted with a set of tags. | [me/tags/{tags}/top-questions](https://api.stackexchange.com/docs/me-tags-top-questions) |
| [me_timeline](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_timeline) | Get a subset of the actions of that have been taken by the users identified by a set of ids. | [me/timeline](https://api.stackexchange.com/docs/me-timeline) |
| [me_top_answer_tags]() | Get the top tags (by score) a single user has posted answers in. | [me/top-answer-tags](https://api.stackexchange.com/docs/me-top-answer-tags) |
| [me_top_question_tags](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_top_question_tags) | Get the top tags (by score) a single user has asked questions in. | [me/top-question-tags](https://api.stackexchange.com/docs/me-top-question-tags) |
| [me_top_tags](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_top_tags) | Get the top tags (by score) a single user has posted in. | [me/top-tags](https://api.stackexchange.com/docs/me-top-tags) |
| [me_inbox](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_inbox) | Get a user's inbox. auth required | [me/inbox](https://api.stackexchange.com/docs/me-inbox) |
| [me_unread_inbox](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_unread_inbox) | Get the unread items in a user's inbox. auth required | [me/inbox/unread](https://api.stackexchange.com/docs/me-unread-inbox) |
| [me_associated_users](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_associated_users) | Get a user's associated accounts. | [me/associated](https://api.stackexchange.com/docs/me-associated-users) |
| [me_merge_history](https://github.com/KarthikGangadhar/stack-exchange/blob/master/README.md#me_merge_history) | Get the merges a user's accounts has undergone. | [me/merges](https://api.stackexchange.com/docs/me-merge-history) |

* [Questions section](https://www.npmjs.com/package/stack-exchange#questions-section)

| Endpoints | Description | See in StackExchange              |
|-------------|------|--------------------|
| [questions](https://www.npmjs.com/package/stack-exchange#questions) | Get all questions on the site. | [questions](https://api.stackexchange.com/docs/questions) |
| [quetions_by_id](https://www.npmjs.com/package/stack-exchange#questions-by-ids) | Get the questions identified by a set of ids. | [questions/{ids}](https://api.stackexchange.com/docs/questions-by-ids) |
| [answers_on_questions](https://www.npmjs.com/package/stack-exchange#answers-on-questions) | Get the answers to the questions identified by a set of ids. | [questions/{ids}/answers](https://api.stackexchange.com/docs/answers-on-questions) |
| [render_answers](https://www.npmjs.com/package/stack-exchange#render-answers) | Renders a hypothetical answer to a question. This is a post endpoints, the options section looks like this, both fields are required.  | [questions/{id}/answers/render](https://api.stackexchange.com/docs/render-answer) |
| [linked_questions](https://www.npmjs.com/package/stack-exchange#linked-questions) | Get the questions that link to the questions identified by a set of ids.  | [questions/{ids}/linked](https://api.stackexchange.com/docs/linked-questions) |
| [related_questions](https://www.npmjs.com/package/stack-exchange#related-questions)  | Get the questions that are related to the questions identified by a set of ids. | [questions/{ids}/related](https://api.stackexchange.com/docs/related-questions) |
| [questions_timeline](https://www.npmjs.com/package/stack-exchange#questions-timeline) | Get the timelines of the questions identified by a set of ids.  | [questions/{ids}/timeline](https://api.stackexchange.com/docs/questions-timeline) |
| [featured_questions](https://www.npmjs.com/package/stack-exchange#featured-questions) | Get all questions on the site with active bounties. | [questions/featured](https://api.stackexchange.com/docs/featured-questions) |
| [no-answer-questions](https://www.npmjs.com/package/stack-exchange#no-answer-questions) | Get all questions on the site with no answers. | [questions/no-answers](https://api.stackexchange.com/docs/no-answer-questions) |
| [unanswered_questions](https://www.npmjs.com/package/stack-exchange#unanswered-questions) | Get all questions the site considers unanswered. | [questions/unanswered](https://api.stackexchange.com/docs/unanswered-questions) |
| [unanswered_questions_my_tags](https://www.npmjs.com/package/stack-exchange#unanswered-questions-my-tags) | Get questions the site considers unanswered within a user's favorite or interesting tags. **auth required**. | [questions/unanswered/my-tags](https://api.stackexchange.com/docs/unanswered-questions-my-tags) |
| [question_flag_options](https://www.npmjs.com/package/stack-exchange#question-flag-options) | Returns valid flag options for the given question. **auth** required. | [questions/{id}/flags/options](https://api.stackexchange.com/docs/question-flag-options) |
| [question_close_options](https://www.npmjs.com/package/stack-exchange#question-close-options) | Returns valid flag options which are also close reasons for the given question. **auth required.**  | [questions/{id}/close/options](https://api.stackexchange.com/docs/question-close-options) |
| [comments_on_questions](https://www.npmjs.com/package/stack-exchange#comments-on-questions) | Get the comments on the questions identified by a set of ids. This endpoint required access_token and key in options. | [questions/{ids}/comments](https://api.stackexchange.com/docs/comments-on-questions) |

* [Answers section](https://www.npmjs.com/package/stack-exchange#answers-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [answers](https://www.npmjs.com/package/stack-exchange#answers) | Get all answers on the site. | [answers](https://api.stackexchange.com/docs/answers) |
| [answers_by_ids](https://www.npmjs.com/package/stack-exchange#answers_by_ids) | Get answers identified by a set of ids. | [answers/{ids}](https://api.stackexchange.com/docs/answers-by-ids) |
| [accept_answer](https://www.npmjs.com/package/stack-exchange#accept_answer) | Casts an accept vote on the given answer. **auth required** | [answers/{id}/accept](https://api.stackexchange.com/docs/accept-answer) |
| [comments_on_answers](https://www.npmjs.com/package/stack-exchange#comments_on_answers) | Undoes an accept vote on the given answer. **auth required** | [answers/{id}/accept/undo](https://api.stackexchange.com/docs/undo-accept-answer) |
| [undo_accept_answer](https://www.npmjs.com/package/stack-exchange#undo_accept_answer) | Get comments on the answers identified by a set of ids. | [answers/{ids}/comments](https://api.stackexchange.com/docs/comments-on-answers) |


* [Badges section](https://www.npmjs.com/package/stack-exchange#badges-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [badges](https://www.npmjs.com/package/stack-exchange#badges) | Get all badges on the site, in alphabetical order. | [badges](https://api.stackexchange.com/docs/badges) |
| [badges_by_id](https://www.npmjs.com/package/stack-exchange#badges_by_id) | Get the badges identified by ids. | [badges/{ids}](https://api.stackexchange.com/docs/badges-by-ids) |
| [badges_by_name](https://www.npmjs.com/package/stack-exchange#badges_by_name) | Get all non-tagged-based badges in alphabetical order. | [badges/name](https://api.stackexchange.com/docs/badges-by-name) |
| [badge_recipients](https://www.npmjs.com/package/stack-exchange#badge_recipients) | Get badges recently awarded on the site. | [badges/recipients](https://api.stackexchange.com/docs/badge-recipients)  |
| [badge_recipients_by_id](https://www.npmjs.com/package/stack-exchange#badge_recipients_by_id) | Get the recent recipients of the given badges. | [badges/{ids}/recipients](https://api.stackexchange.com/docs/badge-recipients-by-ids)  |
| [badge_by_tags](https://www.npmjs.com/package/stack-exchange#badge_by_tags) | Get all tagged-based badges in alphabetical order. | [badges/tags](https://api.stackexchange.com/docs/badges-by-tag)  |


* [Tags section](https://www.npmjs.com/package/stack-exchange#badges-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [tags](https://www.npmjs.com/package/stack-exchange#tags) | Get the tags on the site. | [tags](https://api.stackexchange.com/docs/tags) |
| [tags_by_name](https://www.npmjs.com/package/stack-exchange#tags-by-name) | Get tags on the site by their names. | [tags/{tags}/info](https://api.stackexchange.com/docs/tags-by-name) |
| [moderator_only_tags](https://www.npmjs.com/package/stack-exchange#moderator-only-tags) | Get the tags on the site that only moderators can use. | [tags/moderator-only](https://api.stackexchange.com/docs/moderator-only-tags) |
| [require_tags](https://www.npmjs.com/package/stack-exchange#require-tags) | Get the tags on the site that fulfill required tag constraints. | [tags/required](https://api.stackexchange.com/docs/required-tags) |
| [tag_synonyms](https://www.npmjs.com/package/stack-exchange#tag-synonyms) | Get all the tag synonyms on the site. | [tags/synonyms](https://api.stackexchange.com/docs/tag-synonyms) |
| [faqs_by_tags](https://www.npmjs.com/package/stack-exchange#faqs-by-tags) | Get frequently asked questions in a set of tags. | [tags/{tags}/faq](https://api.stackexchange.com/docs/faqs-by-tags) |
| [related_tags](https://www.npmjs.com/package/stack-exchange#related-tags) | Get related tags, based on common tag pairings. | [tags/{tags}/related](https://api.stackexchange.com/docs/related-tags) |
| [synonyms_by_tags](https://www.npmjs.com/package/stack-exchange#synonyms-by-tags) | Get the synonyms for a specific set of tags. | [tags/{tags}/synonyms](https://api.stackexchange.com/docs/synonyms-by-tags) |
| [top_answerers_on_tags](https://www.npmjs.com/package/stack-exchange#top-answerers-on-tags) | Get the top answer posters in a specific tag, either in the last month or for all time.  | [tags/{tag}/top-answerers/{period}](https://api.stackexchange.com/docs/top-answerers-on-tags) |
| [top_askers_on_tags](https://www.npmjs.com/package/stack-exchange#top-askers-on-tags) | Get the top question askers in a specific tag, either in the last month or for all time.  | [tags/{tag}/top-askers/{period}](https://api.stackexchange.com/docs/top-askers-on-tags) |
| [wikis_by_tags](https://www.npmjs.com/package/stack-exchange#wikis-by-tags) | Get the wiki entries for a set of tags. | [tags/{tags}/wikis](https://api.stackexchange.com/docs/wikis-by-tags) |

* [Comments section](https://www.npmjs.com/package/stack-exchange#comments-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [comments](https://www.npmjs.com/package/stack-exchange#comments) | Get all comments on the site. | [comments](https://api.stackexchange.com/docs/comments) |
| [comments_by_ids](https://www.npmjs.com/package/stack-exchange#comments_by_ids) | Get comments identified by a set of ids. | [comments/{ids}](https://api.stackexchange.com/docs/comments-by-ids) |
| [delete_comment](https://www.npmjs.com/package/stack-exchange#delete_comment) | Delete a comment identified by its id. **auth required** | [comments/{id}/delete](https://api.stackexchange.com/docs/delete-comment) |
| [edit_comment](https://www.npmjs.com/package/stack-exchange#edit_comment) | Edit a comment identified by its id. **auth required** | [comments/{id}/edit](https://api.stackexchange.com/docs/edit-comment) |
| [create_comment_flag](https://www.npmjs.com/package/stack-exchange#create_comment_flag) | Casts a flag on the given comment. **auth required** | [comments/{id}/flags/add](https://api.stackexchange.com/docs/create-comment-flag) |
| [comment_flag_options](https://www.npmjs.com/package/stack-exchange#comment_flag_options) | Returns valid flag options for the given comment. **auth required** | [comments/{id}/flags/options](https://api.stackexchange.com/docs/comment-flag-options) |
| [upvote_comment](https://www.npmjs.com/package/stack-exchange#upvote_comment) | Casts an upvote on the given comment. **auth required** | [comments/{id}/upvote](https://api.stackexchange.com/docs/upvote-comment) |
| [undo_upvote_comment](https://www.npmjs.com/package/stack-exchange#undo_upvote_comment) | Undoes an upvote on the given comment. **auth required** | [comments/{id}/upvote/undo](https://api.stackexchange.com/docs/undo-upvote-comment) |


* [Posts section](https://www.npmjs.com/package/stack-exchange#posts-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [posts](https://www.npmjs.com/package/stack-exchange#posts) | Get all posts (questions and answers) in the system. | [posts](https://api.stackexchange.com/docs/posts) |
| [posts_by_ids](https://www.npmjs.com/package/stack-exchange#posts_by_ids) | Get all posts identified by a set of ids. Useful for when the type of post (question or answer) is not known. | [posts/{ids}](https://api.stackexchange.com/docs/posts-by-ids) |
| [comments_on_posts](https://www.npmjs.com/package/stack-exchange#comments_on_posts) | Get comments on the posts (question or answer) identified by a set of ids. | [posts/{ids}/comments](https://api.stackexchange.com/docs/comments-on-posts) |
| [create_comment](https://www.npmjs.com/package/stack-exchange#create_comment) | Create a new comment on the post identified by id. **auth required**  | [posts/{id}/comments/add](https://api.stackexchange.com/docs/create-comment) |
| [render_comment](https://www.npmjs.com/package/stack-exchange#render_comment) | Renders a hypothetical comment on the given post. | [posts/{id}/comments/render](https://api.stackexchange.com/docs/render-comment) |
| [revisions_by_ids](https://www.npmjs.com/package/stack-exchange#revisions_by_ids) | Get revisions on the set of posts in ids. | [posts/{ids}/revisions](https://api.stackexchange.com/docs/revisions-by-ids) |
| [posts_on_suggested_edits](https://www.npmjs.com/package/stack-exchange#posts_on_suggested_edits) | Get suggested edits on the set of posts in ids. | [posts/{ids}/suggested-edits](https://api.stackexchange.com/docs/posts-on-suggested-edits) |

* [Search section](https://www.npmjs.com/package/stack-exchange#search-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [search](https://www.npmjs.com/package/stack-exchange#search) | Search the site for questions meeting certain criteria. | [search](https://api.stackexchange.com/docs/search) |
| [advanced_search](https://www.npmjs.com/package/stack-exchange#advanced_search) | Search the site for questions using most of the on-site search options. | [search/advanced](https://api.stackexchange.com/docs/advanced-search) |
| [similar](https://www.npmjs.com/package/stack-exchange#similar) | Search the site based on similarity to a title. | [similar](https://api.stackexchange.com/docs/similar) |
| [excerpt_search](https://www.npmjs.com/package/stack-exchange#excerpt_search) | Searches a site. | [search/excerpts](https://api.stackexchange.com/docs/excerpt-search) |

* [Suggested Edits section](https://www.npmjs.com/package/stack-exchange#users-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [suggested_edits](https://www.npmjs.com/package/stack-exchange#suggested_edits) | Get all the suggested edits on the site. | [suggested-edits](https://api.stackexchange.com/docs/suggested-edits) |
| [suggested_edits_by_ids](https://www.npmjs.com/package/stack-exchange#suggested_edits_by_ids) | Get the suggested edits identified by a set of ids. | [suggested-edits/{ids}](https://api.stackexchange.com/docs/suggested-edits-by-ids) |

* [Network section](https://www.npmjs.com/package/stack-exchange#network-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [invalidate_access_tokens](https://www.npmjs.com/package/stack-exchange#invalidate_access_tokens) | Allows an application to dispose of access_tokens when it is done with them. | [access-tokens/{accessTokens}/invalidate](https://api.stackexchange.com/docs/invalidate-access-tokens) |
| [read_access_tokens](https://www.npmjs.com/package/stack-exchange#read_access_tokens) | Allows an application to inspect access_tokens it has, useful for debugging. | [access-tokens/{accessTokens}](https://api.stackexchange.com/docs/read-access-tokens) |
| [application_de_authenticate](https://www.npmjs.com/package/stack-exchange#application_de_authenticate) | Allows an application to de-authorize itself for a set of users. | [apps/{accessTokens}/de-authenticate](https://api.stackexchange.com/docs/application-de-authenticate) |
| [errors](https://www.npmjs.com/package/stack-exchange#errors-1) | Get descriptions of all the errors that the API could return. | [errors](https://api.stackexchange.com/docs/errors) |
| [simulate_errors](https://www.npmjs.com/package/stack-exchange#simulate_errors) | Simulate an API error for testing purposes.  | [errors/{id}](https://api.stackexchange.com/docs/simulate-error) |
| [create_filter](https://www.npmjs.com/package/stack-exchange#create_filter) | Create a new [filter](https://api.stackexchange.com/docs/filters). | [filters/create](https://api.stackexchange.com/docs/create-filter) |
| [read_filter](https://www.npmjs.com/package/stack-exchange#read_filter) | Decode a set of filters, useful for debugging purposes. | [filters/{filters}](https://api.stackexchange.com/docs/read-filter) |
| [Inbox](https://www.npmjs.com/package/stack-exchange#inbox-1) | Get a user's inbox, outside of the context of a site. **auth required** | [inbox](https://api.stackexchange.com/docs/inbox) |
| [inbox_unread](https://www.npmjs.com/package/stack-exchange#inbox_unread) | Get the unread items in a user's inbox, outside of the context of a site. **auth required** | [inbox/unread](https://api.stackexchange.com/docs/inbox-unread) |
| [notifications](https://www.npmjs.com/package/stack-exchange#notifications-1) | Get a user's notifications, outside of the context of a site. **auth required** | [notifications](https://api.stackexchange.com/docs/notifications) |
| [unread_notifications](https://www.npmjs.com/package/stack-exchange#unread_notifications) | Get a user's unread notifications, outside of the context of a site. **auth required** | [notifications/unread](https://api.stackexchange.com/docs/unread-notifications) |
| [sites](https://www.npmjs.com/package/stack-exchange#sites-1) | Get all the sites in the Stack Exchange network. | [sites](https://api.stackexchange.com/docs/sites) |

* [Info section](https://www.npmjs.com/package/stack-exchange#info-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [info](https://www.npmjs.com/package/stack-exchange#info) | Get information about the entire site. | [info](https://api.stackexchange.com/docs/info) |

* [Privilages section](https://www.npmjs.com/package/stack-exchange#privilages-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [privilages](https://www.npmjs.com/package/stack-exchange#info) | Get all the privileges available on the site. | [privileges](https://api.stackexchange.com/docs/privileges) |

    
* [Revisions section](https://www.npmjs.com/package/stack-exchange#revisions-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [revisions](https://www.npmjs.com/package/stack-exchange#revisions) | Get all revisions identified by a set of ids. | [revisions/{ids}](https://api.stackexchange.com/docs/revisions-by-guids) |


* [Events section](https://www.npmjs.com/package/stack-exchange#events-section)

| Endpoints | Description | See in StackExchange    |
|-------------|------|--------------------|
| [events](https://www.npmjs.com/package/stack-exchange#events) | Get recent events that have occurred on the site. Effectively a stream of new users and content. **auth required** | [events](https://api.stackexchange.com/docs/events) |
     












