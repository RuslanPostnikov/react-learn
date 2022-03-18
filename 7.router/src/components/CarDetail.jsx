import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import './CarDetail.scss';


const CarDetail = props => {
    const {name} = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
    <div style={{textAlign: 'center'}}>
        <p>{name}</p>
        <button onClick={goBack}>Go back</button>
    </div>
    );
}

export default CarDetail;
