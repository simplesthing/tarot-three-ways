({
	appDir: '../',
	
	baseUrl: 'js',
	
	dir: '../toolkit',
	//Comment out the optimize line if you want
    //the code minified by UglifyJS
    //optimize: "none",
    
    paths: {
    	'jquery':'require-jquery'
    },
    
    modules: [
              //Optimize the application files. Exclude jQuery since it is
              //included already in require-jquery.js
              {
                  name: "main",
                  exclude: [
                  			 'jquery',
      					         'strophe/strophe',
			           				 'ember/load'
                         ]
              }
          ]
})