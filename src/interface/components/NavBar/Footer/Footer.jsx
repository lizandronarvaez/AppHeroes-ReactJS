import iconReact from "../../../../../assets/iconTecnologies/react.svg";
import iconGit from "../../../../../assets/iconTecnologies/git.svg";
import iconVercel from "../../../../../assets/iconTecnologies/vercel.svg";
import iconVite from "../../../../../assets/iconTecnologies/vite.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <h3 className='footer_text'>Proyecto realizado por Lizandro Narvaez</h3>
        <div className='footer_tecnologies'>
            <p>Tecnologias Usadas</p>
            <img src={iconVite} alt="vite" />
            <img src={iconReact} alt="react" />
            <img src={iconGit} alt="git" />
            <img src={iconVercel} alt="vercel" />
        </div>
    </div>
  )
}

export default Footer