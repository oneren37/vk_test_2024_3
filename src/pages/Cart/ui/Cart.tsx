import {PageLayout} from "../../../shared";
import {Group, Div} from "@vkontakte/vkui";

const Cart = () => {
    return (
        <PageLayout>
            <Div style={{ display: 'flex', gap: "10px" }}>
                <Group style={{ flex: 3 }}>
                    Колонка 1 (ширина 3)
                </Group>
                <Group style={{ flex: 1 }}>
                    Колонка 2 (ширина 1)
                </Group>
            </Div>
        </PageLayout>
    )
}

export default Cart