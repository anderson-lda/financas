import { Container, TipoText } from "./styles";
import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList({ data }){
    return (
        <Container>
            <Tipo>
                <IconView tipo={data.type}>
                    <Icon name="arrow-down" size={20} color="#FFF" />
                    <TipoText>{data.type}</TipoText>
                </IconView>
            </Tipo>

            <Valortext>
                R$ {data.value}
            </Valortext>
        </Container>
    )
}