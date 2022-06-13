import React from 'react'
import Item from './Item'

export const ItemList = ({users}) => {
    return (
        <div>
            {users.map(user => <Item user={user}/>)}
        </div>
    )
}


export default ItemList
