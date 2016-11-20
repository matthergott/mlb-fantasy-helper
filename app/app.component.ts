import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<h1 class="title">MLB Fantasy Helper</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/player" routerLinkActive="active">Display Player</a>
    </nav>
    <router-outlet></router-outlet>
`
})
export class AppComponent { }
