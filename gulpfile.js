System.register(['gulp', './tools/utils'], function(exports_1) {
    "use strict";
    var gulp, utils_1;
    return {
        setters:[
            function (gulp_1) {
                gulp = gulp_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            // --------------
            // Clean (override).
            gulp.task('clean', utils_1.task('clean', 'all'));
            gulp.task('clean.dist', utils_1.task('clean', 'dist'));
            gulp.task('clean.test', utils_1.task('clean', 'test'));
            gulp.task('clean.tmp', utils_1.task('clean', 'tmp'));
            gulp.task('check.versions', utils_1.task('check.versions'));
            // --------------
            // Postinstall.
            gulp.task('postinstall', function (done) {
                return utils_1.runSequence('clean', 'npm', done);
            });
            // --------------
            // Build dev.
            gulp.task('build.dev', function (done) {
                return utils_1.runSequence('clean.dist', 'tslint', 'build.assets.dev', 'build.js.dev', 'build.index', done);
            });
            // --------------
            // Build prod.
            gulp.task('build.prod', function (done) {
                return utils_1.runSequence('clean.dist', 'clean.tmp', 'tslint', 'build.assets.prod', 'build.html_css.prod', 'build.deps', 'build.js.prod', 'build.bundles', 'build.index', done);
            });
            // --------------
            // Watch.
            gulp.task('build.dev.watch', function (done) {
                return utils_1.runSequence('build.dev', 'watch.dev', done);
            });
            gulp.task('build.test.watch', function (done) {
                return utils_1.runSequence('build.test', 'watch.test', done);
            });
            // --------------
            // Test.
            gulp.task('test', function (done) {
                return utils_1.runSequence('clean.test', 'tslint', 'build.test', 'karma.start', done);
            });
            // --------------
            // Serve.
            gulp.task('serve', function (done) {
                return utils_1.runSequence('build.dev', 'server.start', 'watch.serve', done);
            });
        }
    }
});
// --------------
// Docs
// Disabled until https://github.com/sebastian-lenz/typedoc/issues/162 gets resolved
// gulp.task('docs', done =>
//   runSequence('build.docs',
//               'serve.docs',
//               done));
//# sourceMappingURL=gulpfile.js.map