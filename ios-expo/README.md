# GRC iPhone preview (Expo)

This is an Expo/React Native **WebView shell** for the existing GRC site, not a native rewrite. Changes deployed to https://alessaib-dot.github.io/GRC/ appear in the app after reload (subject to caching). It requires internet and the existing site's browser-local data is not a shared database.

## Windows setup
1. Install Node.js LTS.
2. Download this repository, open a terminal in `ios-expo`.
3. Run `npm install` then `npx expo start --tunnel` (tunnel may require an extra dependency and an Expo account).
4. Install **Expo Go** on the iPhone, scan the QR code and open the project.

For a local network, use `npx expo start` and ensure phone and PC are on the same Wi-Fi. This runs inside Expo Go and is **not** a standalone signed iOS application. App Store publication or standalone distribution requires separate Apple signing/distribution arrangements. Validate dependencies with `npx expo install --fix` if Expo reports SDK mismatches.
