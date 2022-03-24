import * as React from "react"
import { Dispatch } from "redux";
import { useDispatch} from "react-redux"

type Props = {
    article: IState
    removeArticle : (article : IState) => void
}

export const Article : React.FC <Props> = ({ article , removeArticle}) => {
   const dispatch : Dispatch <any> = useDispatch()

   const deleteArticle = React.useCallback(
       (article : IState) => dispatch(removeArticle(article)),
       [dispatch , removeArticle]
   )
 
   return(
       <div> 
           <div> 
               <h1> { article.title }</h1>
               <h2> {article.body}</h2>
               {console.log(article)}
           </div>
           <button onClick={()=>deleteArticle(article)}>Delete</button>
           </div>
   )
}