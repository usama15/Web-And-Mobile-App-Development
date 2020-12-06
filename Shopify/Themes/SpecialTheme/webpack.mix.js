const mix = require('laravel-mix');

mix.sass('src/scss/app.scss', 'assets')
    .js('src/js/app.js', 'assets')
//    .setPublicPath('./assets');