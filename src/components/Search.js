import React from 'react';

const Search = () => {
    return (
        <>
            <div className='search' >
                <input type="text" name='searchBar' placeholder='Rechercher' />
            </div>
            <div className='search_results'>
                <div className='search_result'> donnée</div>
            </div>
        </>
    );
}
export default Search; 