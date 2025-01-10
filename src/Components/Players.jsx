import '.././App.css'
import { useState } from 'react'

export default function Players(props) { {/*syntax: note how props always has to be a parameter of the function when used*/}

    return (
        <div className="grid-container">

            {/* Table Header */}
            <div className="grid-header">
            {props.header.map((headerElement, index) => (
                <div key={index} className="grid-header-cell">
                    {headerElement}
                </div>
            ))}
            </div>
    
            {/* Table Rows */}
            {props.playersShownList.map((item, rowIndex) => (
            <div key={rowIndex} className="grid-row">
                {props.attributes.map((attribute, colIndex) => (
                <div key={colIndex} className="grid-cell">
                    {item[attribute]} {/* Dynamically show the specified attribute */}
                </div>
                ))}
            </div>
            ))}

        </div>
    )
}