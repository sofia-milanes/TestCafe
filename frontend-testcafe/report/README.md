# testcafe-reporter-test-report
[![Build Status](https://travis-ci.org/sofia-milanes/testcafe-reporter-test-report.svg)](https://travis-ci.org/sofia-milanes/testcafe-reporter-test-report)

This is the **test-report** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/sofia-milanes/testcafe-reporter-test-report/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-test-report
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter test-report
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('test-report') // <-
    .run();
```

## Author
sofia.milanes 
