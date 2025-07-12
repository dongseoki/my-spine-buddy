interface PageProps {
  params: {
    id: string;
  };
}

export default function DayPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        허리일지 {params.id} 페이지
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 text-center">
          여기에 허리일지 {params.id}의 상세 내용이 표시됩니다.
        </p>
      </div>
    </div>
  );
}
