import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  sendToActive = 0;
  sendToInactive = 0;

  incrementActive() {
    this.sendToActive++;
    console.log('inactive->active: ' + this.sendToActive);
  }

  incrementInctive() {
    this.sendToInactive++;
    console.log('active->inactive : ' + this.sendToInactive);
  }
}
