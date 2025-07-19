'use client';

import Searchbar from './Searchbar';

export default function SearchbarWrapper() {
  const handleSearch = (enteredDate: string) => {
    alert(`search button clicked, entered date : ${enteredDate}`);
    console.log("mytest");
  };

  return <Searchbar onSearch={handleSearch} />;
} 