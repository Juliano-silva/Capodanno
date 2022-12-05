import style from './Style.module.css'
export default function Portfolio(){
    return(
      <div className={style.Portfolio}>
        <img src="" alt="" />
        <h1>Criador: <br /> <span>J</span>uliano <span>S</span>ilva De <span>A</span>lmeida</h1>
        <p>Estudante de tecnologia com foco em desenvolvimento de software, busco me inserir no mercado e desenvolver as habilidades necessárias pra me tornar melhor</p>
        <h1>Nossas Redes Sociais:</h1>
        <a href="https://twitter.com/home" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />Twitter</a>
        <a href="https://github.com/Juliano-silva" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />Github</a>
        <a href="https://www.linkedin.com/feed/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" />Linkedin</a>
        <a href="https://www.instagram.com/ju.liano1841/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1936/1936319.png" alt="" />Instagram</a>
      </div>
    )
  }

