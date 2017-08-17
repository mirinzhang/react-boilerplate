/**
 * Created by Min on 2017/7/19.
 */
module.exports = {
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js', '.sass', '.scss' ],
        modules: [ 'src', 'node_modules' ],
    },
    resolveLoader: {
        moduleExtensions: [ '-loader' ],
    },
};
