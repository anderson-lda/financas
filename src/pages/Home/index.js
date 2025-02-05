//import { useContext } from "react";
//import { AuthContext } from "../../contexts/auth";
import { Background } from "./styles";
import Header from "../../components/Header";


export default function Home(){
    //const { user, signOut } = useContext(AuthContext)
    return(
        <Background>
            <Header title="Minhas movimentacoes"/>
        </Background>
    )
}