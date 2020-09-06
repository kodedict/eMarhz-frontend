import React from 'react';

// import components
import HeaderSection from './../component/header';

//import Content
import ProductContent from '../apiContent/product';
import SearchForm from '../apiContent/searchForm';

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