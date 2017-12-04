# stack-exchange

<!-- [![npm version](https://badge.fury.io/js/ape-cricket.svg)](http://apecricket.herokuapp.com/documentation#) -->

The [stack-exchange](https://api.stackexchange.com/docs) is a simple npm module that utilizes request and the StackOverflow API.

## Installation
Installation is done using the npm install command:
```js
$ npm install stack-exchange
```

## Quick Start


You can make 300 requests without a key per day, with a key you can make 10,000 requests. To generate key visit [here](https://api.stackexchange.com/docs/authentication). The module exposes following endpoints of stackexchange api:


* [Questions section](https://github.com/KarthikGangadhar/stack-exchange#questions-section)
    * [questions](https://github.com/KarthikGangadhar/stack-exchange#questions)
    * [quetions_by_id](https://github.com/KarthikGangadhar/stack-exchange#questions-by-ids)
    * [answers_on_questions](https://github.com/KarthikGangadhar/stack-exchange#answers-on-questions)
    * [render_answers](https://github.com/KarthikGangadhar/stack-exchange#render-answers)
    * [linked_questions](https://github.com/KarthikGangadhar/stack-exchange#linked-questions)
    * [related_questions](https://github.com/KarthikGangadhar/stack-exchange#related-questions) 
    * [questions_timeline](https://github.com/KarthikGangadhar/stack-exchange#questions-timeline)
    * [featured_questions](https://github.com/KarthikGangadhar/stack-exchange#featured-questions)
    * [no-answer-questions](https://github.com/KarthikGangadhar/stack-exchange#no-answer-questions)
    * [unanswered_questions](https://github.com/KarthikGangadhar/stack-exchange#unanswered-questions)
    * [unanswered_questions_my_tags](https://github.com/KarthikGangadhar/stack-exchange#unanswered-questions-my-tags)
    * [question_flag_options](https://github.com/KarthikGangadhar/stack-exchange#question-flag-options)
    * [question_close_options](https://github.com/KarthikGangadhar/stack-exchange#question-close-options)
    * [comments_on_questions](https://github.com/KarthikGangadhar/stack-exchange#comments-on-questions)

* [Badges section](https://github.com/KarthikGangadhar/stack-exchange#badges-section)
    * [badges](https://github.com/KarthikGangadhar/stack-exchange#questions) 
    * [badges_by_id](https://github.com/KarthikGangadhar/stack-exchange#badges_by_id)
    * [badges_by_name](https://github.com/KarthikGangadhar/stack-exchange#badges_by_name)
    * [badge_recipients](https://github.com/KarthikGangadhar/stack-exchange#badge_recipients)
    * [badge_recipients_by_id](https://github.com/KarthikGangadhar/stack-exchange#badge_recipients_by_id)
    * [badge_by_tags](https://github.com/KarthikGangadhar/stack-exchange#badge_by_tags)

* [Badges section](https://github.com/KarthikGangadhar/stack-exchange#badges-section)

| Endpoints | Description | StackExchange              |
|-------------|------|--------------------|
| [badges](https://github.com/KarthikGangadhar/stack-exchange#questions) | Get all badges on the site, in alphabetical order. | [badges](https://api.stackexchange.com/docs/badges) |
| [badges_by_id](https://github.com/KarthikGangadhar/stack-exchange#badges_by_id) | Get the badges identified by ids. | [badges/{ids}](https://api.stackexchange.com/docs/badges-by-ids) |
| [badges_by_name](https://github.com/KarthikGangadhar/stack-exchange#badges_by_name) | Get all non-tagged-based badges in alphabetical order. | [badges/name](https://api.stackexchange.com/docs/badges-by-name) |
| [badge_recipients](https://github.com/KarthikGangadhar/stack-exchange#badge_recipients) | Get badges recently awarded on the site. | [badges/recipients](https://api.stackexchange.com/docs/badge-recipients)  |
| [badge_recipients_by_id](https://github.com/KarthikGangadhar/stack-exchange#badge_recipients_by_id) | Get the recent recipients of the given badges. | [badges/{ids}/recipients](https://api.stackexchange.com/docs/badge-recipients-by-ids)  |
| [badge_by_tags](https://github.com/KarthikGangadhar/stack-exchange#badge_by_tags) | Get all tagged-based badges in alphabetical order. | [badges/tags](https://api.stackexchange.com/docs/badges-by-tag)  |


* [Tags section](https://github.com/KarthikGangadhar/stack-exchange#badges-section)
    * [tags](https://github.com/KarthikGangadhar/stack-exchange#tags)
    * [tags_by_name](https://github.com/KarthikGangadhar/stack-exchange#tags-by-name)
    * [moderator_only_tags](https://github.com/KarthikGangadhar/stack-exchange#moderator-only-tags)
    * [require_tags](https://github.com/KarthikGangadhar/stack-exchange#require-tags)
    * [tag_synonyms](https://github.com/KarthikGangadhar/stack-exchange#tag-synonyms)
    * [faqs_by_tags](https://github.com/KarthikGangadhar/stack-exchange#faqs-by-tags)
    * [related_tags](https://github.com/KarthikGangadhar/stack-exchange#related-tags)
    * [synonyms_by_tags](https://github.com/KarthikGangadhar/stack-exchange#synonyms-by-tags)
    * [top_answerers_on_tags](https://github.com/KarthikGangadhar/stack-exchange#top-answerers-on-tags)
    * [top_askers_on_tags](https://github.com/KarthikGangadhar/stack-exchange#top-askers-on-tags)
    * [wikis_by_tags](https://github.com/KarthikGangadhar/stack-exchange#wikis-by-tags)     

* [Info section](https://github.com/KarthikGangadhar/stack-exchange#info-section)
    * [info](https://github.com/KarthikGangadhar/stack-exchange#info)

* [Privilages section](https://github.com/KarthikGangadhar/stack-exchange#privilages-section)
    * [privilages](https://github.com/KarthikGangadhar/stack-exchange#info) 
    
* [Revisions section](https://github.com/KarthikGangadhar/stack-exchange#revisions-section)
    * [revisions](https://github.com/KarthikGangadhar/stack-exchange#revisions)

* [Events section](https://github.com/KarthikGangadhar/stack-exchange#events-section)
    * [events](https://github.com/KarthikGangadhar/stack-exchange#events)


To use above mentioned endpoints you need to create their respective sections objects as follows:

```javascript
const stackexchange  = require("stack-exchange");


const stack_questions = new stackexchange.questions(); //for questions sections endpoints
const stack_badges = new stackexchange.badges(); //for badges sections endpoints
const stack_info = new stackexchange.info(); //for info sections endpoints
const stack_privilages = new stackexchange.privilages(); //for privilages sections endpoints
const stack_revisions = new stackexchange.revisions(); //for revisions sections endpoints
const stack_events = new stackexchange.events(); //for events sections endpoints
const stack_tags = new stackexchange.tags(); //for tags sections endpoints

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

// creating questions object
stack_questions = new stackexchange.questions();
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

## badges section

```js
let badges_options = {
    "site": "stackoverflow",
    "key": "U4DMV*8nvpm3EOpvf69Rxw(("
}

// creating badges object
stack_badges = new stackexchange.badges();

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


// creating tags object
stack_tags = new stackexchange.tags();
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




## info section
```js
let info_options = {
    "site": "stackoverflow"
}

// creating info object
stack_info = new stackexchange.info();
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

// creating privilages object
stack_privilages = new stackexchange.privilages();
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

// creating privilages object
stack_revisions = new stackexchange.revisions();
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

// creating events object
stack_events = new stackexchange.events();
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










