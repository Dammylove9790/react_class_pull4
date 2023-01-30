import {Link} from 'react-router-dom';
import { useState } from 'react';

function SearchButton() {
    const [searchWord, setsearchWord] = useState('')
    const searchItem = (searchvalue) => {
        setsearchWord(searchvalue)
        console.log(searchWord) 
        // fetch('https://dummyjson.com/products/search?q=phone')
    } 

    // useEffect(() => {
    //     searchItem()
    // }, [])


  return (
    <div>
      <input type="text" name="search" onChange={(e) => searchItem(e.target.value) } />
        <Link to={`/searchproduct/${searchWord}`}>Search</Link>
    </div>
  )
}

export default SearchButton;
