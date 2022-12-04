import {Link} from 'react-router-dom'
import style from './Style.module.css'
export default function Header(){
    return(
      <div className={style.Header}>
        <h1>Header</h1>
        <div className={style.SideBar}>
        <Link to="/">Home</Link>
        <Link to="/Adicionar">Adicionar</Link>
        <Link to="/Contéudo">Contéudo</Link>
        <Link to="/Portfolio">Portfolio</Link>
        </div>
      </div>
    )
  }

