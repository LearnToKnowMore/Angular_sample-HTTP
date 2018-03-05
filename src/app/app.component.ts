import { Component, OnInit } from '@angular/core';

import { SaveserversToDbService } from './saveservers-to-db.service';

@Component({
  selector: 'ngHttp-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'ngHttp';
  serversList = [];

  constructor(private serverService: SaveserversToDbService) { }

  appName = this.serverService.getAppName();

  ngOnInit() {
    this.serversList = [
      {
        name: 'Test Server',
        id: this.generateId(),
      },
    ];
  }

  onAddServer(serverName: HTMLInputElement) {
    if (serverName.value.trim() != '') {
      this.serversList.push({
        name: serverName.value.toUpperCase(),
        id: this.generateId()
      });
    }
    serverName.value = '';
  }

  private generateId() {
    return Math.round(Math.random() * 100000);
  }

  onSaveServer() {
    this.serverService.saveServersToDB(this.serversList).subscribe(
      (response) => { console.log(response) },
      (error) => { console.error(error); }
    )
  }

  onGetServers() {
    this.serverService.getServersFromDB().subscribe(
      (servers: any[]) => this.serversList = servers,
      (error) => { console.error(error); }
    )
  }
}
