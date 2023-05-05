import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable()
export class EvenBetterLoggerService extends LoggerService {
  constructor(private userService: UserService) {
    console.log('EvenBetterLoggerService constructor ');
    super();
  }

  override log() {
    console.log('this is a fucking test in EvenBetterLoggerService');
  }

  public log2() {
    console.log('this is log2 in EvenBetterLoggerService');
  }
}
