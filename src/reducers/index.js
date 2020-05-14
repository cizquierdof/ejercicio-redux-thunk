import { global } from '../estadoInicial'
import {
    ADD_TASK_SUCCEED,
    DELETE_TASK_SUCCEED,
    MODIFY_TASK_SUCCEED,
    TASK_FETCH_SUCCEED
} from '../actions'

const reducer = (state = global, action) => {
    //console.log(action);

    switch (action.type) {
        case ADD_TASK_SUCCEED:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                notifications: [...state.notifications,
                "Nueva tarea: " + action.payload.title
                ]
            }
        case DELETE_TASK_SUCCEED:
            //console.log('tarea ', action.payload, ' borrada');
            return {
                ...state, tasks: state.tasks.filter(i => i.id !== action.payload),
                notifications: [...state.notifications, 'eliminada tarea ' + action.payload]
            }

        case MODIFY_TASK_SUCCEED:
            console.log('Modificar tarea ', action.payload.id, ' a ', action.payload.state);
            const id=action.payload.id;
            return {
                ...state, tasks: [...state.tasks.filter(i => i.id !== id), action.payload],
                notifications: [...state.notifications, `Modificada tarea ${id}: ${action.payload.title} a ${action.payload.state}`]
            }
        //aquí actualizamos el store con los datos que nos trajimos del servidor
        //después podremos usarlos en Tasklist para mostrarlos mediante useEfect    
        case TASK_FETCH_SUCCEED:
            return {
                ...state,
                tasks: action.payload.tasks
            }

        default:
            break;
    }

    return state
}

export default reducer