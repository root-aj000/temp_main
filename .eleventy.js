module.exports = function(eleventyConfig) {





  // Watch changes in these folders
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/style");




// Collections per content type
  eleventyConfig.addCollection("blog", (collection) =>
    collection.getFilteredByGlob("src/blog/*.md")
  );
  eleventyConfig.addCollection("services", (collection) =>
    collection.getFilteredByGlob("src/services/*.md")
  );
  eleventyConfig.addCollection("cases", (collection) =>
    collection.getFilteredByGlob("src/case-studies/*.md")
  );





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
