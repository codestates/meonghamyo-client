import React, { Component } from 'react';
import './css/CategoryModal.css'

function CategoryModal({open, close}) {   
    return(
        <div>
            {open? (
            <div id='menuModal' className='modal'>
                <div className='modalContent'>
                    <span className='close' onClick={close}>&times;</span>
                    <ul className='modalData'>
                        <li className='category'>분양</li>
                        <li className='category'>커뮤니티</li>
                    </ul>
                </div>
            </div>
            ):null}
        </div>
    )
}

export default CategoryModal;