module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("exif", require("./src/exif.js"));
};