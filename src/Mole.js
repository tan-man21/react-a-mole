import React, { useEffect } from 'react';
import molePic from './mole.png'

function Mole(props) {

    useEffect(() => {
        let randomTime = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomTime)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={molePic}
            onClick={props.handleClick}
            />
        </div>
    )
}

export default Mole