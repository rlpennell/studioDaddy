import React from 'react'

// While we recommend SVGs, an alternative is to use a regular image (png, jpg)
// Notice how we're "importing" the path from a local image - when building the
// studio, this image will automatically be part of the output bundle, with a
// hash that will make it easy to invalidate on changes.
import jesus from './jesus.png'

const ImgLogo = () => <img src={jesus} style={{height: '30px'}}/>

export default ImgLogo
