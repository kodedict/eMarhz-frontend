
import React,{useState, useEffect} from 'react';



// import components
import HeaderSection from './../component/header';

//import Content

import SearchForm from './../component/home/searchForm';
import SearchItem from './../component/home/searchItem';

import ProductContent from './../component/home/product';

const Home = () => {
    
    const [fetch,setSFetch] = useState("")
    const [searchResult,setSearchResult] = useState([])
    const [searchOFF, setSearchOFF] = useState(true)

    useEffect(() => {
        add();
    }, [fetch]);

    const add = () => {
        if (fetch !== "") {
            setSearchOFF(false)
        }
    }

   const getSearch = (userSearch) =>{
    
       setSFetch(userSearch)
  
   }

    const getSearchResult = (Result) =>{
        setSearchResult(Result)
    }
    
    const clearSearch = () => {
        setSearchOFF(true)
    }

    return(
        <div>
            <HeaderSection />
            <SearchForm userSearch={getSearch} Result={getSearchResult} />
            {searchOFF? (
                <ProductContent />
                
            ) : (
                    <div>
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p
                                            style={{ cursor: "pointer" }}
                                            onClick={clearSearch}
                                        >Clear search</p>
                                        <h3>Showing results for: <span className="text-capitalize">{fetch}</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-50 mb-50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                        {searchResult.map((data, key) => (
                            <SearchItem
                                key={key}
                                product={data}
                            />
                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
            ) }
        </div>
    )
};

export default Home