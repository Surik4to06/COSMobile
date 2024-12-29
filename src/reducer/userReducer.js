export const initialState = {
    avatar: '../assets/fotoPerfil.jpg',
    favorites: [],
    reservas: [],
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;
        default: 
            return state;
    }
}