const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps'); //mapeia para os arquivos reais, util para saber em que linha algo está no arquivo scss pois o dev tools aponta inicialmente para o css normal
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
                .pipe(imagemin())
                .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
                .pipe(uglify())
                .pipe(obfuscate())
                .pipe(gulp.dest('./build/scripts'));
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
                .pipe(sourcemaps.init())
                .pipe(sass({
                    outputStyle: 'compressed'
                }))
                .pipe(sourcemaps.write('./maps'))
                .pipe(gulp.dest('./build/styles'));
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial: false }, gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false }, gulp.series(comprimeJavaScript));
}

// function funcaoPadrao(callback){
//     setTimeout(function() {
//         console.log("Executando via Gulp");
//         callback();        
//     }, 2000); // 2 argumentos, a função e depois o tempo de timeout. usado para melhor demonstrar o paralelo
// }

// function dizOi(callback){
//     setTimeout(function() {
//         console.log("Olá Gulp");
//         dizTchau();
//         callback();
//     }, 1000);
// }

// function dizTchau(){ // func privada, impossivel chamar se nao exportar ou for dentro de outra func
//     console.log("Tchau Gulp");
// }

//exports.default = gulp.parallel(funcaoPadrao, dizOi); // npm run gulp
// exports.oi = dizOi; // npm run gulp oi
// exports.sass = compilaSass;
// exports.javascript = comprimeJavaScript;
// exports.images = comprimeImagens;
// da para usar gulp.parallel ou gulp.series pra rodar as tarefas paralelamente ou em serie

// npm install --global gulp-cli
// npm install --save-dev gulp-sass
// npm install --save-dev sass
// npm install --save-dev gulp-source-maps
// npm install --save-dev gulp-uglify
// npm install --save-dev gulp-obfuscate
// npm install --save-dev gulp-imagemin@7.1.0
// npm install --save-dev gulp-notify