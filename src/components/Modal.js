import React,{useEffect} from 'react'

function Modal({setShowModal}) {

    useEffect(() => {
        setTimeout(() => {
            setShowModal(false)
        }, 3000);
    }, [])

    return (
        <div className='modal'>
            <h4>Added To Cart</h4>
        </div>
    )
}

export default Modal
