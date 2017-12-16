import { IAddress } from './address';
import { IClient } from './client';
import { IOrderProduct } from './order-product';
import { IShipmentType } from './shipment-type';

export interface IOrder {
    Id: number;
    Address: IAddress;
    AddressId: number;
    Client: IClient;
    ClientId: number;
    OrderProducts: IOrderProduct[];
    RealizationDays: number;
    RegistrationTime: Date;
    ShipmentType: IShipmentType;
    ShipmentTypeId: number;
}
