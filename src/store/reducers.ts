import * as actionTypes from "./actionTypes"

const initialState :  ArticleState= {
    article : [
        {
            id : 1,
            title : "post 1",
            body : "lorem ipsum dolor sit"
        },
        {
            id : 2,
            title : "post 2",
            body : "lorem ipsum dolor sit"
        },
        
    ],
}

const reducer = (
     state : ArticleState = initialState , 
     action : ArticleAction
    
    ) : ArticleState =>{
switch(action.type){
    case actionTypes.ADD_ARTICLE : 
    const newArticle : IState = {
        id : Math.random(),
        title : action.article.title,
        body : action.article.body
    }
    return {
        ...state,
        article : state.article.concat(newArticle),
    }
    case actionTypes.REMOVE_ARTICLE :
        const upadtedArticle : IState[] = state.article.filter(
            article => article.id !== action.article.id
        )
        return {
            ...state,
            article : upadtedArticle ,
        }
}
return state
}
export default reducer