$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 1,
  "name": "test sample login",
  "description": "",
  "id": "test-sample-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "test login with valid input",
  "description": "",
  "id": "test-sample-login;test-login-with-valid-input",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "i open webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i give valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i should see the home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-sample-login;test-login-with-valid-input;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "test-sample-login;test-login-with-valid-input;;1"
    },
    {
      "cells": [
        "test",
        "test@123"
      ],
      "line": 12,
      "id": "test-sample-login;test-login-with-valid-input;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "test login with valid input",
  "description": "",
  "id": "test-sample-login;test-login-with-valid-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "i open webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i give valid test and test@123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "beh.i_open_webpage()"
});
formatter.result({
  "duration": 63057081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 22
    }
  ],
  "location": "beh.i_give_valid_test_and_test(String,String)"
});
formatter.result({
  "duration": 1052296,
  "status": "passed"
});
formatter.match({
  "location": "beh.i_should_see_the_home_page()"
});
formatter.result({
  "duration": 7698,
  "status": "passed"
});
});