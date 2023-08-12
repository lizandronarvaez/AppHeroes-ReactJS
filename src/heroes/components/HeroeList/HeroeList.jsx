/* eslint-disable react/prop-types */
import { useMemo } from "react";
import getHeroesByPublisher from "../../helpers/getHeroesByPublisher"
import HeroeCard from "../HeroeCard/HeroeCard";
import "./HeroeList.css"
const HeroeList = ({ publisher }) => {

    const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]) ;

    return (
        <div className="cards">
            {heroes.map(heroe => (
                <HeroeCard
                    key={heroe.id}
                    {...heroe}
                />
            ))}
        </div>
    )
}

export default HeroeList