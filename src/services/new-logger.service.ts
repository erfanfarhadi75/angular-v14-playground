import { Injectable } from '@angular/core';

@Injectable()
export class NewLoggerService {
  constructor() {
    console.log('NewLoggerService constructor ');
  }

  public log(message: string) {
    console.log('this is a fucking test in NewLoggerService ', message);
  }
}
