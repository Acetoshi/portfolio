import { Suspense } from "react";
import CodeComparator from "../components/CodeComparator";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CodeComparator />
    </Suspense>
  );
}
