/**
 * Abstract mongo document type
 */
export interface AbstractDocument {
    _id?: string;
}

/**
 * Benutzer 
 */
export interface User extends AbstractDocument {
    username: string;
    password?: string;
    roles: string[];
}

export interface Customer extends User {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
}

/**
 * 
 * 
 * @endpoint /api/products
 */
export interface Product extends AbstractDocument {
    type: string;
    name: string;
    description: string;
    imageUrl: string;
    price: { 
        value: number; 
        currency: 'EUR' | 'USD' 
    };
}

/**
 * 
 * @endpoint /api/orders
 */
export interface Order extends AbstractDocument {
    state: 'ordered' | 'cart';
    items: OrderItem[];
    user?: User;
}

/**
 * A configured product within an order
 * 
 */
export interface OrderItem extends AbstractDocument {
    product: Product;
    quantity: number;
    config: any;
}