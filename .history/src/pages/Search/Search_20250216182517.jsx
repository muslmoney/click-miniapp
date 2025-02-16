import React, { useState, useEffect } from 'react';
import styles from './search.module.css';
import { SearchCard } from '../../components/ProductCard/ProductCard.jsx';
import db from '../../db/db.json';
import Button from '../../components/Buttons/Buttons.jsx';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const popularQueries = ['Samarqand non', 'Nonvoyxonalar', 'Arzon non'];

  useEffect(() => {
    let results = db.products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filterType === 'sale') {
      results = results.filter((product) => product.salePrice !== null);
    } else if (filterType === 'cheap') {
      results = results.filter((product) => product.price < 50000);
    } else if (filterType === 'bread') {
      results = results.filter((product) => product.type.toLowerCase() === 'bread');
    }

    if (sortOrder === 'asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      results.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(results);
  }, [query, sortOrder, filterType]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.title}>Qidiruv sahifasi</h2>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Masalan: samarqand non"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>
            <img src="/search.png" alt="search" />
          </button>
        </div>
      </section>

      <section className={styles.popular}>
        <h2>Mashhurlari</h2>
        <div className={styles.buttons}>
          {popularQueries.map((item, index) => (
            <Button key={index} title={`# ${item}`} onClick={() => setQuery(item)} />
          ))}
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.filters}>
          <Button
            title={'Saralash'}
            icon={sortOrder === 'asc' ? '/sort.png' : '/sort-up.png'}
            onClick={toggleSortOrder}
          />
          
          <div>
            <Button title={'Filtrlash'} icon={'/filter.png'} onClick={() => 
              setShowFilters(!showFilters)} 
            />
            {showFilters && (
              <div>
                <button onClick={() => setFilterType('sale')}>So Sкидкой</button>
                <button onClick={() => setFilterType('cheap')}>Цена до 50 000</button>
                <button onClick={() => setFilterType('bread')}>Только хлеб</button>
                <button onClick={() => setFilterType(null)}>Сбросить фильтр</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <SearchCard
                key={product.id}
                title={product.title}
                img={product.img}
                salePrice={product.salePrice}
                price={product.price}
              />
            ))
          ) : (
            query && <p>Mahsulot topilmadi</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
