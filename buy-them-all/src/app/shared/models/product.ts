import { IAvalibility } from './avalibility';
import { ICategory } from './category';
import { IManufacturer } from './manufacturer';

export interface IProduct {
    Avalibility: IAvalibility;
    AvalibilityId: number;
    Category: ICategory;
    CategoryId: number;
    DiscountPercent: number;
    Id: number;
    IsDiscounted: boolean;
    Manufacturer: IManufacturer;
    ManufacturerId: number;
    Name: string;
    Price: number;
}
