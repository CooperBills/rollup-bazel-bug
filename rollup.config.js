module.exports = {
  onwarn: (warning) => {
    if (warning.code === "UNRESOLVED_IMPORT") {
      // We don't want any unresloved imports in our bundle
      // if there is, it either means stuff is broken or there's a missing dependency
      throw new Error(warning.message);
    }
  },
};
