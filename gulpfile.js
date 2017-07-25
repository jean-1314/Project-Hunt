var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var compress = require("gulp-minify");
var del = require("del");

var server = require("browser-sync").create();

var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var imagemin = require("gulp-imagemin");

var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({browsers: [
      "last 2 versions"
    ]}),
    mqpacker({
      sort: true
    })
  ]))
  .pipe(gulp.dest("build/css"))
  .pipe(minify())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("build/css"))
});

gulp.task("html:copy", function(){
  return gulp.src("*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("html:update", ["html:copy"], function(done) {
  server.reload();
  done();
});

gulp.task("serve", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html", ["html:update"]);
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

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
})

gulp.task("compress", function() {
  gulp.src("build/js/*.js")
    .pipe(compress({
        ext:{
            min:".min.js"
        },
    }))
    .pipe(gulp.dest("build/js"))
});

gulp.task("copy", function() {
  return gulp.src([
    "gllacy/**",
    "sedona/**",
    "startex/**",
    "docs/**",
    "fonts/**",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", function(fn) {
  run("clean", "copy", "style", "images", "compress", fn);
})

