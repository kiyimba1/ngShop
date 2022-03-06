import { Injectable } from '@angular/core';


export interface IBroadcastEvent {
  key: EventKeys;
  data?: any;
}

export enum EventKeys{
  ALL = "All-events"
}

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  constructor() { }
}
