import {IProduct} from "../../entities";

export interface ICartItem extends IProduct{
    count: number
}

export interface ICartState {
    products: ICartItem[];
    status: 'idle' | 'loading' | 'failed' | 'ok'
}