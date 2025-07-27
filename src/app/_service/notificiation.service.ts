import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificiationService {
  private notification = signal<{
    message: string;
    visible: boolean;
  }>({ message: '', visible: false });

  currentNotification = this.notification.asReadonly();

  constructor() { }

  show(message: string, duration = 5000) {
    this.notification.set({ message, visible: true });

    if (duration > 0) {
      setTimeout(() => this.hide(), duration);
    }
  }

  hide() {
    this.notification.update(prev => ({ ...prev, visible: false }));
  }
}
