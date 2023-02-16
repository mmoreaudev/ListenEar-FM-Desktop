const path = require('path');
const electron = require('electron');
const { TouchBar, nativeImage } = electron;
const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar;
const c = require('./constants');

// This module uses `mainWindow.webContents.send` for click events,
// which are used in the PhotonKit Shell.
// If you're not using PhotonKit, use something else here (e.g. mainWindow.loadRelativeUrl).

// create TouchBar
const setTouchBar = function(mainWindow) {
    // create template
    const touchBarTemplate = [
        /*
        new TouchBarLabel({
            label: c.touchBar.label,
        }),
        */
        new TouchBarButton({
            icon: nativeImage.createFromPath(path.join(__dirname, '../src', 'assets', 'touchbar_left.png')),
            click: () => {
                mainWindow.webContents.send(
                    'shell:navigate',
                    'back'
                );
            },
        }),
        new TouchBarButton({
            icon: nativeImage.createFromPath(path.join(__dirname, '../src', 'assets', 'touchbar_right.png')),
            click: () => {
                mainWindow.webContents.send(
                    'shell:navigate',
                    'forward'
                );
            },
        }),
        new TouchBarButton({
            icon: nativeImage.createFromPath(path.join(__dirname, '../src', 'assets', 'touchbar_send.png')),
            click: () => {
                mainWindow.webContents.send(
                    'shell:openExternal',
                    'mailto:contact@mateomoreau.com'
                );
            },
        }),

        new TouchBarSpacer({size: 'flexible'}),
    ];
    // build touchbar from template
    const touchBar = new TouchBar(touchBarTemplate);
    // set touchbar on window
    mainWindow.setTouchBar(touchBar);
}

module.exports = setTouchBar;
