import React from 'react';
import { Link } from 'react-router-dom';
import './css/CategoryModal.css'

function CategoryModal({open, close }) {   
    return(
        <div>
            {open? (
            <div id='menuModal' className='modal'>
                <div className='modalContent'>
                    <span className='close' onClick={close}>&times;</span>
                    <ul className='modalData'>
                        <li className='category'>
                            <Link className='categoryList' to='/community' onClick={close}>분양</Link>
                        </li>
                        <li className='category'>
                            <Link className='categoryList' to='/community' onClick={close}>
                                커뮤니티
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            ):null}
        </div>
    )
}

export default CategoryModal;
