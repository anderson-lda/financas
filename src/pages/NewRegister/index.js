import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Header from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { useState } from "react";
import RegisterTypes from "../../components/RegisterTypes";

export default function NewRegister(){
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')

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
                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}