import {PageLayout} from "../../../shared";
import {Group, Div} from "@vkontakte/vkui";
import CardsList from "./CardsList";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/model";
import {fetchData} from "../model";
import Summary from "./Summary";

const Cart = () => {
    const dispatch = useAppDispatch()
    const loadingState = useAppSelector(state => state.cart.status)

    useEffect(() => {
        dispatch(fetchData())
    }, []);

    return (
        <PageLayout>
            <Div style={{ display: 'flex', gap: "10px" }}>
                <Group style={{ flex: 3 }}>
                    <CardsList/>
                </Group>
                { loadingState === 'ok' && (
                    <Group style={{ flex: 1, height: "50px" }}>
                        <Div><Summary /></Div>
                    </Group>
                )}
            </Div>
        </PageLayout>
    )
}

export default Cart