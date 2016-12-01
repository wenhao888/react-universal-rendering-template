require("./gulp/build");
var gulp = require("gulp");

gulp.task("build",["build-server-js", "build-client-js", "build-views"], function() {
    console.log("build is done");
});

