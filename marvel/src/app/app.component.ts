import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel';

  constructor(private ngZone: NgZone) {

  }

  navigate(path: string, event: Event): void {
    this.ngZone.runOutsideAngular(() => {
      history.pushState(null, null, path);
      event.stopPropagation();
      event.preventDefault();
    });
  }


}
