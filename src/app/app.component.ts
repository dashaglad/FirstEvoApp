import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  notiflix_alert(type: string){
    switch (type){
      case 'success':
        Notify.success('success');
        break;
      case 'warning':
        Notify.warning('warning');
        break;
      case 'failure':
        Notify.failure('failure');
        break;
      case 'info':
        Notify.info('info');
        break;
    }
  }
}
