import gulp from "gulp";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import cleanCSS from "gulp-clean-css";
import imagemin from "gulp-imagemin";
const presets = ["@babel/preset-react"];

gulp.task("babel", (done) => {
  gulp
    .src(["src/**/*.js", "src/**/*.jsx"])
    .pipe(babel({ presets }))
    .pipe(gulp.dest("dist"));
  done();
});

gulp.task("uglify", (done) => {
  gulp.src("src/**/*.js").pipe(uglify()).pipe(gulp.dest("dist"));
  done();
});

gulp.task("minify-css", (done) => {
  gulp.src("src/**/*.css").pipe(cleanCSS()).pipe(gulp.dest("dist"));
  done();
});

gulp.task("imagemin", (done) => {
  gulp.src("src/assets/**/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
  done();
});

gulp.task("default", gulp.series("babel", "uglify", "minify-css", "imagemin"));
