import { ICategorySize } from './category-size';
import { ICategoryColor } from './category-color';

export interface ICategory {
    Id: number;
    CategoryColors: ICategoryColor[];
    CategorySizes: ICategorySize[];
    Code: string;
    Name: string;
}
