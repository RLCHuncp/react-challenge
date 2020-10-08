/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../componentsx/Header';
import Search from '../componentsx/Search';
import Categories from '../componentsx/Categories';
import Carousel from '../componentsx/Carousel';
import CarouselItem from '../componentsx/CarouselItem';
import Footer from '../componentsx/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';
const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='My list'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((trend) => <CarouselItem key={trend.id} {...trend} />)
          }
        </Carousel>
      </Categories>
      <Categories title='Original de Platzi video'>
        <Carousel>
          {
            initialState.originals.map((original) => <CarouselItem key={original.id} {...original} />)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
