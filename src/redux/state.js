import { rerenderEntireTree } from "../render"


const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?' },
            { id: 2, message: "it's my first project!" }
        ],
        newPostText: ''
    },
    
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Andriana' },
            { id: 2, name: 'Dimych' },
            { id: 3, name: 'Olya' },
            { id: 4, name: 'Nastia' },
            { id: 5, name: 'Andriy' },
            { id: 6, name: 'Ivan' }
        ],
        messages: [
            { id: 1, message: 'hello' },
            { id: 2, message: 'hi' },
            { id: 3, message: ':)' },
        ]
    }
}


export let addPost = () =>{
    // debugger
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText
        // likeCount: 0
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export default state;