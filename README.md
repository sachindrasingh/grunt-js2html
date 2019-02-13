# grunt-js2html

> Grunt Plugin for Convert Angular JS Templates to HTML Source.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-js2html --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-js2html');
```

## The "js2html" task

### Overview
In your project's Gruntfile, add a section named `js2html` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  js2html: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.angularModule
Type: `Boolean `
Default value: `false`

A boolean value that is used to remove `angular.module` from `tpl.js`.

#### options.beautify
Type: `Boolean`
Default value: `true`

A boolean value that is used to beautify HTML source file.

### Usage Examples

#### Default Options
In this example, the default options are used to convert JS Templates files into source HTML without removing `angular.module` from `tpl.js`.

```js
grunt.initConfig({
  js2html: {
    options: {},
    files: {
      src: 'test-files/*.js'
    },
  },
});
```

#### Custom Options
In this example, custom options are used to convert JS Templates files into source HTML which remove `angular.module` and html source will be formatted.

```js
grunt.initConfig({
  js2html: {
    options: {
      angularModule: true,
      beautify: true,
    },
    files: {
      src: 'test-files/*.js'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
version 0.1.0 - Basic plugin to convert `*.tpl.js` files into HTML source. Reverse of [grunt-html2js](https://www.npmjs.com/package/grunt-html2js).
version 0.1.1 - JS file Content validation added for `*.tpl.js`.
version 0.1.2 - angularModule and beautify options added.

## Author

**Sachindra Singh**

* [github/sachindrasingh](https://github.com/sachindrasingh)

## License
Copyright © 2019, [Sachindra Singh](https://github.com/sachindrasingh).
Released under the [MIT License](LICENSE).
