import React from 'react'
import { connect } from 'react-redux'
import {deleteTask, modifyTask} from '../actions'
import { Container, Header, Segment, Button } from 'semantic-ui-react'

const Task = props => {

const onEliminar=()=>{

    props.dispatch(deleteTask(props.task.id));

}

const OnChangeState=(newState)=>{
    // setId(props.task.id)
    // console.log('id',id)
    const task={
        id:props.task.id,
        title:props.task.title,
        description:props.task.description,
        state:newState
    }
    console.log('modify',task)
    props.dispatch(modifyTask(task))

}


    return (
        <Segment raised>
        <Container text className="task" >
            <Header as='h3' className="task-header">
            <p>id: {props.task.id}</p>
                {props.task.title}
            </Header>
            <p>
                {props.task.description}
            </p>
            <p>
                {props.task.state}
            </p>
        </Container>
        <Button basic color='red' onClick={onEliminar} >Eliminar</Button>
        <Button basic color='blue' onClick={()=>OnChangeState('Doing')}>Doing?</Button>
        <Button basic color='green' onClick={()=>OnChangeState('Complete')}>Complete?</Button>

        </Segment>
    )
}

function mapStoreToProps(state) {
    return{}
    
}

export default connect(mapStoreToProps)(Task)
