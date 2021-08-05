// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  pluginOptions: {
    electronBuilder: {
      preload: "src/electron/preload.ts",
      builderOptions: {
        extraFiles: [
          "README_SOFTWARE.txt",
          "README_LIBRARY.txt",
          { from: ".env.production", to: ".env" },
          {
            from: "../yukarin_tts_software_engine/run.dist/",
            to: "",
          },
        ],
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "node_modules")],
        },
      },
    },
  },
};
