import Axios from 'axios';
import { SERVER_URL } from '../config'

export const TASK_FETCH_SUCCEED = 'TASK_FETCH'
export const ADD_TASK_SUCCEED = "ADD_TASK";
export const DELETE_TASK_SUCCEED = 'DELETE_TASK';
export const MODIFY_TASK_SUCCEED = 'MODIFY_TASK';


/*******************************************************************************************
 * 
 * Redux Thunk
 * 
 * Se utilza para manejar efectos colaterales como recuperar datos de un servidor. 
 * En este caso recuperamos los datos de json-server con axios
 * 
 * Lo siguiente es una acción normal de Redux para enviar los datos recuperados al 
 * store 
 */

export const fetchTaskSucceed = (tasks) => {
    return {
        type: TASK_FETCH_SUCCEED,
        payload: {
            tasks: tasks
        }
    }
}
/*********************
 * 
 * Seguidamente tenemos un midleware que recupera los datos del servidor. 
 * El quid de la cuestión es que asignamos a 'dispatch' una función que es
 * la que utilizariamos normalmente para recuperar los datos (axios.get()).
 * Esto es así por definición de thunk. Posteriormente utilizará dispatch cuando
 * lo necesite 
 * 
 */
export const fetchTask = () => {
    return dispatch => {
        Axios.get(SERVER_URL).then(
            res => {
                //console.log('Mis datos', res.data);//aquí ya tenemos los datos del servidor

                dispatch(fetchTaskSucceed(res.data))//aquí los enviamos para que se actualice el estado

            }
        )

    }
}

/*********************************************************************************************
 * lo mismo para crear una nueva tarea addTaskSucceed actualiza el estado
 */

export const addTaskSucceed = (task) => {
    return {
        type: ADD_TASK_SUCCEED,
        payload: task
    }
}

/*************
 * addTask envia los datos del formulario al servidor y como axios.get() nos devuelve
 * el objeto que le enviamos, lo utilizamos para enviarlo a addTaskSucceed
 */

export const addTask = (title, description) => {
    return dispatch => {
        Axios.post(SERVER_URL, {
            title,
            description,
            state: "ready"
        }).then(
            res => { dispatch(addTaskSucceed(res.data)) }
        )
    }
}
/************************************************************************************************
 * DELETE TASK
 */

export const deleteTaskSucceed = (id) => {
    return {
        type: DELETE_TASK_SUCCEED,
        payload: id

    }
}

export const deleteTask = (id) => {
    return dispatch => {
        Axios.delete(`${SERVER_URL}/${id}`).then(
            res => {
                //console.log('delete',res.data)
                dispatch(deleteTaskSucceed(id))
            }
        )
    }
}
/**************************************************************************************************
 * MODIFY TASK
 */
export const modifyTaskSucceed = (task) => {
    return {
        type: MODIFY_TASK_SUCCEED,
        payload: task
    }
}

export const modifyTask = (task) => {
    return dispatch => {
        Axios.put(`${SERVER_URL}/${task.id}`, task).then(
            res => { dispatch(modifyTaskSucceed(task)) }
        )

    }
}