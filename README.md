# Expo Router Tailwind web Example

Use [`expo-router`](https://expo.github.io/router) with [`tailwind`](https://tailwindcss.com) in Metro web apps.

This approach does nothing on native as native does not currently support CSS.

## How it works

> This project is Expo SDK +49

1. The Tailwind CLI is started in the `metro.config.js` file, this is where file watching and updating happens.
2. The `index.js` optionally imports the evaluated CSS file from tailwind CLI. This ensures that HMR updates are applied, and the CSS is bundled.
3. A `global.css` file adds the requisite utility classes for Tailwind to work.
4. The `metro.config.js` has experimental Expo CSS enabled.
5. The `app.json` has `web.bundler` set to `metro`.

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Request for Comments](https://github.com/expo/router/discussions/1)
