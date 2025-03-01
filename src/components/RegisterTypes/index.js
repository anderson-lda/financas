import { useState } from "react";
import { RegisterContainer, RegisterLabel, RegisterTypeButton } from "./styles";
import Feather from "react-native-vector-icons/Feather"

export default function RegisterTypes({type,setTypeChanged}){
    const [typeChecked,setTypeChecked] = useState(type)

    function changeType(name){
        if(name === 'receita'){
            setTypeChanged('receita')
            setTypeChecked('receita')
        }else{
            setTypeChanged('despesa')
            setTypeChecked('despesa')
        }
    }

    return (
        <RegisterContainer>
            <RegisterTypeButton checked={typeChecked==='receita'?true:false} onPress={() => changeType('receita')}>
                <Feather name="arrow-up" size={25} color="#121212" />
                <RegisterLabel>
                    Receita
                </RegisterLabel>
            </RegisterTypeButton>
            <RegisterTypeButton checked={typeChecked==='despesa'?true:false} onPress={() => changeType('despesa')}>
                <Feather name="arrow-down" size={25} color="#121212" />
                    <RegisterLabel>
                        Despesa
                    </RegisterLabel>
            </RegisterTypeButton>
        </RegisterContainer>
    )
}