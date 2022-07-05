const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "http://localhost:4700/",
        uniqueName: "mfe_child2",
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            // For remotes (please adjust)
            name: "mfe_child2",
            library: { type: "var", name: "mfe_child2" },
            filename: "remoteEntry.js",
            exposes: {
                Child2Module: "./src/app/child2/child2.module.ts",
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
                "@angular/router": {
                    eager: true,
                    singleton: true,
                    requiredVersion: "12.2.8",
                },
            },
        }),
    ],
};
