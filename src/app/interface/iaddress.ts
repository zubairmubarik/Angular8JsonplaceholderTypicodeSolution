import {Igeo} from './igeo'
export interface Iaddress {
    city:string,
    geo: Igeo,
    street: string,
    suite:string,
    zipcode: string
}
