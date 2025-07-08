module.exports = function(eleventyConfig) {
  // Watch changes in these folders
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("./src/style/style.css");

  return {
    dir: {
      input: "src",          // Source folder
      includes: "_includes", // Layouts/partials
      data: "_data",         // Global data
      output: "_site"        // Build output
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
