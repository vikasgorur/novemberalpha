module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);
  
  grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {
                     loose: "all"
                  }]
               ]
            },
            files: {
               "./public/novemberalpha.js": ["./src/novemberalpha.js"]
            }
         }
      },
      babel: {
        options: {
          presets: ["es2015"],
          sourceMap: true
        },
        dist: {
          files: {
            "dist/app.js": "src/app.js"
          }
        }
      },
      watch: {
         scripts: {
            files: ["./src/*.js"],
            tasks: ["browserify", "babel"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);
};