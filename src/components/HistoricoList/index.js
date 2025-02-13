import { Alert, TouchableWithoutFeedback } from "react-native";
import { Container, TipoText } from "./styles";
import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList({ data, deleteItem }){
    function handleDeleteItem(){
        Alert.alert(
            'Atenção',
            'VOcê tem certeza da deleção deste registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return (
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon 
                            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                            size={20} 
                            color="#FFF" 
                        />
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>

                <Valortext>
                    R$ {data.value}
                </Valortext>
            </Container>
        </TouchableWithoutFeedback>
    )
}