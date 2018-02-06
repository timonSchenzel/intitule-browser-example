let mix = require('laravel-mix');
let webpack = require('webpack');

mix.webpackConfig({
    resolve: {
        symlinks: false
    },
    plugins: [
        new webpack.IgnorePlugin(/IntituleNodejs/, /intitule/)
    ]
});

mix.js('app.js', 'dist/');
