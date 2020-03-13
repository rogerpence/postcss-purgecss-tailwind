const fs = require('fs');

const clearDirectory = (targetFolder) => {
    const regex = /tailwind.[0-9a-zA-Z]*\.css$/
    fs.readdirSync(targetFolder)
      .filter(f => regex.test(f))
      .map(f => fs.unlinkSync(targetFolder + f))
}

const productionPlugins= [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
        content: [
            './apps/**/*.html'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    require('cssnano')({
        preset: 'default',
    }),
    require('postcss-hash')({
        algorithm: 'md5',
        trim: 24,
        manifest: './manifest.css.json'
    }),
];

const devPlugins= [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
];


const productionExports = {
    plugins: productionPlugins
}

const devExports = {
    plugins: devPlugins
}

if (process.env.NODE_ENV === 'production') {
    clearDirectory('./resources/css/');
    /*
    const fpath = './resources/css/';
    const regex = /tailwind.[0-9a-zA-Z]*\.css$/
    fs.readdirSync(fpath)
      .filter(f => regex.test(f))
      .map(f => fs.unlinkSync(fpath + f))
    */



    module.exports = productionExports;
}
else {
    module.exports = devExports;
}





/*
module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),

        process.env.NODE_ENV === 'production' &&
        require('@fullhuman/postcss-purgecss')({
            content: [
                './public/*.html'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
}

*/

