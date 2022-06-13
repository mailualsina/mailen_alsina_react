import React, {useState, useEffect} from 'react'
import ItemList from '../components/ItemList'

function ItemListContainer({}) {
    const[ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => respuesta.json())
            .then(respuesta => setUsers(respuesta))
            .catch(error => console.error("Error: ", error))

    },[])

    console.log(users)
            
    return (
        <div>

            <ItemList users={users}/>

        </div>
    )
    
}

export default ItemListContainer
