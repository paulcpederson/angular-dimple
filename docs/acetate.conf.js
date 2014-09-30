function config(acetate) {
  acetate.global('config', {
    environment: 'dev',
  });

  acetate.layout('**/*', 'layouts/_layout:content');

}

module.exports = config;