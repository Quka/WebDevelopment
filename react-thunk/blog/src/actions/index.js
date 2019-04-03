import _ from 'lodash'; 
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data})
};



export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data})
});

/* After refactoring but before introducing Lodash and _.memoize 
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data})
};
*/
/* Before refactoring:
export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response})
    };
};
    
*/  
    
    /*Bad
    //Problem, pga async/await returneres ikke et plain js action-object lige når den bliver kaldt
    //men et request object. Det vil blive sendt til vore store dispatch metode -> error
    const response = await jsonPlaceholder.get('/posts');

    //Det virker desværre heller ikke ved blot at fjerne async/await og lade response være et promise
    //problem: på det tidspunkt action modtages af reducer er data ikke klar endnu (ikke kommet retur fra WS)

    return {
        type: 'FETCH_POSTS',
        payload: response     //promise
    };
    */





