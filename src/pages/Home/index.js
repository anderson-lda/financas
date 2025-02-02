import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/auth";


export default function Home(){
    const { user, signOut } = useContext(AuthContext)
    return(
        <View>
            <Text>Nome: {user.name}</Text>
            <Text>Home</Text>
            <Button
                tittle="Sair"
                onPress={() => signOut()}
            />
        </View>
    )
}