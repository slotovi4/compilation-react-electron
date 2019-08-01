import { app, BrowserWindow, ipcMain } from 'electron';
import { handleSquirrelEvent } from './helpers';
import installExtension, {
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS
} from 'electron-devtools-installer';
import * as isDev from 'electron-is-dev';

if (!handleSquirrelEvent(app)) {
    let mainWindow: Electron.BrowserWindow | null = null;
    const url = 'http://localhost:3000';

    const createWindow = async () => {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 800
        });

        mainWindow.setMinimizable(false);
        mainWindow.setMaximizable(false);
        mainWindow.loadURL(url);
        mainWindow.webContents.openDevTools();

        mainWindow.on('closed', () => { mainWindow = null; });

        // Send messages
        mainWindow.webContents.send('cl', '123466');

        // Listen messages
        ipcMain.on('examFinished', () => console.log(1));

        const installReactTools = await installExtension(REACT_DEVELOPER_TOOLS);
        const installReduxTools = await installExtension(REDUX_DEVTOOLS);

        Promise.all([installReactTools, installReduxTools]);

        mainWindow.webContents.on('did-finish-load', () => {
            if (mainWindow) {
                if (!isDev) {
                    // run auto updater
                }
            }
        });

        process.on('uncaughtException', (error) => mainWindow && mainWindow.webContents.send('cl', error));
    };

    app.on('ready', createWindow);

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (mainWindow === null) {
            createWindow();
        }
    });
};
