export default function(titleSearched = '', action){

    if(action.type === 'searchTitle'){
        return action.title
    } else {
        return titleSearched
    }
}