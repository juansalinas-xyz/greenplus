"use client";

import ErrorComponent from "src/app/(frontend)/_components/ErrorComponent/ErrorComponent";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorComponent error={error} reset={reset} />;
}
