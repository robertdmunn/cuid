
module.exports = function(grunt) {
	var path = require('path');

	require('load-grunt-config')(grunt, {
	    configPath: path.join(process.cwd(), 'grunt'),
	    init: true,
	    data: {
	    	 pkg: require('./package.json')
	    },
	    loadGruntTasks: {
	    	pattern: ['grunt-*'],
	        scope: 'devDependencies'
	    },
	    postProcess: function(config) {}
	});
	grunt.registerTask("default", ["concat"]);
};
