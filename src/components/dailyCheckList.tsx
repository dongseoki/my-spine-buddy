"use client";

export default function DailyCheckList() {
  console.log("DailyCheckList");
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-300 border-collapse">
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300 flex items-center">
              <input type="checkbox" id="walk" className="mr-2" />
              <label htmlFor="walk">걸을 때 바른 자세 체크?</label>
            </td>
            <td className="px-4 py-2 border border-gray-300"></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300 flex items-center">
              <input type="checkbox" id="sit" className="mr-2" />
              <label htmlFor="sit">앉아 있을 때 바른 자세 체크?</label>
            </td>
            <td className="px-4 py-2 border border-gray-300"></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300 flex items-center">
              <input type="checkbox" id="sleep" className="mr-2" />
              <label htmlFor="sleep">취침시 바른 자세 체크?</label>
            </td>
            <td className="px-4 py-2 border border-gray-300"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 