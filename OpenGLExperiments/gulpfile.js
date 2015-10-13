/// <binding BeforeBuild='before-build' />
var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass-compile", function () {
    gulp.src("./www/css/index.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"));
});

gulp.task("watch-sass", function () {
    console.log("watch sass");
    gulp.watch("./www/css/*.scss", ["sass-compile"]);
});


gulp.task("before-build", ["sass-compile"], function () {
    console.log("before build");

    // Add anything you want to do before the build here
});