import {useAppSelector} from "../../../app/model";
import {Card, Div, Spacing, Spinner, Text} from "@vkontakte/vkui";
import {ProductCard} from "../../../widgets";
import {ChangeCartItemCount, DeleteFromCart} from "../../../features";
import {Fragment} from "react";

const CardsList = () => {
    const items = useAppSelector(state => state.cart.products)
    const loadingState = useAppSelector(state => state.cart.status)

    return (
        <Div>
            { loadingState === 'loading' && (<Spinner size="large" style={{ margin: '20px 0' }} />) }
            { loadingState === 'failed' && (<Text>Ошибка загрузки</Text>) }
            { loadingState === 'ok' && (<>
                { items.length === 0 && (<Text>Корзина пуста</Text>) }
                { items.length > 0 && items.map((item, i) => (
                    <Fragment key={item.id}>
                        <ProductCard
                            {...item}
                            featuresSlot={(
                                <Card style={{display: 'flex', gap: '30px'}}>
                                    <ChangeCartItemCount id={item.id}/>
                                    <DeleteFromCart id={item.id}/>
                                </Card>
                            )}
                        />
                        <Spacing size={16}/>
                    </Fragment>
                ))}
            </>)}

        </Div>
    )
}

export default CardsList