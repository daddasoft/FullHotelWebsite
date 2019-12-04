const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const buble = require('gulp-buble');
const autoPrefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const cssMinify = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const zip = require('gulp-zip');
const livereload = require('gulp-livereload');

// Define Files That Will Be Compiled
const originFiles = {
  cssFiles: 'sass/*.scss',
  jsFiles: 'js/*.js',
  htmlFiles: 'pug/*.pug',
  imgPath: 'images/**'
};
// Define The Finales Files
const distFiles = {
  cssDist: '../dist/css',
  jsDist: '../dist/js',
  htmlDist: '../dist',
  imgPath: '../dist/img'
};

async function cssTask() {
  return src(originFiles.cssFiles)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer())
    .pipe(cssMinify())
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(dest(distFiles.cssDist))
    .pipe(livereload());
}
async function pugTask() {
  return src(originFiles.htmlFiles)
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest(distFiles.htmlDist))
    .pipe(livereload());
}

async function jsTask() {
  return src(originFiles.jsFiles)
    .pipe(concat('main.js'))
    .pipe(buble())
    .pipe(minify())
    .pipe(dest(distFiles.jsDist))
    .pipe(livereload());
}
async function imgTask() {
  return src(originFiles.imgPath)
    .pipe(newer(distFiles.imgPath))
    .pipe(
      imagemin({
        optimizationLevel: 10
      })
    )
    .pipe(dest(distFiles.imgPath))
    .pipe(livereload());
}

async function compressZip() {
  return src('./../dist/**/*.*')
    .pipe(zip('mySite.zip'))
    .pipe(dest('./../'));
}

async function watchTask() {
  require('./server');
  livereload.listen();
  watch(
    [
      originFiles.cssFiles,
      originFiles.htmlFiles,
      originFiles.jsFiles,
      originFiles.imgPath
    ],
    series(parallel(cssTask, pugTask, jsTask, imgTask))
  );
  livereload();
}
exports.default = series(
  parallel(cssTask, pugTask, jsTask, imgTask, compressZip, watchTask)
);
