# stack-exchange

<!-- [![npm version](https://badge.fury.io/js/ape-cricket.svg)](http://apecricket.herokuapp.com/documentation#) -->

The [stack-exchange](https://api.stackexchange.com/docs) is a simple npm module that utilizes request and the StackOverflow API.

## Installation
Installation is done using the npm install command:
```js
$ npm install stack-exchange
```

## Quick Start


You can make 300 requests without a key per day, with a key you can make 10,000 requests. To generate key visit [here](https://api.stackexchange.com/docs/authentication)

```javascript
var stackexchange  = require("stack-exchange");
```


## To use questions endpoints

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
stack_questions.questions( options , (response) => {
    // response will be json 
    console.log(response);
 });
``` 

#### questions_by_ids
 ```js
 let ids = "47559184"
 stack_questions.questions_by_ids(ids, options , (response) => {
    console.log(response);
 });
```  
