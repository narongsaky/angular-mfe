const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "http://localhost:4600/",
        uniqueName: "mfe_child1",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            // For remotes (please adjust)
            name: "mfe_child1",
            library: { type: 'var', name: 'mfe_child1' },
            filename: "remoteEntry.js",
            exposes: {
              Child1Module: "./src/app/child1/child1.module.ts",
            },

            shared: {
                "@angular/core": {
                    eager: true,
                    singleton: true,
                    requiredVersion: "12.2.8",
                },
                "@angular/common": {
                    eager: true,
                    singleton: true,
                    requiredVersion: "12.2.8",
                },
                '@angular/router': { eager: true, singleton: true, requiredVersion: '12.2.8' }
            },
        }),
    ],
};
