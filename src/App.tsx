import * as React from 'react';
import { useSelector , shallowEqual , useDispatch} from 'react-redux'

import { Article } from './compounds/Article';
import { AddArticle } from "./compounds/AddArticle"
import { addArticle , removeArticle } from "./store/actionCreators"
import { Dispatch} from "redux";

import './App.css';

const App:React.FC = ()=> {
  const articles : readonly IState[]= useSelector( 
    (state : ArticleState)=> state.article,
    shallowEqual
  )
  const dispatch : Dispatch<any> = useDispatch()
  const saveArticle = React.useCallback(
    (article : IState) => dispatch(addArticle(article)),
    [dispatch]
  )
  console.log(dispatch);
  return (
    <div className="App">
      <main> 
        <h1> Articles</h1>
        <AddArticle saveArticle={saveArticle}/>
       { articles.map((article : IState) =>(
         <Article key={article.id} article={article} removeArticle={removeArticle}/>
       ))}
      </main>
    </div>
  );
}

export default App;
