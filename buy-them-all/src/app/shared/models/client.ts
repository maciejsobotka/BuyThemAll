import { IAddress } from './address';
import { IOrder } from './order';

export interface IClient {
    Id: number;
    Addresses: IAddress[];
    Email: string;
    Name: string;
    Orders: IOrder[];
    Phone: string;
    Surname: string;
}
