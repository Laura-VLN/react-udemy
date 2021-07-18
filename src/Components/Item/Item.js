import {useState} from 'react';
import './Item.css';
// import travelImg from './travelImg.jpg';
import CatImg from './CatImg.svg';
import {ReactComponent as Cat} from './CatImg.svg'; // importer img en tant que component

function Item() {

    const ext = "jpg"

    return (
    <div className="titre-item">
       <h1>Hello depuis Item !</h1>
       {/* img dynamique */}
       <img src={process.env.PUBLIC_URL + `/images/travelImg.${ext}`} alt="" /> 
       <img src={CatImg} alt="" />
       <Cat />
    </div>
    );
}

export default Item;