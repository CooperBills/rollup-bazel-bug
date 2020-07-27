# rollup-bazel-bug
Reproduction of rollup_bundle bug in rules nodejs 2.0.1

run `bazel build :bundle` - build will fail due to unresolved module.

you can still make the build succeed by commenting out the throw in `rollup.config.js`, but then the bundle outputted by rollup will treat HelloWorld as an external module and will leave it as an import in the bundle.

There's a hack-fix plugin in `rollup.config.js` (currently commented out). However, this fix references bazel sandbox folders.
