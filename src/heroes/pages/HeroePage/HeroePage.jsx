import { useParams, Navigate, useNavigate } from "react-router-dom"
import getHeroeById from "../../helpers/getHeroeById";
import "./HeroePage.css"
import { useMemo } from "react";
const HeroePage = () => {
  const navigate = useNavigate()
  // 
  const { heroeId } = useParams();
  const { id, superhero, info } = useMemo(() => getHeroeById(heroeId), [heroeId]);
  // 
  const handleBack = () => {
    return navigate(-1)
  }
  // 
  const imgHeroe = `/heroes/${id}.jpg`
  // 
  if (!superhero) {
    return <Navigate to={"/marvel-page"} />
  }

  return (
    <div className="container info-heroe">
      <div className="heroe_img">
        <img
          src={imgHeroe}
          alt={superhero}
        />
        <button
          onClick={handleBack}
        >
          Volver
        </button>
      </div>
      <div className="heroe_text">
        <h2>Inicio de la Historia de {superhero}</h2>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default HeroePage