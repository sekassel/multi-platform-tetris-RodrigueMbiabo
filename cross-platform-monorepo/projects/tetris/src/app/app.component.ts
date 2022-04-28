import { Component } from '@angular/core'
import { GameEngineLibService } from 'projects/game-engine-lib/src/lib/services/game-engine-lib.service'
import { ElectronService } from './core/services/electron.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "tetris";
  constructor(private electronService: ElectronService) {

    if (electronService.isElectron) {
      console.log("Run in electron");
      console.log("Electron ipcRenderer", this.electronService.ipcRenderer);
      console.log("NodeJS childProcess", this.electronService.childProcess);
    } else {
      console.log("Run in browser");
    }
  }
}