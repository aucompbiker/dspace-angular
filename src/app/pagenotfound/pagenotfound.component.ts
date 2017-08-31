import { ServerResponseService } from '../shared/server-response.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ds-pagenotfound',
  styleUrls: ['./pagenotfound.component.scss'],
  templateUrl: './pagenotfound.component.html',
  providers: [ServerResponseService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {

  data: any = {};
  constructor(responseService: ServerResponseService) {
    responseService.setNotFound();
  }
}
