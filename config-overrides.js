module.exports = function override(config, env) {
    // ...add all the existing configuration
    // and then add the following:

    config.resolve.fallback = {
        path: require.resolve('path-browserify'),
        fs: require.resolve('browserify-fs'),
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
    };

    // Add .wasm file handling
    config.module.rules.push({
        test: /\.wasm$/,
        type: 'javascript/auto',
    });

    return config;
}
