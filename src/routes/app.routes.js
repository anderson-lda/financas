import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import NewRegister from "../pages/NewRegister";
import Profile from "../pages/Profile";


const AppDrawer = createDrawerNavigator()

export default function AppRoutes(){
    return(
        <AppDrawer.Navigator
            screenOptions={{
                headerShown:false,
                drawerStyle:{
                    backgroundColor:'#FFF',
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor:'#3b3dbf',
                drawerActiveTintColor:'#FFF',
                drawerInactiveBackgroundColor: '#F0F2FF',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />
            <AppDrawer.Screen
                name="Registrar"
                component={NewRegister}
            />
            <AppDrawer.Screen
                name="Perfil"
                component={Profile}
            />
        </AppDrawer.Navigator>
    )
}