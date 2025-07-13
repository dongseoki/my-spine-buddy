'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            허리 일지 search Page
          </h1>

          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Query String:
            </h2>
            <p className="text-sm text-gray-600 break-all">
              {queryString || '쿼리 파라미터가 없습니다.'}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              URL에 쿼리 파라미터를 추가하면 위에 표시됩니다. 예: /search?category=exercise&date=2024-01-01
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
