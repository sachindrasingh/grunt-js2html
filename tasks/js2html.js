/*
 * grunt-js2html
 * https://github.com/sachindrasingh/grunt-js2html
 *
 * Copyright (c) 2019 Sachindra Singh
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var vm = require('vm'),
        pretty = require('pretty'), 
        fileCount = 0;
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('js2html', 'The best Grunt plugin ever.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            angularModule: false,
            beautify: true
        });

        // Iterate over all specified file groups.
        console.log("possessing task...");
        this.files.forEach(function(f) {
            f.src.forEach(function(filePath) {
                var content = grunt.file.read(filePath);
                if (!validateContent(content)) {
                    return;
                }
                var htmlContent = content.replace(/\\n"[ ]{1,1000}\+/gm, '').replace(/\\"/gm, '"').replace(/\n[ ]{0,1000}"/gm, '');
                if (options.angularModule) {
                    htmlContent = htmlContent.replace(/angular\.module\((.*?)\)/gm, '')
                        .replace(/\.run\(\[(.*?),(.*?)function[ ]{0,1000}/gm, '')
                        .replace(/\(\$templateCache\)[ ]{0,10}\{[ ]{0,1000}/g, '')
                        .replace(/[  \n]\$templateCache\.put\((.*?),/gm, '')
                        .replace("\");", '').replace("}]);", "");
                }
                if (options.beautify) {
                    htmlContent = pretty(htmlContent);
                }
                filePath = getDefualtDist(filePath);
                grunt.file.write(filePath + ".html", htmlContent);
                grunt.log.writeln('HTML file "' + filePath + '.html" created.');
                fileCount++;
            })
        });
        grunt.log.writeln('\nTask complete. Total ' + fileCount + ' html file created.');
    });

    function validateContent(content) {
        var script;
        try {
            script = new vm.Script(content);
            return true;
        } catch (error) {
            grunt.log.writeln(error);
            return false;
        }
    }

    function getDefualtDist(filePath) {
        filePath = filePath.split('/');
        filePath.push(filePath[filePath.length - 1]);
        filePath[filePath.length - 2] = "html";
        return filePath.join('/');
    }

};