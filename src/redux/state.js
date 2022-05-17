// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'; 


const store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('lol')
    },

    getState() { 
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
             // debugger
        const newPost = {
            id: 3,
            message: this._state.profilePage.newPostText
            // likeCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};




export default store;
window.store = store;