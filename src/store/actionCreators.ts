import * as actionTypes from "./actionTypes"

export function addArticle ( article : IState){
    const action : ArticleAction = {
        type : actionTypes.ADD_ARTICLE,
        article,
    }
    return simlateHttpRequest(action)
}
export function removeArticle ( article : IState){
    const action : ArticleAction = {
        type : actionTypes.REMOVE_ARTICLE,
        article,
        
    }
    return simlateHttpRequest(action)
}
export function simlateHttpRequest(action : ArticleAction){
    return (dispatch : DispatchType)=>{
        setTimeout(()=>{
            dispatch(action)
        }, 500)
    } 
}