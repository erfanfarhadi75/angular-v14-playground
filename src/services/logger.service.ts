import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {
    console.log('LoggerService constructor ');
  }

  public log() {
    console.log('this is a fucking test in LoggerService ');
  }
}
