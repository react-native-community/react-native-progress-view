module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@react-native-community/progressview': './js',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
