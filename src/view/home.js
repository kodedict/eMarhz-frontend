
import React,{useState} from 'react';



// import components
import HeaderSection from './../component/header';

//import Content

import SearchForm from './../component/home/searchForm';

import ProductContent from './../component/home/product';

const Home = () => {
    
    const [search,setSearch] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [searchOFF, setSearchOFF] = useState(true)

   const getSearch = (userSearch) =>{
    setSearch(userSearch)
    if(search !== ""){
        setSearchOFF(false)
    }
   }

   const getSearchResult = (SearchResult) =>{
       setSearchResult(SearchResult)
   }

    return(
        <div>
            <HeaderSection />
            <SearchForm userSearch={getSearch} SearchResult={getSearchResult} />
            {searchOFF? (
                <ProductContent />
            ) : 'notthing' }
        </div>
    )
};

export default Home