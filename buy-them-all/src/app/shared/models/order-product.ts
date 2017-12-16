import { ICategoryColor } from './category-color';
import { ICategorySize } from './category-size';
import { IProduct } from './product';

export interface IOrderProduct {
    Id: number;
    Count: number;
    OrderId: number;
    Product: IProduct;
    ProductId: number;
    ProductColor: ICategoryColor;
    ProductColorId: number;
    ProductSize: ICategorySize;
    ProductSizeId: number;
}
