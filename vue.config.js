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
        fileAssociations: [
          {
            ext: "vvproj",
            name: "VOICEVOX Project file",
            role: "Editor",
          },
        ],
        extraFiles: [
          "README_SOFTWARE.txt",
          "README_LIBRARY.txt",
          { from: ".env.production", to: ".env" },
          {
            from: "../yukarin_tts_software_engine/run.dist/",
            to: "",
          },
        ],
        // electron-builder installer
        productName: "VOICEVOX",
        appId: "jp.hiroshiba.voicevox",
        copyright: "Hiroshiba Kazuyuki",
        compression: "maximum",
        afterAllArtifactBuild: path.resolve(
          __dirname,
          "build",
          "splitResources.js"
        ),
        win: {
          icon: "public/icon.png",
          target: [
            {
              target: "nsis-web",
              arch: ["x64"],
            },
          ],
        },
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
