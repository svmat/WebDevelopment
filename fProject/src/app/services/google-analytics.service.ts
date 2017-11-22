import { Injectable } from '@angular/core';
declare let gtag: Function;

@Injectable()
export class GoogleAnalyticsService {

  constructor() { }

  sendEvent(eventName: string,
                   eventCategory: string,
                   eventLabel: string = null) {
    gtag('event', eventName, {
      'event_category': eventCategory,
      'event_label': eventLabel
    });

  }

}
