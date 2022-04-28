export default function(movieSelected = null, action){

    if(action.type === 'selectMovie'){
        return action.movie
    } else {
        return movieSelected
    }
}