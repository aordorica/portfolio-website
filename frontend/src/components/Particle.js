import React from 'react'
import config from '../config/particleConfig.js';
import Particles from 'react-particles-js';

export default () => {
    return (
        <Particles className='particle' params={config}></Particles>
    )
}
