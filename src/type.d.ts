interface  IState {
    id:  number;
    title: string;
    body: string; 
}

type ArticleState = {
    article: IState[]
}

type ArticleAction = {
    type : string
    article: IState
}

type DispatchType = (args : ArticleAction)=> ArticleAction  