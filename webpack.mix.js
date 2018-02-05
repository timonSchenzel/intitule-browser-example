let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        symlinks: false
    },
});

mix.js('app.js', 'dist/');
