import React from "react";

type Props = {
    saveArticle : (article : IState | any)=> void
}
export const AddArticle : React.FC<Props> = ({ saveArticle })=> {
    const [ article,setArticle] = React.useState<IState | {}>()

    const HandlerChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setArticle({ 
            ...article,
            [e.currentTarget.id] : e.currentTarget.value,

            
        })

    }
    const AddArticle = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        saveArticle(article)
    }

    return(
        <div > 
            <form onSubmit={ AddArticle }> 
                <label> Enter New Post</label>
                <input type="text" id="title" placeholder="Title" onChange={HandlerChange}/>
                <label> Enter Paragraph</label>
                <input type="text" id="body" placeholder="Paragraph" onChange={ HandlerChange}/>
                <button disabled={article === undefined ? true : false}> Add Article</button>
            </form>
        </div>
    )
   
}          