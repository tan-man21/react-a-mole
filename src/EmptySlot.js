import React, { useEffect } from 'react';
import empty from './molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        let randomTime = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomTime)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={empty} />
        </div>
    )
}

export default EmptySlot