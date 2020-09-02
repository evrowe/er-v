module.exports = function(cfg) {
  let env = process.env.ELEVENTY_ENV

  cfg.setTemplateFormats([
    'css',
    'html',
  ])
}
