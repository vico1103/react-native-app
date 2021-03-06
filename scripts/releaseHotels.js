// @flow

const path = require('path');
const child_process = require('child_process');

const exec = (command, options) =>
  child_process.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const hotelPath = path.join(__dirname, '..', 'app', 'hotels');
const buildPath = path.join(__dirname, '..', '.build');

const getBuildCommand = platform => {
  return `yarn react-native bundle --dev=false --verbose --platform=${platform} --entry-file=${hotelPath}/index.js --bundle-output=${buildPath}/${platform}/hotels.${platform}.jsbundle --assets-dest ${buildPath}/${platform}`;
};

// Build JS bundles for iOS and Android and generate static assets.
exec(`mkdir -pv ${buildPath}/ios && mkdir -pv ${buildPath}/android`);
exec(getBuildCommand('ios'));
exec(getBuildCommand('android'));

// Copy additional static assets.
exec('cp -Rv assets/fonts .build/ios/assets/fonts');
exec('cp -Rv assets/fonts .build/android/fonts');

// Publish on NPM.
exec('npm login');
exec('npm version patch', {
  cwd: buildPath,
});
exec('npm publish --access=public', {
  cwd: buildPath,
});
