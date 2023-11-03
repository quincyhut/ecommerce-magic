export interface IProductCards {
    size?: string | 'sm' | 'lg';
    images: string[];
    title: string;
    price: number;
    prevPrice?: number;
    reactCount?: number;
    userIds?: string[];
}