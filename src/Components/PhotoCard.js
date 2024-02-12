import React from 'react';
import PropTypes from 'prop-types';
import './PhotoCard.css'

const PhotoCard = ({imageSrc, title, description}) => {

  return (
    <div className='photo-card'>
        <img src={imageSrc} alt={title} className='photo-card-image' />
        <div className='photo-card-content'>
            <h2 className='photo-card-title'>{title}</h2>
            <p className="photo-card-description">{description}</p>
        </div>
    </div>
  )
};

PhotoCard.propTypes = {
    imageSrc : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
};

export default PhotoCard
