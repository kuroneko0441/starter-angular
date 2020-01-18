import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { SharedClass } from 'lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public shared: SharedClass = new SharedClass();
}
