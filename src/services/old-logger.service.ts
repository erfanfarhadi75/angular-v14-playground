import { Injectable } from '@angular/core';

@Injectable()
export class OldLoggerService {
  constructor() {
    console.log('OldLoggerService constructor ');
  }

  public log(message: string) {
    console.log('this is a fucking test in OldLoggerService ', message);
  }
}
