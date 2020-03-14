import avaPetka from "../../resources/Petka.png";
import avaMitka from "../../resources/Mitka.png";
import avaJohnDonne from "../../resources/JohnDonne.png";
import avaMe from "../../resources/monkey.png";

const ADD_MESSAGE = "ADD-MESSAGE";

export function addMessageActionCreator(newMessage) {
    return {
        type: ADD_MESSAGE,
        message: newMessage
    };
}

let initialState = {
    dialogs: [
        {id: 1, name: "Pet'ka", avatar: avaPetka},
        {id: 2, name: "Mit'ka", avatar: avaMitka},
        {id: 3, name: "Pashka", avatar: avaJohnDonne},
        {id: 4, name: "Natalia Georgiyevna", avatar: avaJohnDonne},
        {id: 5, name: "Egorka3", avatar: avaJohnDonne},
        {id: 6, name: "me", avatar: avaMe}
    ],
    messages: [
        {id: 1, text: "Lorem ipsum that s my messsageeea", author: "Pet'ka"},
        {id: 2, text: "LOrem", author: "me"},
        {id: 3, text: "ok", author: "Pet'ka"},
        {id: 4, text: "qt 515 fzzxcv fq $!$@", author: "me"}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = {
                id: state.messages[state.messages.length - 1].id + 1,
                text: action.message,
                author: "me"
            };
            let newState = {
                ...state,
                messages: [...state.messages, message]
            };
            return newState;
        }
        default:
            return state;
    }
};

export default dialogsReducer;