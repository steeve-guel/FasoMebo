import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NotificiationService } from '../../_service/notificiation.service';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  private service = inject(NotificiationService);
  notification = this.service.currentNotification;

  hide() {
    this.service.hide();
  }
}
