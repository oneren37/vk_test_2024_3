import {productDTO} from "../../entities";
import {ICartItem} from "./types";

export const fetchCartProducts = async (): Promise<ICartItem[]> => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => {
            if (res.status === 200) return res
            throw new Error()
        })
        .then(res => res.json())
        .then(res => productDTO(res))
        .then(res => res.map(product => ({...product, count: 1})))
}