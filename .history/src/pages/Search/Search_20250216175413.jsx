import React, { useState, useEffect } from 'react';
import styles from './search.module.css';
import { SearchCard } from '../../components/ProductCard/ProductCard.jsx';
import db from '../../db/db.json';
import Button from '../../components/Buttons/Buttons.jsx';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null); // null, 'asc', 'desc'
  const [filterSale, setFilterSale] = useState(false); // true = показывать только скидки

  useEffect(() => {
    let results = db.products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filterSale) {
      results = results.filter((product) => product.salePrice !== null);
    }

    if (sortOrder === 'asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      results.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(results);
  }, [query, sortOrder, filterSale]);

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
      
      <section className={styles.products}>
        <div className={styles.filters}>
          <Button title={'Saralash'} icon={'/sorting.png'} onClick={() => 
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} 
          />
          <Button title={'Filtrlash'} icon={'/filter.png'} onClick={() => 
            setFilterSale(!filterSale)} 
          />
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
