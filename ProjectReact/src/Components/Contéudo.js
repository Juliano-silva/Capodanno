import React,{useState,useEffect} from "react";
import style from './Style.module.css'
const List = ({items}) => {
    return(
        <div className={style.Container}>
            {items.map((item) => {
                const {id,title,preco,image,descricao} = item;
                return(
                    <ul key={id} className={style.CardUL}>
                        <li className={style.Card}>
                            <h1>{title}</h1>
                            <img src={image} alt="" />
                            <h2>R${preco}</h2>
                            <p>{descricao}</p>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    return (list = JSON.parse(localStorage.getItem("list")));
  } else{
    return [];
  }
}
const App = () =>{
  const [list] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  return(
    <div>
        {list.length > 0 && (
          <div>
            <List items={list}/>
          </div>
        )}
    </div>
  )
}
export default App

