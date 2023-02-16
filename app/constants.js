const Constants = {
  settings: {
    appName: 'ListenEAR FM',
    appUrl: 'https://listen-ear-fm.vercel.app/', // without trailing slash!
    nodeIntegrationEnabled: false, // keep disabled unless you run into ipcRenderer-specific troubles
    enableDevMenu: false, // enable for dev-builds only!
    userAgentPostfixWindows: 'WindowsApp', // custom user agent postfixes to distinguish traffic in Analytics
    userAgentPostfixOSX: 'MacOSXApp',
    userAgentPostfixLinux: 'LinuxApp',
    showLoader: false, // show src/loader.html window until your app is fully loaded - may increase loading time
    themeColor: '#F44336',
    windowBackgroundColor: '#FFFFFF', // set to false to disable
    titleBarStyle: 'default', // use 'hidden' or 'hiddenInset' for Frameless windows
    frame: true, // set to false for Frameless windows
    useTouchBar: false, // edit in app/touch_bar.js
    usePhotonKitShell: false, // macOS: loads src/shellMacOS.html with PhotonKit instead of the appUrl.
    useWindowsShell: false,   // Win: use custom shell from src/shellWIndows.html
    useLinuxShell: false,     // all 3 require 'nodeIntegrationEnabled: true'.
  },
  mainWindow: {
    width: 1220,
    height: 860,
    largeWidth: 1220,
    largeHeight: 860,
  },
  strings: {
    open: 'Ouvrir',
  },
  menu: {
    app: {
      about: 'A propos de',
      quit: 'Quitter',
      hide: 'Cacher',
      hideothers: 'Cacher les autres',
      unhide: 'Tout afficher',
    },
    file: {
      label: 'Fichier',
    },
    view: {
      label: 'Voir',
      fullscreen: 'Plein écran'
    },
    window: {
      label: 'Fenêtre',
      minimize: 'Minifier',
      close: 'Fermer',
      front: 'Tous au premier plan',
    },
    help: {
      label: 'Aide',
      contact: 'Contact'
    },
  },
  touchBar: {
    label: 'Leasing',
    car: 'Kfz Rechner',
    movables: 'Mobilien Rechner',
    inquiry: 'Angebot anfordern',
  }
};

module.exports = Constants;
