import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-use-web-component';

  ngAfterViewInit() {
    const el = document.querySelector('element-widget')!;

    el.addEventListener('clickEvent', (event: any) =>
      console.log('OUTPUT: ', event.detail)
    );
  }

  clickBtn($event: any) {
    console.log($event);
  }
}
