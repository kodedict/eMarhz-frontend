
import React from 'react';



// import components
import HeaderSection from './../component/header';

//import Content

import SearchForm from './../component/home/searchForm';

import ProductContent from './../component/home/product';

const Home = () => {
    
    

    return(
        <div>
            <HeaderSection />
            <SearchForm />
            <ProductContent />
        </div>
    )
};

export default Home