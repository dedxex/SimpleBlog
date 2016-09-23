import GetPost from '../actions/type';
const initialstate = { all:[],post:null };
export const PostReducer = (state = initialstate,action) => {
    console.log(action);
    switch(action.type) {
        case GetPost : 
        return { ...state, all : action.payload.data };
        case 'newPost' :
        return { ...state , all: action.payload.data }
    }
    return state;
}