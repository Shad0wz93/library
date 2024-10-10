import React from "react"
import './styleToggle.css'

type ToggleType = 'carre' | 'rond'
type Color = 'red' | 'blue' | 'green'

interface PropsToggle{
    type : ToggleType
    color : Color
}

const Toggle: React.FC<PropsToggle> = ({type,color}) => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox"/>
                <span className={`slider ${color}`}></span>
            </label>


            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle