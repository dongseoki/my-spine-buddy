import { ReactNode, Suspense } from "react";
import SearchbarWrapper from "@/components/SearchbarWrapper";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <SearchbarWrapper />
      </Suspense>
      {children}
    </div>
  );
}
