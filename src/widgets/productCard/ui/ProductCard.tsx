import {IProductCardProps} from "../types";
import {Card, Title, Image, Div, Text, Spacing} from "@vkontakte/vkui";

const ProductCard = (props: IProductCardProps) => {
    return (
        <Card mode={'outline-tint'}>
            <Div style={{display: 'flex'}}>
                <Div>
                    <Image
                        src={props.image}
                        borderRadius={'m'}
                        size={96}
                    />
                </Div>

                <Div>
                    <Title level={'3'}>{props.title}</Title>
                    <Text style={{color: 'var(--vkui--color_text_secondary)'}}>
                        {props.description.length > 200 
                            ? props.description.slice(0, 200) + "..." 
                            : props.description}
                    </Text>
                    <Spacing size={10}/>
                    <Text>Цена: {props.price}</Text>
                    {props.featuresSlot && (<>
                        <Spacing size={10}/>
                        {props.featuresSlot}
                    </>)}
                </Div>
            </Div>
        </Card>
    )
}

export default ProductCard