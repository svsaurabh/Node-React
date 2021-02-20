import axios from 'axios';
import { setAlert } from './alert';
import {
    IS_AUTHOR,
    AUTHOR_ERROR,
    PROFILE_LOADED,
    PROFILE_ERROR
} from './types';

export const loadProfile = () => async dispatch =>{
    try {
        const res = await axios.get('/api/auth/user');
        dispatch({
            type: PROFILE_LOADED,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR
        });
    }
}

export const isauthor = (formData) => async dispatch => {
    console.log("in func");
    const config = {
        header: {
            'Content-Type': 'application/json' 
        }
    }
    try{
        const res = await axios.post('/api/profile/isauthor', formData, config);

        dispatch({
            type: IS_AUTHOR,
            payload: res.data
        })
        dispatch(loadProfile());
    }
    catch(error){
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: AUTHOR_ERROR
        });
    }
}