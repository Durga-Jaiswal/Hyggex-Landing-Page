import { useState } from 'react'
import {CiCircleMinus, CiCirclePlus } from "react-icons/ci";
const SingleQuestion = ({title, info}) => {
const [showInfo, setShowInfo] = useState(false)
return (
    <>
    <div>
        <header className='question'>
            <h4>{title}</h4>
            <button className="icon-btn" onClick={() => setShowInfo(!showInfo)}>{showInfo? <CiCirclePlus className="faq-icon" /> : <CiCircleMinus className="faq-icon"/>}
            </button>
        </header>
        {showInfo && <p className="faq-ans">{info}</p>}
    </div>
    </>
)
}
export default SingleQuestion;