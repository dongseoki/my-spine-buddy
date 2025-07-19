import { ReactNode, Suspense } from "react";
import Searchbar from "@/components/Searchbar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Searchbar onSearch={(enteredDate) => {alert(`search button clicked, entered date : ${enteredDate}`);}} />
      </Suspense>
      {children}
    </div>
  );
}
