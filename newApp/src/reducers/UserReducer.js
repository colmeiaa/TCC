export const initialState = {
     avatar:'',
     nome:'',
     tasks: [],
};

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setNome':
            return { ...state, nome: action.payload.nome};
        break;
        default:
            return state;
    };
};