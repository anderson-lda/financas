import React, { createContext, useState } from 'react'
import api from '../services/api'
import { useNavigation } from '@react-navigation/native'

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
    const navigation = useNavigation()

    async function signUp(nome, email, password){
        try{
            const response = await api.post('/users', {
                name: nome,
                email: email,
                password: password,
            })

            navigation.goBack()
        }catch(err){
            console.log('erro ao cadastrar: ', err)
        }
    }

    return(
        <AuthContext.Provider value={{ signUp }}>
            {children}
        </AuthContext.Provider>
    )
}