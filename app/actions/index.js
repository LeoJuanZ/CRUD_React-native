import firebase from '../FireBase'

export function getBlogs(){
    return(dispatch) => {
        firebase.database().ref('/Edit').on('value', snapshot => {
                dispatch({
                    type: "BLOGS_FETCH",
                    payload: snapshot.val()
                })
        })
    }
}