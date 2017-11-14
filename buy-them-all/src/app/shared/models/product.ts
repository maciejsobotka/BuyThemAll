export interface IProduct {
    Id: number;
    Name: string;
    Price: number;
    IsDiscounted: boolean;
    DiscountPercent: number;
    AvalibilityId: number;
    AvalibilityName: string;
    AvalibilityDescription: string;
    ManufacturerId: number;
    ManufacturerName: string;
    CategoryId: number;
    CategoryName: string;
}
