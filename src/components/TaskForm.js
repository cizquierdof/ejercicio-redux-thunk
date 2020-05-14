import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'
import { Form, Segment, Button } from 'semantic-ui-react';

const TaskForm = props => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("")


    const onAddHandle = (e) => {
        console.log("taskform submit", e)
        props.dispatch(addTask(task, description))
    }

    return (
        <Segment raised>
            <Form >
                <Form.Group>
                    <Form.Field control='input' label='Título' placeHolder='título' type='text' value={task} onChange={
                        e => setTask(e.target.value)
                    }></Form.Field>
                    <Form.Field control='input' label='Descripción' placeHolder='descripción' place type="text" value={description} onChange={
                        e => setDescription(e.target.value)
                    }></Form.Field>
                </Form.Group>
                <Button basic color='green' onClick={onAddHandle}>Añadir</Button>
            </Form>
        </Segment>
    )
}

function mapStateToProps(state) {
    return {}
}



export default connect(mapStateToProps)(TaskForm)
