/**
 * bower-deps-map
 * https://github.com/ek/bower-deps-map
 *
 * Copyright (c) 2014 Eric Knudtson
 * Licensed under the MIT license.
 */

var exec = require('child_process').exec, child;
var deps = {};
var dotStrings = [];

var searchStringInArray = function(str, strArray) {
  for (var j=0; j<strArray.length; j++) {
    if (strArray[j].match(str)) return j;
  }
  return -1;
}

var cleanString = function(str) {
  str = str.replace('.','_','gim');
  str = str.replace('-','_','gim');
  str = str.replace('-','_','gim');
  str = str.replace('-','_','gim');
  str = str.replace('-','_','gim');
  return str;
}

var mapDeps = function(depsJSON,parent) {
  var dep, newString, count = 0;
  for(dep in depsJSON['dependencies']) {
    if(depsJSON['dependencies'].hasOwnProperty(dep)) {
      parent = cleanString(parent.toString());
      depstring = cleanString(dep.toString());
      parent = cleanString(parent.toString());
      depstring = cleanString(dep.toString());
      parent = cleanString(parent.toString());
      depstring = cleanString(dep.toString());
      if(parent=='') {
        newString = depstring + ";";
      } else {
        newString = parent + " -> " + depstring + ";";
      }
      if(searchStringInArray(newString, dotStrings) <= 0) { 
        dotStrings.push(newString);
      }
      if(depsJSON['dependencies'][dep].hasOwnProperty('dependencies')) {
        mapDeps(depsJSON['dependencies'][dep],dep);
      }
    }
  }
}

var writeDepsDotFile = function(deps) {
  dotStrings.push('bower dependencies {');
  mapDeps(deps,'');
  dotStrings.push('} ');
  var fs = require('fs');
  fs.writeFile("deps.dot", dotStrings.join('\n'), function(err) {
      if(err) {
          console.log('sorry, error writing file: ' + err);
      } else {
          console.log("The file was saved!");
      }
  });
}

var listDeps = function() {
  child = exec('bower list --map --json',
    function (error, stdout, stderr) {
      if(error !== null) {
        console.log('exec error: ' + error);
      }
      if(stderr !== null) {
        console.log('stderr: ' + stderr);
      }
      if(stdout !== null){
        console.log('stdout: ' + stdout);
        deps = stdout;
        writeDepsDotFile(deps);
      }
    }
  );
}

module.exports = {
  
  /**
   * Draw a dot file for graphviz
   *
   * @param  {String} html
   * @return {String}
   */
  draw: function() {
    listDeps();
    return true;
  }
  
};