import { TouchableWithoutFeedback, View } from "react-native";
import { ButtonFilterText, Container, ModalContent, ButtonFilter } from "./styles";
import { useState } from "react";
import { Calendar } from "react-native-calendars";

export default function CalendarModal({setVisible, handleFilter}){
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date){
        setDateNow(new Date(date.dateString));
        let markedDay = {};
        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#FFF'
        };
        setMarkedDates(markedDay);
    }

    function handleFilterDate(){
        handleFilter(dateNow);
        setVisible();
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex:1}}></View>
            </TouchableWithoutFeedback>
            <Calendar 
                onDayPress={handleOnDayPress}
                markedDate={markedDates}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor: '#FF0000',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#FFF'
                }}
            />
            <ModalContent>
                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}