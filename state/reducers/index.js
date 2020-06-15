import { loggedIn } from '../../utils/index'

// const getToken = () => {
//     let token;
//     console.log("I need to be here")
//     loggedIn()
//         .then(item =>{
//             console.log(item)
//             token = item 
//         })
//         .catch(err => console.log(err))
//     console.log("I need to see this token asap", token)
//     return token
// }

const initialState = {
    userId: null,
    token:loggedIn,
    currentWorkoutId: null,
    currentSetId: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer;