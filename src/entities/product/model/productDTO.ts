import {IProduct} from "../types";

export function productDTO(data:(IProduct & {[key: string]: unknown})[]): IProduct[] {
    return data.map(el => ({
        id: el.id.toString(),
        title: el.title,
        price: el.price,
        description: el.description,
        image: el.image
    }))
}