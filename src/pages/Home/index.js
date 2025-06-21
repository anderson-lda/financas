//import { useContext } from "react";
//import { AuthContext } from "../../contexts/auth";
import { Area, Background, List, ListBalance, Title } from "./styles";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import { Modal, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";

export default function Home(){
    const isFocused = useIsFocused()
    const [listBalance, setListBalance] = useState([])
    const [movements, setMovements] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        let isActive = true

        async function getMovements(){
            let dateFormatted = format(dateMovements, 'dd/MM/yyyy')

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormatted,
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormatted,
                }
            })

            if(isActive){
                setListBalance(balance.data)
                setMovements(receives.data)
            }
        }

        getMovements()

        return () => isActive = false
    },[isFocused, dateMovements])

    async function handleDelete(id){
        try{
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMovements(new Date())
        }catch(err){
            console.log(err)
        }
    }

    function filterDateMovements(dateSelected){
        setDateMovements(dateSelected);
    }

    return(
        <Background>
            <Header title="Minhas movimentacoes"/>
            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({item}) => (<BalanceItem data={item} />)}
            />

            <Area>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                    <Icon name="calendar" size={30} />
                    <Title>Últimas movimentações</Title>
                </TouchableOpacity>
            </Area>

            <List 
                data={movements} 
                keyExtractor={item => item.id} 
                renderItem={({item})=><HistoricoList data={item} deleteItem={handleDelete} />}
                showsVerticalScrollIndicator={false}  
                contentContainerStyle={{paddingBottom: 20}}  
            />

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <CalendarModal
                    setVisible={()=>setModalVisible(false)}
                    handleFilter={filterDateMovements}
                />
            </Modal>
        </Background>
    )
}