import avaSchool from "../../resources/school.png";
import avaFoot from "../../resources/football.png";
import avaCinema from "../../resources/cinema.png";
import avaPetka from "../../resources/Petka.png";
import avaMitka from "../../resources/Mitka.png";
import avaJohnDonne from "../../resources/JohnDonne.png";

let initialState = {
    communs: [
        {id: 1, name: "School 1197", avatar: avaSchool},
        {id: 2, name: "Football", avatar: avaFoot},
        {id: 3, name: "Cinema fanatics", avatar: avaCinema}
    ],
    friends: [
        {id: 1, name: "Pet'ka", avatar: avaPetka},
        {id: 2, name: "Mit'ka", avatar: avaMitka},
        {id: 3, name: "Pashka", avatar: avaJohnDonne},
        {id: 4, name: "Natalia Georgiyevna", avatar: avaJohnDonne},
        {id: 5, name: "Egorka3", avatar: avaJohnDonne}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state
};

export default sidebarReducer;