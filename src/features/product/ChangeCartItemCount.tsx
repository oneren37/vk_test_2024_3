import {Button, Card, Title} from "@vkontakte/vkui"
import {Icon24AddOutline, Icon24MinusOutline} from "@vkontakte/icons";
import {useAppDispatch, useAppSelector} from "../../app/model";
import {decrement, increment} from "../../pages";

export const ChangeCartItemCount = (props: {id: string}) => {
    const dispatch = useAppDispatch()
    const count = useAppSelector(state => {
        return state.cart.products.find(p => p.id === props.id)?.count
    })

    return (
        <Card style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Button
                size="s"
                appearance="accent"
                mode={'tertiary'}
                before={<Icon24AddOutline />}
                disabled={!(count && count < 10)}
                onClick={() => dispatch(increment({id: props.id}))}
            />
            <Title level={'3'}>{count}</Title>
            <Button
                size="s"
                appearance="accent"
                mode={'tertiary'}
                before={<Icon24MinusOutline />}
                disabled={!(count && count > 1)}
                onClick={() => dispatch(decrement({id: props.id}))}
            />
        </Card>
    )
}