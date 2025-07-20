"use client";

import dynamic from "next/dynamic";
import { CheckListItem } from "@/types";

// 클라이언트 컴포넌트를 동적으로 import
const DailyCheckList = dynamic(() => import("./dailyCheckList"), {
  ssr: false,
  loading: () => <div>체크리스트 로딩 중...</div>
});

interface DailyCheckListWrapperProps {
  initialCheckList: CheckListItem[] | null;
}

export default function DailyCheckListWrapper({ initialCheckList }: DailyCheckListWrapperProps) {
    // throw new Error("test");
  return <DailyCheckList initialCheckList={initialCheckList} />;
} 