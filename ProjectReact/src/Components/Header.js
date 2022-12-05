import {Link} from 'react-router-dom'
import style from './Style.module.css'
export default function Header(){
    return(
      <div className={style.Header}>
        <h1><img src="https://i.pinimg.com/originals/2b/6e/a0/2b6ea02cf02190ea0c83e3c4f3676b71.gif" alt="" /> Capodanno</h1>
        <div className={style.SideBar}>
        <Link to="/">Home</Link>
        <Link to="/Adicionar">Adicionar</Link>
        <Link to="/Contéudo">Contéudo</Link>
        <Link to="/Portfolio">Portfolio</Link>
        </div>
      </div>
    )
  }

