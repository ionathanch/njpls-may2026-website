module.exports = function (eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.addPassthroughCopy({ "assets": "may2026" })
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/**/*.css'
  });
};
