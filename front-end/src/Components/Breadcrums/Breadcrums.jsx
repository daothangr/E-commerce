import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/arrow_icon.png';


const Breadcrums = (props) => {
    const {product} = props;

    return (
        <div className='breadcrum'>
            HOME <img className='arrow-icon' src={arrow_icon} alt="" /> SHOP <img className='arrow-icon' src={arrow_icon} alt="" /> {product.category} <img className='arrow-icon' src={arrow_icon} alt="" /> {product.name}

        </div>
    );
}

export default Breadcrums;