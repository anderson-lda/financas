import { Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { useState } from "react";
import RegisterTypes from "../../components/RegisterTypes";
import api from "../../services/api";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export default function NewRegister(){
    const navigation = useNavigation()
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')

    function handleSubmit(){
        Keyboard.dismiss()

        if(isNaN(parseFloat(valueInput)) || type === null){
            alert('Preencha todos os campos')
            return
        }

        Alert.alert(
            'Confirmando dados'
            `Tipo: ${type} - Valor: ${parse.float(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd(){
        Keyboard.dismiss()

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        }) //token jávai automaticamente, configurado pelo auth

        setLabelInput('')
        setValueInput('')
        navigation.navigate('Home')
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />

                <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
                    <Input placeholder="Descrição desse registro" value={labelInput} onChangeText={(text)=>setLabelInput(text)} />
                    <Input 
                        placeholder="Valor desejado" 
                        keyboardType="numeric"
                        value={valueInput} 
                        onChangeText={(text)=>setValueInput(text)}
                    />
                    <RegisterTypes type={type} setTypeChanged={(item) => setType(item)} />
                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}