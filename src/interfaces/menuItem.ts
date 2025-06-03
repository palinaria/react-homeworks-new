export interface MenuItem {
    id: string;
    meal: string;
    price: number;
    instructions: string;
    img: string;
    category: string;
}

export interface CartProduct extends Omit<MenuItem, 'category'> {
    quantity: number;

}
