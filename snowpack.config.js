module.exports = {
  mount: {
    src: '/',
    // 'src/assets': {url: "/assets", static: true, resolve: false}
  },
  plugins: [
    '@snowpack/plugin-typescript',
    // 'snowpack-plugin-less',
    '@snowpack/plugin-webpack',
  ],
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  optimize: {
    bundle: true,
    minify: true,
  },
};