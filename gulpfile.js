/*

1ª
//Criar tarefa teste, para ver se o Gulp Fnciona corretamente
function testeGulp(cb){
    console.log("Ola Mundo");
    // CallBack, deve ser passado como argumento da tarefa
    cb();
}
exports.default = testeGulp;

// node .\node_modules\gulp\bin\gulp.js, Para não ter que usar este comando, colocamos o gulp no script do package.json e assim o gulp vai rodar normalmente

*/

// 2ª Configurando o sass no gulp - Exportar plugins Instalados
const gulp =require('gulp');
const sass =require ('gulp-sass') (require('sass'));
const imagemin = require('gulp-imagemin');

// Recuperar os arquivos
function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))//Comprime os arquivos
    .pipe(gulp.dest('./dist/css'));
}

// Reeduzir imagens
function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())//É uma função
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);


// Criar função para observar o Gulp
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}