import axios from 'axios';


const InsertData = (userData) => {
    return async (dispatch) => {
        dispatch({ type: "ADD_USER_REQUEST" })

        try {
            let response = await axios.post('http://localhost:3000/api/register', userData)
            dispatch({
                type: 'ADD_USER_SUCCESS',
                payload: response.data
            })
        }
        catch (error) {
            console.error('Error  Update data:', error);

            dispatch({
                type: 'ADD_USER_FAILURE',
                payload: error.message
            })
        }
    }
}


export { InsertData }
