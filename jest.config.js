module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!([@]?react-native.*|react-navigation|@react-navigation/.*|@react-navigation/native/.*))',
  ],
  fakeTimers: {
    enableGlobally: true,
  },
};
