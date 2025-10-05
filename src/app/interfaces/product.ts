export interface Product {
    _id: string;
    image:string;
    title: string;
    description?:string;
    price: number;
    categories?:string;
    isAvailable?: boolean;
     date?: Date;
      
}