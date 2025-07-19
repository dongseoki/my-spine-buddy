import { DayDetailResponseBody } from "@/app/api/day-detail/[dayValue]/route";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

import DailyCheckList from "../../../components/dailyCheckList";
import { notFound } from "next/navigation";


// export const dynamic = "force-dynamic";
// 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
// 1. auto : 기본값, 아무것도 강제하지 않음
// 2. force-dynamic : 페이지를 강제로 Dynamic 페이지로 설정
// 3. force-static : 페이지를 강제로 Static 페이지로 설정
// 4. error : 페이지를 강제로 Static 페이지 설정 (설정하면 안되는 이유 -> 빌드 오류)

export default async function DayPage({ params }: PageProps) {
  const { id } = await params;
  
  const dayDetailResponse = await fetch(
    `http://localhost:3000/api/day-detail/${id}`
  );
  if (!dayDetailResponse.ok) {
    console.error("Failed to fetch day detail");
    if (dayDetailResponse.status === 404) {
      notFound();
    }
    return <div>Failed to fetch day detail</div>;
  }
  const dayDetailResponseBody: DayDetailResponseBody =
    await dayDetailResponse.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        허리일지 {id} 페이지
      </h1>
      <h2>오늘의 내 감정 {dayDetailResponseBody.feeling}</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-600 text-center">
          여기에 허리일지 {id}의 상세 내용이 표시됩니다.
        </p>
      </div>
      <DailyCheckList initialCheckList={dayDetailResponseBody.checkList} />
    </div>
  );
}
