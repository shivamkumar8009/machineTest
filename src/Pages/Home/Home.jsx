import  { useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Cards searchTerm={searchTerm} />
    </div>
  )
}

export default Home