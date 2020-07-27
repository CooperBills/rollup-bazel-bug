module.exports = {
  onwarn: (warning) => {
    if (warning.code === "UNRESOLVED_IMPORT") {
      // We don't want any unresloved imports in our bundle
      // if there is, it either means stuff is broken or there's a missing dependency
      throw new Error(warning.message);
    }
  },
  // The bundle is properly generated with this resolve plugin hack:
//   plugins: [
//     {
//       resolveId(source, importer) {
//         const workspace = process.env.BAZEL_WORKSPACE;
//         if (workspace && source.startsWith(workspace + "/")) {
//           const importPath = source.substring(workspace.length + 1);
//           const k8Folder = "k8-fastbuild"; // might be different on your system, e.g. "k8-opt"
//           return { id: `bazel-out/${k8Folder}/bin/${importPath}.mjs`, external: false };
//         }
//         return null;
//       },
//     },
//   ],
};
