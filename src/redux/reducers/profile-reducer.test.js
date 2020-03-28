import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {
            id: 1,
            text: "1 post to see, practice in properties aka props. Adding more text to see it on the form." +
                "post to see, practice in properties aka props. Adding more text to see it on the form.",
            likeCounter: 3,
            liked: true
        },
        {id: 2, text: "2 Lorem ipsum est my shagga lala boom", likeCounter: 34, liked: false},
        {id: 3, text: "2 Lorem ipsum est my shagga lala boom", likeCounter: 34, liked: false}
    ]
};

it("posts length to be incremented", () => {
    let action = addPostActionCreator("new message post");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

it("text of new message should be correct", () => {
    let action = addPostActionCreator("new message post");
    let newState = profileReducer(state, action);
    expect(newState.posts[3].text).toBe("new message post");
});

it("length of posts array should be decreased after delete", () => {
    let action = deletePostActionCreator(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});

it("length of posts array shouldnt be decreased after delete not existing element", () => {
    let action = deletePostActionCreator(100);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});