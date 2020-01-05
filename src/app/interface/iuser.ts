import {Iaddress} from './iaddress';
import {Icompany} from './icompany';
export interface IUser {
     id: number,
     name: string,
     username: string,
     email: string,     
     phone: string,
     website: string,
     address : Iaddress,
     company : Icompany
}
