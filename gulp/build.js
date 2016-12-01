var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('build-server-js', function() {
    return gulp.src('src/server.js')
        .pipe(webpack(require('../webpack.server_config.js') ))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build-client-js', function() {
    return gulp.src('src/client.js')
        .pipe(webpack(require('../webpack.client_config.js') ))
        .pipe(gulp.dest('dist/public'));
});

gulp.task("build-views", function() {
   return gulp.src("src/templates/**/*.ejs")
       .pipe(gulp.dest("dist/templates"))
});

