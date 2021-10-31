import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame } from 'electron';
import * as remote from '@electron/remote';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');

      // If you want to use a NodeJS 3rd party deps in Renderer process (like @electron/remote),
      // it must be declared in dependencies of both package.json (in root and app folders)
      // If you want to use remote object in renderer process, please set enableRemoteModule to true in main.ts
      this.remote = window.require('@electron/remote');
    }
  }

  async execute(command: string, args: Array<string>, workingDir: string = '', streamer: (val) => void) {
    return new Promise((resolve, reject) => {
      const child = this.childProcess.spawn(command, args, {
        cwd: workingDir,
        shell: true,
      });

      // You can also use a variable to save the output for when the script closes later
      child.on('error', (error) => {
        // console.log(error);
        streamer(error);
      });

      child.stdout.setEncoding('utf8');
      child.stdout.on('data', (data) => {
        //Here is the output
        // data = data.toString();
        // console.log(typeof data, data);
        // if (data) {
        //   data = data
        //     .toString()
        //     .split('\n')
        //     .map((l) => {
        //       console.log(l);

        //       return l.split('       ');
        //     });
        // }
        streamer(data);
      });

      child.stderr.setEncoding('utf8');
      child.stderr.on('data', (data) => {
        // Return some data to the renderer process with the mainprocess-response ID
        // mainWindow.webContents.send('mainprocess-response', data);

        //Here is the output from the command
        // console.log(typeof data, data);
        streamer(data);
      });

      child.on('close', (code) => {
        //Here you can get the exit code of the script
        switch (code) {
          case 0:
            // dialog.showMessageBox({
            //   title: 'Title',
            //   type: 'info',
            //   message: 'End process.\r\n',
            // });
            // console.log(code);
            resolve(code);
            break;
          default:
            reject(code);
        }
      });
      // if (typeof callback === 'function') callback();
    });
  }
}
