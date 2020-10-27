import React from 'react'

const SearchInput = (props) => {
    return (
        <input
            className={'searchbar-input'}
            type={'text'}
            value={props.getQuery}
            onChange={props.onChange}
        />
    )
}

export default SearchInput
