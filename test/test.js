'use strict';
/*
 * Test runner
 *
 */
// require all unit test_cases
// const questions = require('./questions_test');
// const badges = require('./badges_test');
// const tags = require('./tags_test');
// const events = require('./events_test');
// const revisions = require('./revisions_test');
// const privileges = require('./privileges_test');
// const info = require('./info_tests');
// const suggested_edits = require('./suggested_edits_tests');
// const search = require('./search_tests');
const me = require('./me_tests');

// Application logic for the test runner
// const testCases = Object.assign({}, questions, badges, tags);

const _app = {};
_app.tests = {};

// Holder of all tests
// _app.tests['unit'] = testCases;
// _app.tests['questions'] = questions;
// _app.tests['badges'] = badges;
// _app.tests['tags'] = tags;
// _app.tests['events'] = events;
// _app.tests['revisions'] = revisions;
// _app.tests['privileges'] = privileges;
// _app.tests['info'] = info;
// _app.tests['suggested_edits'] = suggested_edits;
// _app.tests['search'] = search;
_app.tests['me'] = me;

// Count all the tests
_app.countTests = () => {
    let counter = 0;
    for (let key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {
            let subTests = _app.tests[key];
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    counter++;
                }
            }
        }
    }
    return counter;
};

// Run all the tests, collecting the errors and successes
_app.runTests = () => {
    let errors = [];
    let successes = 0;
    let limit = _app.countTests();
    let counter = 0;
    let counterTime = 2000;
    for (let key in _app.tests) {
        if (_app.tests.hasOwnProperty(key)) {
            let subTests = _app.tests[key];
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    (() => {
                        let tmpTestName = testName;
                        let testValue = subTests[testName];
                        // Call the test
                        try {
                            setTimeout(function () {
                                testValue(() => {
                                    // If it calls back without throwing, then it succeeded, so log it in green
                                    console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                                    counter++;
                                    successes++;
                                    if (counter === limit) {
                                        _app.produceTestReport(limit, successes, errors);
                                    }
                                });
                            }, counterTime);
                            counterTime += 7000;
                        } catch (e) {
                            // If it throws, then it failed, so capture the error thrown and log it in red
                            errors.push({
                                'name': testName,
                                'error': e
                            });
                            console.log('\x1b[31m%s\x1b[0m', tmpTestName);
                            counter++;
                            if (counter === limit) {
                                _app.produceTestReport(limit, successes, errors);
                            }
                        }
                    })();
                }
            }
        }
    }
};

// Product a test outcome report
_app.produceTestReport = (limit, successes, errors) => {
    console.log('');
    console.log('--------BEGIN TEST REPORT--------');
    console.log('');
    console.log('Total Tests: ', limit);
    console.log('Pass: ', successes);
    console.log('Fail: ', errors.length);
    console.log('');

    // If there are errors, print them in detail
    if (errors.length > 0) {
        console.log('--------BEGIN ERROR DETAILS--------');
        console.log('');
        errors.forEach((testError) => {
            console.log('\x1b[31m%s\x1b[0m', testError.name);
            console.log(testError.error);
            console.log('');
        });
        console.log('');
        console.log('--------END ERROR DETAILS--------');
    }


    console.log('');
    console.log('--------END TEST REPORT--------');

};

// Run the tests
_app.runTests();
