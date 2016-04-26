//var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
/*
elixir(function(mix) {
    mix.sass('app.scss');
});
*/
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', function() {
    browserSync({
        server: {
            baseDir: "./"       //サーバとなるrootディレクトリ
        }
    });
	//ファイルの監視
	gulp.watch("./",	['reload']);
	gulp.watch("./js",	['reload']);
	gulp.watch("./img",	['reload']);
	gulp.watch("./css",	['reload']);
});

//ブラウザリロード処理
gulp.task('reload', function () {
    browserSync.reload();
});
