

interface CommentSectionProps {
  dayId: string;
}

// 서버 액션
async function addComment(formData: FormData) {
  "use server";
  
  const comment = formData.get("comment") as string;
  const dayId = formData.get("dayId") as string;
  
  console.log("=== 댓글 추가 서버 액션 실행 ===");
  console.log("일지 ID:", dayId);
  console.log("댓글 내용:", comment);
  console.log("현재 시간:", new Date().toISOString());
  console.log("================================");
  
  // 여기서 실제로는 데이터베이스에 저장하는 로직이 들어갈 예정
}

export default function CommentSection({ dayId }: CommentSectionProps) {

  // const handleSubmit = async (formData: FormData) => {
  //   await addComment(formData);
  // };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">댓글</h3>
      
      {/* 댓글 입력 폼 */}
      <form action={addComment} className="mb-6">
        <input type="hidden" name="dayId" value={dayId} />
        <textarea
          name="comment"
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="댓글을 입력하세요..."
          rows={4}
          required
        />
        <div className="flex justify-end mt-3">
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            댓글 달기
          </button>
        </div>
      </form>
      
      {/* 댓글 목록 (예시) */}
      <div className="space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-sm">사용자1</span>
                <span className="text-gray-500 text-xs">2024.01.15</span>
              </div>
              <p className="text-gray-700">오늘 허리 상태가 좋아 보이네요! 운동 꾸준히 하시는 게 정말 대단합니다.</p>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-sm">사용자2</span>
                <span className="text-gray-500 text-xs">2024.01.14</span>
              </div>
              <p className="text-gray-700">저도 비슷한 증상이 있었는데, 스트레칭이 도움이 많이 됐어요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 