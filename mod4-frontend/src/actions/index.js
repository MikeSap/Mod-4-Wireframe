export const login = (user) => {
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/users`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
             user.errors ?
             dispatch({type: "LOGIN_ERROR", errors: user.errors})
             :
             dispatch({ type: "LOGGED_IN", user })
         })
    //  .catch   
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        username: "",
        id: ""
    }
}
// THIS DOES NOT HIT RAILS YET
export const signup = (user) => {
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/user/signup`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
             user.errors ?
             dispatch({type: "LOGIN_ERROR", errors: user.errors})
             :
             dispatch({ type: "LOGGED_IN", user })
         })
    //  .catch   
    }
}

export const newNote = (note) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })
        
        fetch(`http://localhost:3000/notes`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
         })
         .then(resp => resp.json())
         .then(postedNote => {
             dispatch({ type: "NEW_NOTE", note: postedNote})
         })
    //  .catch()    
    }
}

export const editNote = (note) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })
        
        fetch(`http://localhost:3000/notes/${note.note_id}`,{ 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(note)
         })
         .then(resp => resp.json())
         .then(editedNote => {
             dispatch({ type: "EDIT_NOTE", note: editedNote})
         })
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })
        
        fetch(`http://localhost:3000/notes/${id}`,{ method: "DELETE" })
         .then(resp => resp.json())
         .then(delNote => {
             dispatch({ type: "DELETE_NOTE", noteId: delNote.deletedNote})
         })
    }
}

export const setEditedNote = (note) => {
    return {
        type: "SET_EDITED_NOTE",
        note
    }
}


// import {...login} from './login'
// import {...notes} from './notes'


// export {...login}
// export {...notes}