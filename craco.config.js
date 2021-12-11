const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
							
							'@primary-color': '#FF330D',
							'@layout-header-background': '#fff',
							'@menu-item-color': '#000',
							'@heading-color': 'rgba(0, 0, 0, 0.85)'
						},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};