import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button className="btn btn-primary" onClick = {() => props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
