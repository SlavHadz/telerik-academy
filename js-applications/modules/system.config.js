SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
     'plugin-babel': 
     './plugin-babel.js',
     'systemjs-babel-build': 
     './systemjs-babel-browser.js',
     // app start script
     'main': './main.js'
    },

    packages: {
        '/': {
            defaultExtention: 'js'
        }
    }
   });