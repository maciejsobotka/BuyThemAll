import { IVoivodeship } from './voivodeship';

export interface IAddress {
    Id: number;
    AddressLine: string;
    City: string;
    ClientId: number;
    Voivodeship: IVoivodeship;
    VoivodeshipId: number;
    ZipCode: string;

}
