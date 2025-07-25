import { DayDetailResponseBody } from "@/app/api/day-detail/[dayValue]/route";
import DailyCheckListWrapper from "../../../components/DailyCheckListWrapper";
import CommentSection from "../../../components/CommentSection";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DayPage({ params }: PageProps) {
  // await delay(1500);
  const { id } = await params;
  
  const dayDetailResponse = await fetch(
    `http://localhost:3000/api/day-detail/${id}`
  );
  if (!dayDetailResponse.ok) {
    console.error("Failed to fetch day detail");
    // if (dayDetailResponse.status === 404) {
    //   notFound();
    // }
    throw new Error("Failed to fetch day detail");
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
      <DailyCheckListWrapper initialCheckList={dayDetailResponseBody?.checkList || []} />
      
      {/* 댓글 섹션 */}
      <CommentSection dayId={id} />
    </div>
  );
}
