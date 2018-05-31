import {
  Component,
  OnInit
} from '@angular/core';
import * as _ from 'lodash';

import { ThreadsService } from './../thread/threads.service';
import { MessagesService } from './../message/messages.service';

import { Thread } from './../thread/thread.model';
import { Message } from './../message/message.model';

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
