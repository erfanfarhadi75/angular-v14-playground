import { Injectable } from '@angular/core';
import { UserInterface } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {
  user: UserInterface = {
    userName: 'Erfan',
    address: 'South Hemmat',
    city: 'Tehran',
    postalCode: '86189125874',
  };
  constructor() {
    console.log('UserService constructor ');
  }
}
