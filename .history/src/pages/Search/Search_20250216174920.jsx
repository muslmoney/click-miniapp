import React, { useState, useEffect } from 'react';
import styles from './search.module.css';
import { SearchCard } from '../../components/ProductCard/ProductCard.jsx';
import db from '../../db/db.json';
import Button from '../../components/Buttons/Buttons.jsx';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(db.products);

  useEffect(() => {
    const results = db.products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  }, [query]);

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
          <Button title={'# alar'} />
          <Button title={'# Nxoalar'} />
          <Button title={'# Nonvoyxonalar'} />
          <Button title={'# Nonvnalar'} />
          <Button title={'# Nonvoergrthrnalar'} />
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.filters}>
          <Button title={'Saralash'} icon={'/sorting.png'} />
          <Button title={'Filtrlash'} icon={'/filter.png'} />
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
            <p style=}}>Mahsulot topilmadi</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
