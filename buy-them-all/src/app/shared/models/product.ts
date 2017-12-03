import { IAvalibility } from './avalibility';
import { ICategory } from './category';
import { IManufacturer } from './manufacturer';
import { IGraphic } from './graphic';
import { ICategoryColor } from './category-color';
import { ICategorySize } from './category-size';

export interface IProduct {
    Avalibility: IAvalibility;
    AvalibilityId: number;
    Category: ICategory;
    CategoryId: number;
    Description: string;
    DiscountPercent: number;
    Graphic: IGraphic;
    GraphicId: number;
    Id: number;
    IsDiscounted: boolean;
    Manufacturer: IManufacturer;
    ManufacturerId: number;
    Name: string;
    Price: number;
    // additional properties
    Color: ICategoryColor;
    Size: ICategorySize;
}
