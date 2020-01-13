<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/logo-shadow.png" alt="Logo" width="150" height="150" />
</p>
<h1 align="center">Cordova-Nuxt</h1>

## ➤ Getting Started

1. Create `cordova.client.js` in `plugins` folder

2. Reference `cordova.client.js` at `nuxt.config.js`

3. Add `cordova.js` script at `nuxt.config.js`

4. Add `publicPath` under build section at `nuxt.config.js`

5. Create `servermiddleware` folder and create `assets.js` inside it

6. Set `route` to 'hash' at `nuxt.config.js`

7. Create cordova app at root directory by running the following script

`cordova create 'foldername' 'com.test.id' 'appname'`

8. Add Android or IOS platform under cordova directory

`cordova platform add android/ios`

9. Copy script to package.json

```json
{
  "scripts": {
    "build-spa": "nuxt build --spa",
    "run-android": "cd cordova && cordova run android"
  }
}
```

10. `npm run build-spa`

11. Replace all beginning `/` from `dist` folder
*    `"/nuxtfiles/"` to `"nuxtfiles/"`
*    `"/assets/"` to `"nuxtfiles/"` 
*    `"href="/"` to `"href=""`
*    `"href:"/"` to `"href:""` 
*    `"src="/"` to `"src=""`
*    `"src:"/"` to `"src:""`

12. copy all files inside `dist` folder to `cordova/www` folder

13. `npm run run-android`

ENJOY!
