import React, { useState } from 'react'
import { Button, Card, Accordion, Icon } from 'semantic-ui-react'
import { deleteNote, setEditedNote } from '../actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router"

const Note = (props) => {
    const {content, title, id} = props
    const history = useHistory()
    const location = history.location

    const [activeIndex, setActiveIndex] = useState(history.location.pathname.includes(id) ? 0 : -1 )

    const acc = (e, titleProps) => {
        location.pathname.includes(id) ? history.push(`/notes`) : history.push(`/notes/${id}`) 
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex( newIndex )

      }
    
    return(       
         
            <Card className="card">
                <Card.Content > 
                    <Accordion styled>
                    <Accordion.Title
                    active={ activeIndex === 0}
                    index={0}
                    onClick={acc}
                    >
                <Icon name='dropdown' />
                {title}
                </Accordion.Title>
                <Accordion.Content active={ activeIndex === 0}>
                <p>{content}</p>
                </Accordion.Content>
                </Accordion>
                </Card.Content>
                <div className="ui two buttons">
                    <Button 
                    onClick={() =>  {                        
                        history.push(`/note/edit/${id}`)
                        props.setEditedNote({content, title, id})
                    }}
                    basic color='green'>
                        Edit
                    </Button>
                    <Button 
                    onClick={() => props.deleteNote(id)}
                    basic color='red'>
                        Delete
                    </Button>
                </div>
            </Card>
    )
}

export default connect(null, { deleteNote, setEditedNote })(Note)