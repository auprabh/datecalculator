module.exports = function(grunt) {

  grunt.initConfig({
    
	pkg: grunt.file.readJSON('package.json'),
	
	jshint: {
	  files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
	  options: {
		globals: {
		  console: true,
		  module: true
		}
	  }
	},
	
	watch: {
	  files: ['<%= jshint.files %>'],
	  tasks: ['jshint']
	},
	
	mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', 
          quiet: false, 
          clearRequireCache: false 
        },
        src: ['test/**/*.js']
      }
    }
	
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['jshint', 'mochaTest']);
  grunt.registerTask('default', ['jshint', 'mochaTest']);

};