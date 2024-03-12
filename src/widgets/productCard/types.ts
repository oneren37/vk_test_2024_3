import {IProduct} from "../../entities";
import {ReactNode} from "react";

export interface IProductCardProps extends IProduct {
    featuresSlot?: ReactNode
}