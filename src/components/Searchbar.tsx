'use client';

import { useState } from 'react';

interface SearchbarProps {
  onSearch: (date: string) => void;
}

export default function Searchbar({ onSearch }: SearchbarProps) {
  const [dateInput, setDateInput] = useState('');

  const handleSearch = () => {
    if (dateInput.trim()) {
      onSearch(dateInput.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">
        보고싶은 허리일지를 입력해주세요
      </h2>
      
      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="YYYYMMDD 형식으로 작성해주세요"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          검색
        </button>
      </div>
    </div>
  );
}
