import React from 'react'
import Person from './Person';

function NameList() {

    const persons =[ {
        id: 1,
        name: 'Manish',
        age: 28,
        skill: 'Java'
    }, {
        id: 2,
        name: 'Kumar',
        age: 29,
        skill: 'Angular'

    },{
        id:3,
        name:'Singh',
        age:30,
        skill:'React'
    }
]

const personList = persons.map(person => <Person person = {person}/>)
   
    return <div>{personList}</div>;
}

export default NameList
