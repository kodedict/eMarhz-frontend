/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'


const SearchForm = ({userSearch, Result}) => {

    const [search, setSearch] = useState('')
    const [product, setProduct] = useState([])

    const [searchResult, setSearchResult] = useState("")

    useEffect(() => {
        getSearch();
    }, []);
    
    useEffect(() => {
        fetchSearch();
    }, [searchResult]);

    const fetchSearch = () => {
        if (searchResult !== "") {
            
            Result(searchResult)
        }
    }

    const getSearch = async () => {
        const response = await fetch(`http://localhost:4000/api/product`);
        const data = await response.json();

        setProduct(data.data);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        setSearch("");
        query()
        userSearch(search)
        

        
    }

    let query = function () {

        const filtered = product.filter(value => (value.name).includes(search) )
        setSearchResult(filtered)  

        
    }
    


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 searchForm">
                        <form onSubmit={submitSearch}>
                            <div className="form-row">
                                <div className="col-lg-8" style={{padding: "0"}}>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="search"
                                            placeholder="Search Products..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        /></div>
                                </div>
                                <div className="col" style={{padding: "0"}}>
                                    <div className="form-group">
                                        <button className="btn btn-primary text-center" type="submit"><i
                                            className="material-icons">search</i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
 }


export default SearchForm