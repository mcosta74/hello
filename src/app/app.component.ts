import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'hello-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = `Clarity Design Demo v${environment.VERSION}`;
}
