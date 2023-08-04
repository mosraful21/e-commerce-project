import React from 'react';
import Banner from '../Banner/Banner';
import FlashSalesProducts from '../FlashSalesProducts/FlashSalesProducts';
import Categories from '../Categories/Categories';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts';
import TopRatedProducts from '../TopRatedProducts/TopRatedProducts';
import Vendors from '../Vendors/Vendors';
import Footer from '../../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FlashSalesProducts/>
            <Categories/>
            <FeatureProducts/>
            <RecommendedProducts/>
            <TopRatedProducts/>
            <Vendors/>
            <Footer/>
        </div>
    );
};

export default Home;