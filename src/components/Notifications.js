import React from 'react'
import { connect } from 'react-redux'
import { Message, Container, Header, List, Segment } from 'semantic-ui-react'

const Notifications = (props) => {
    return (
        <Segment raised style={{marginTop: '10px', minHeight:'10em'}}>

            <Header as='h2'>
                Notificationes
        </Header>
                <List>
                    <List.Item>
                        {
                            props.notifications.map(
                                (i, index) => <li key={index} >{i}</li>
                            )
                        }
                    </List.Item>
                </List>

            </Segment>
    )
}

function mapStateToProps(state) {
    return {
        notifications: state.notifications
    }
}

export default connect(mapStateToProps)(Notifications)
