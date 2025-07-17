import { NextRequest, NextResponse } from "next/server";

// 응답 타입 정의
interface CheckListItem {
  id: number;
  name: string;
  checked: boolean;
}

interface DayDetailResponse {
  feeling: string;
  checkList: CheckListItem[];
}

const dayValueSampleResponse: DayDetailResponse = {
  feeling: "good",
  checkList: [
    { id: 1, name: "걸을 때 바른 자세 체크?", checked: false },
    { id: 2, name: "앉아 있을 때 바른 자세 체크?", checked: false },
    { id: 3, name: "취침시 바른 자세 체크?", checked: false },
  ],
};

const dayDetailMockData: Record<string, DayDetailResponse> = {
  "20250713": {
    feeling: "good",
    checkList: [
      { id: 1, name: "걸을 때 바른 자세 체크?", checked: false },
      { id: 2, name: "앉아 있을 때 바른 자세 체크?", checked: false },
      { id: 3, name: "취침시 바른 자세 체크?", checked: false },
    ],
  },
  "20250712": {
    feeling: "bad",
    checkList: [
      { id: 1, name: "걸을 때 바른 자세 체크?", checked: true },
      { id: 2, name: "앉아 있을 때 바른 자세 체크?", checked: true },
      { id: 3, name: "취침시 바른 자세 체크?", checked: false },
    ],
  },
};

export async function GET(
  req: NextRequest,
  { params }: { params: { dayValue: string } }
): Promise<NextResponse<DayDetailResponse | { error: string }>> {
  const dayValue = params.dayValue;
  if (dayDetailMockData[dayValue]) {
    return NextResponse.json(dayDetailMockData[dayValue]);
  } else {
    return NextResponse.json({ error: "Day not found" }, { status: 404 });
  }
}
