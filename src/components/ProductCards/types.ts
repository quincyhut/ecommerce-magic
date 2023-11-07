export interface IProductCards {
    _id: string | any;
    images: string[];
    title: string;
    price: number;
    quantity: number;
    sizes?: string[];
    colors?: string[];
    prevPrice?: number;
    reactCount?: number;
    userIds?: string[];
}