module.exports = {
  pagination: {
    data: "collections.blog",
    size: 20,
    alias: "posts",
    reverse: true, // Newest first
    addAllPagesToCollections: true
  },
  permalink: function(data) {
    if (data.pagination.pageNumber === 0) {
      return "/blog/";
    }
    return `/blog/page-${data.pagination.pageNumber + 1}/`;
  },
  layout: "blog-list.njk",
  eleventyComputed: {
    title: "Blog"
  }
};
