"use client";

import { CheckListItem } from "@/types";
import { useState } from "react";

const checkListMockData: CheckListItem[] = [
  { id: 1, name: "걸을 때 바른 자세 체크?", checked: false },
  { id: 2, name: "앉아 있을 때 바른 자세 체크?", checked: false },
  { id: 3, name: "취침시 바른 자세 체크?", checked: false },
];

export default function DailyCheckList() {
  console.log("DailyCheckList");
  const [checkList, setCheckList] = useState(checkListMockData);
  function handleCheck(id: number) {
    console.log("id : ",id, "Checked : ");
    const newCheckList = checkList.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setCheckList(newCheckList);
    console.log("newCheckList : ",newCheckList);
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-300 border-collapse">
        <tbody>
          {checkList.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border border-gray-300 flex items-center">
                <input type="checkbox" id={item.name} className="mr-2" checked={item.checked} onChange={() => handleCheck(item.id)} />
                <label htmlFor={item.name}>{item.name}</label>
              </td>
              <td className="px-4 py-2 border border-gray-300"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 