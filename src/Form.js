import React, { useState } from 'react';
import PouchDB from 'pouchdb';

export const Form = () => {
    const [value, setValue] = useState({});

    const submit = (event) => {
        event.preventDefault();
        let doc = {};
        for(let x in event.target.elements){
            let ele = event.target.elements[x];
            if(ele.localName !== "input") continue;
            doc[event.target.elements[x].name] = event.target.elements[x].value
        }
        var db = new PouchDB('http://localhost:5984/personen');
        doc['_id'] = event.target.elements[0].value
        db.put(doc);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="naam" placeholder="naam"></input>
                <input type="number" min="1" name="leeftijd" placeholder="leeftijd"></input>
                <button type="submit">Button</button>
            </form>
        </div>
    );
}

export default Form;