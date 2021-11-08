import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame } from 'electron';
import * as remote from '@electron/remote';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import { Observable } from 'rxjs';

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

  execute(command: string, args: Array<string>, workingDir: string = '') {
    return new Observable(subscriber => {
      const child = this.childProcess.spawn(command, args, {
        cwd: workingDir,
        shell: true,
      });

      let error = '';
      let data = '';

      // You can also use a variable to save the output for when the script closes later
      child.on('error', (e) => {
        error += e;
      });

      child.stdout.setEncoding('utf8');
      child.stdout.on('data', (d) => {
        data += d;
      });

      child.stderr.setEncoding('utf8');
      child.stderr.on('data', (errD) => {
        // Return some data to the renderer process with the mainprocess-response ID
        // mainWindow.webContents.send('mainprocess-response', data);

        //Here is the output from the command
        // console.log(typeof data, data);
        error += errD;
      });

      child.on('close', (code) => {
        //Here you can get the exit code of the script
        switch (code) {
          case 0:
            subscriber.next({code, data});
            break;
          default:
            subscriber.error({code, error});
        }
        subscriber.complete();
      });
    });
    // if (typeof callback === 'function') callback();
  }
}
