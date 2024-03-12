import {Text} from "@vkontakte/vkui";
import {useAppSelector} from "../../../app/model";

const Summary = () => {
    const sum = useAppSelector(state => {
        return Math.round(state.cart.products.reduce((acc, p) => acc + p.count*p.price, 0))
    })

    return (<>
        <Text>Итого: { sum } руб.</Text>
    </>)
}

export default Summary