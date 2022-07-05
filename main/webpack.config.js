const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        '@angular/core': { eager: true, singleton: true, requiredVersion: '12.2.8' },
        '@angular/common': { eager: true, singleton: true, requiredVersion: '12.2.8' },
        '@angular/router': { eager: true, singleton: true, requiredVersion: '12.2.8' }
      },
    })
  ]
};
