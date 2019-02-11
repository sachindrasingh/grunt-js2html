/*
 * grunt-js2html
 * https://github.com/sacsingh1/js2html
 *
 * Copyright (c) 2019 Sachindra Singh
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('js2html', 'The best Grunt plugin ever.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({

        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            f.src.forEach(function(filePath) {
                console.log("possessing file", filePath);
                var content = grunt.file.read(filePath);
                var htmlContent = content.replace(/\\n"[ ]{1,1000}\+/gm, '');
                htmlContent = htmlContent.replace(/\\"/gm, '"');
                htmlContent = htmlContent.replace(/\n[ ]{0,1000}"/gm, '');
                htmlContent = htmlContent.replace(/angular\.module\((.*?)\)/gm, '');
                htmlContent = htmlContent.replace(/\.run\(\[(.*?),(.*?)function[ ]{0,1000}/gm, '');
                htmlContent = htmlContent.replace(/\(\$templateCache\)[ ]{0,10}\{[ ]{0,1000}/g, '');
                htmlContent = htmlContent.replace(/[  \n]\$templateCache\.put\((.*?),/gm, '');
                htmlContent = htmlContent.replace("\");", '').replace("}]);", "");
                grunt.file.write(filePath + ".html", htmlContent);
                grunt.log.writeln('File "' + filePath + '.html" created.');
            })
            // console.log("\n\n+++", JSON.stringify(f.src), "\n\n" + JSON.stringify(f));
        });
    });

};