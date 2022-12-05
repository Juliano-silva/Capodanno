import React,{useState,useEffect} from "react";
import {FaEdit,FaTrash} from 'react-icons/fa'
import style from './Style.module.css'
const Alert = ({type,msg,removeAlert,list}) => {
  useEffect(() => {
      const timeout = setTimeout(() => {
          removeAlert();
      },3000);
      return () => clearTimeout(timeout)
  },[list]);
  return <p className={`alert alert-${type}`}>{msg}</p>
}
const List = ({items,removeItem,editItem}) => {
    return(
        <div className="container">
            {items.map((item) => {
                const {id,title} = item;
                return(
                    <ul key={id} className={style.Title}>
                        <li>
                           <h1>{title}</h1>
                                <button onClick={() => editItem(id)}>
                                    <FaEdit/>
                                </button>
                                <button onClick={() => removeItem(id)}>
                                    <FaTrash/>
                                </button>
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
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [preco,setPreco] = useState("");
  const [descricao,setDescricao] = useState("");
  const [list,setList] = useState(getLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:"",type:""});
  const [editId,setEditID] = useState(null);
  const [isEditing,setIdEditing] = useState(false);
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name,!image,!preco,!descricao){
      ShowAlert(true,"danger","Please Enter Value")
    }else if(name && isEditing,image && isEditing,preco && isEditing,descricao && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editId){
            return {...item,title:name,image:image,preco:preco,descricao:descricao}
          }
          return item
        })
      );
      setName("");
      setImage("");
      setPreco("");
      setDescricao("");
      setEditID(null);
      setIdEditing(false);
      ShowAlert(true,"Sucesso","Value Changes")
    }else{
      ShowAlert(true,"Sucesso")
      const newItem = {id: new Date().getTime().toString(),title:name,image:image,preco:preco,descricao:descricao};
      setList([...list,newItem]);
      setName("");
      setImage("");
      setPreco("");
      setDescricao("");
    }
  };
  const ShowAlert = (show = false, type = "" , msg ="") => {
    setAlert({show,type,msg})
  };
  const removeItem = (id) => {
    ShowAlert(true,"danger","Item Remove")
    setList(list.filter((item) => item.id !== id));
  };
  const EditItem = (id) => {
    const EditItem = list.find((item) => item.id === id);
    setIdEditing(true);
    setEditID(id);
    setName(EditItem.title);
    setImage(EditItem.image);
    setPreco(EditItem.preco);
    setDescricao(EditItem.preco);
  };
  const clearList = () => {
    ShowAlert(true,"danger","Lista Limpa");
    setList([]);
  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={list}/>}
          <div className={style.Inputs}>
            <input type="text" placeholder="Nome do Produto" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" placeholder="Image do Produto" onChange={(e) => setImage(e.target.value)} value={image} />
            <input type="text" placeholder="Descrição do Produto" onChange={(e) => setDescricao(e.target.value)} value={descricao} />
            <input type="number" placeholder="Preço do Produto" onChange={(e) => setPreco(e.target.value)} value={preco} />
            <button type="submit" className={style.Button}>
              {isEditing ? "Editar" : "Enviar"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={EditItem}/>
            <div>
              <button onClick={clearList} className={style.Clear}>
                Limpar Tudo
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
export default App
