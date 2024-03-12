import {Button} from "@vkontakte/vkui"
import {Icon24TrashSimpleOutline} from "@vkontakte/icons";
import {useAppDispatch} from "../../app/model";
import {deleteProduct} from "../../pages";

export const DeleteFromCart = (props: {id: string}) => {
    const dispatch = useAppDispatch()

    return (
        <Button
            size="s"
            appearance="accent"
            mode={'tertiary'}
            before={<Icon24TrashSimpleOutline />}
            onClick={() => dispatch(deleteProduct({id: props.id}))}
        />
    )
}