// Gruntfile.js
module.exports = function(grunt){
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    // Mocha
    mocha: {
      all: {
        src: ['./test/testrunner.html'],
      },
      options: {
        run: true
      }
    },

    test: {
    	
    }

  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('default', ['mocha','test']);

};