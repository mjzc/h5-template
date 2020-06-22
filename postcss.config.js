module.exports = {
    plugins: {
        'postcss-import': {},
        'autoprefixer': {},
        'postcss-pxtorem': {
            rootValue: 75,
            propList: ['*']
        },
        'postcss-preset-env': {},
        'cssnano': {},
    }
}