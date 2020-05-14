import React, { useEffect } from 'react'
import Task from './Task'
import { connect } from 'react-redux'
import TaskForm from './TaskForm'
import { fetchTask, } from '../actions'    //nos traemos la función que recupera datos

const TaskList = props => {

    /************
     * Redux thunk
     * 
     * Aqui utiulizamos los datos que nos trajimos del servidor
     */

    const { dispatch } = props; //esto es una coña que pide thunk

    /*****************
     * utilizamos useEfect para traernos la función que actualizara el estado de tasklist
     * se escribe tal cual
     * 
     * Esto es equivalente a 
     * 
     *     useEffect(()=>{
               Axios.get(SERVER_URL).then(
                   res=> dispatch(fetchTaskSucceed(res.data) )
               )
               }, [dispatch])
     */


    useEffect(() => {
        //console.log('equivale a didMount');
        dispatch(fetchTask())

    }, [dispatch])



    return (
        <div className="task-list">
            <TaskForm></TaskForm>
            <hr></hr>
            {props.tasks.map(
                (item, index) => <Task key={index} task={item} />
            )}

        </div>
    )
}


function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)
