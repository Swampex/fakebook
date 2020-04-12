import avaPetka from '../resources/Petka.png';
import avaMitka from '../resources/Mitka.png';
import avaJohnDonne from '../resources/JohnDonne.png';
import avaMe from '../resources/monkey.png';
import avaSchool from '../resources/school.png';
import avaFoot from '../resources/football.png';
import avaCinema from '../resources/cinema.png';
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";

let store = {
    _state: {
        sidebarPage: {
            communs: {
                communs: [
                    {id: 1, name: "School 1197", avatar: avaSchool},
                    {id: 2, name: "Football", avatar: avaFoot},
                    {id: 3, name: "Cinema fanatics", avatar: avaCinema}
                ]
            },
            friends: {
                friends: [
                    {id: 1, name: "Pet'ka", avatar: avaPetka},
                    {id: 2, name: "Mit'ka", avatar: avaMitka},
                    {id: 3, name: "Pashka", avatar: avaJohnDonne},
                    {id: 4, name: "Natalia Georgiyevna", avatar: avaJohnDonne},
                    {id: 5, name: "Egorka3", avatar: avaJohnDonne}
                ]
            }
        },
        dialogsPage: {
            textInProcessing: {
                value: '',
                writable: true
            },
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
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    text: "1 post to see, practice in properties aka props. Adding more text to see it on the form." +
                        "post to see, practice in properties aka props. Adding more text to see it on the form.",
                    likeCounter: 3,
                    liked: true
                },
                {id: 2, text: "2 Lorem ipsum est my shagga lala boom", likeCounter: 34, liked: false}
            ],
            postInProcess: ''
        }
    },
    _callSubsriber() {
        console.log("smth hpnd");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubsriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubsriber();
    }
};

window.store = store;

export {store};