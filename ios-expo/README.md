# GRC iPhone app (Expo Go)

The Expo project targets SDK 58. It is a React Native WebView app showing GRC, not a standalone App Store build.

## Start in GitHub Codespaces (including from an iPhone)

Open a **single** Codespaces terminal, stop any older Expo process, and run these commands **one at a time**:

```sh
cd /workspaces/GRC
 git pull
cd ios-expo
npm install
npx expo install --fix
npx expo start --tunnel --clear
```

Keep the terminal running. Open the resulting `exp://` URL with Expo Go, not in Safari; the tunnel can stop when Codespaces sleeps. If Metro says port 8081 is already in use, stop the old Expo process before starting another. SDK and package compatibility still need to be verified by a real device launch.

The app requires internet because it embeds https://alessaib-dot.github.io/GRC/. Data in the existing web prototype is browser-local, not synchronized with a secure backend.
