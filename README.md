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

* [Badges section](https://github.com/KarthikGangadhar/stack-exchange#badges-section)
    * [badges](https://github.com/KarthikGangadhar/stack-exchange#questions)
    * [badges_by_id](https://github.com/KarthikGangadhar/stack-exchange#badges_by_id)
    * [badges_by_name](https://github.com/KarthikGangadhar/stack-exchange#badges_by_name)
    * [badge_recipients](https://github.com/KarthikGangadhar/stack-exchange#badge_recipients)
    * [badge_recipients_by_id](https://github.com/KarthikGangadhar/stack-exchange#badge_recipients_by_id)
    * [badge_by_tags](https://github.com/KarthikGangadhar/stack-exchange#badge_by_tags)

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
 ```js
 // using questions endpoint 
stack_questions.questions(options , (response) => {
    // response will be json 
    console.log(response);
 });
``` 
#### questions by ids
 ```js
 ids = "47559184"
 // using questions_by_ids endpoint 
 stack_questions.questions_by_ids(ids , options , (response) => {
    // response will be json 
    console.log(response);
 });
``` 


#### answers on questions
 ```js
 id = "47596027"
 // using answers_on_questions endpoint 
 stack_questions.answers_on_questions(id, options , (response) => {
    // response will be json 
    console.log(response);
 });
``` 

#### render answers

 This is a post endpoints, the options section looks like this, both fields are required.
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
 ```js
 // id of the question
 let id = "1884724";
 
 // using answers_on_questions endpoint 
 stack_questions.linked_questions(id, options , (response) => {
    console.log(response);
 });
 
``` 

#### related questions
 ```js
 // id of the question
 let id = "37878662";
 
 // using related_questions endpoint 
 stack_questions.related_questions(id, options , (response) => {
        console.log(response);
 });
 
``` 


#### questions timeline
 ```js
 // id of the question
 let id = "37878662";
 
 // using questions_timeline endpoint 
stack_questions.questions_timeline(id, options, (response) => {
    console.log(response);
});
 
```

#### featured questions
 ```js
 
 // using featured_questions endpoint 
stack_questions.featured_questions(options, (response) => {
      //will return featured questions
    console.log(response);
});

```

#### no answer questions
 ```js
 
 // using no_answer_questions endpoint 
stack_questions.no_answer_questions( options , (response) => {
   // will return no-answer questions
    console.log(response);
 });
```



#### unanswered questions
 ```js
 
 // using unanswered_questions endpoint 
stack_questions.unanswered_questions( options , (response) => {
    //returns unanswered questions details
    console.log(response);
 });
```



#### unanswered questions my tags

This endpoint required access_token and key in options. 
 ```js

 // using unanswered_questions_my_tags endpoint 
stack_questions.unanswered_questions_my_tags( options , (response) => {
    console.log(response);
 });
```

#### question flag options

This endpoint required access_token and key in options. 
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

This endpoint required access_token and key in options. 
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

This endpoint required access_token and key in options. 
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
 ```js
 // using badges endpoint 
stack_badges.badges(badges_options, (response) => {
    // response will be json     
    console.log(response);
});

```

#### badges_by_id
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



## info section

```js
let info_options = {
    "site": "stackoverflow"
}

// creating info object
stack_info = new stackexchange.info();
```

#### info
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
 ```js
 // using info endpoint 
stack_events.events(event_options, (response) => {
    // response will be json 
    console.log(response);
});
```










