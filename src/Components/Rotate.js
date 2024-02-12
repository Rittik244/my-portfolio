import React from 'react'
import './Rotate.css';

const Rotate = () => {
    return (
        <div className='wrapper-1'>
            <h1>Skills That I Have Gain</h1>
            <div className='wrapper-2'>
                <div className='skill-wrapper'>
                    <ul>
                        <li className='li'>C++</li>
                        <li className='li'>HTML</li>
                        <li className='li'>CSS</li>
                        <li className='li'>JAVASCRIPT</li>
                        <li className='li'>REACT JS</li>
                        <li className='li'>NODE JS</li>
                    </ul>
                </div>
                <div className='rotate-wrapper'>
                    <div className='cube'>
                        <div className='side back'>HTML</div>
                        <div className='side leftt'>CSS</div>
                        <div className='side rightt'></div>
                        <div className='side top'>NODE</div>
                        <div className='side bottom'>REACT</div>
                        <div className='side front'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rotate;
