module.exports = {
  // リンタールールセットの適用
  extends: "@cybozu/eslint-config/presets/node-prettier",
  env: {
    // mochaで追加されるグローバル変数をエラーにならないように
    mocha: true,
  },
};
