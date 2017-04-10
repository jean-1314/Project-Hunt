var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({browsers: [
      "last 2 versions"
    ]})
  ]))

  .pipe(gulp.dest("css"))
  .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "."
  });

  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("symbols", function() {
  return gulp.src("img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("img"));
});

gulp.task("svgimgs", function(){
  return gulp.src("img/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("svg-imgs.svg"))
    .pipe(gulp.dest("img"));
});

gulp.task("sedona", function(){
  return gulp.src("img/text-sedona.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sedona.svg"))
    .pipe(gulp.dest("img"));
});
