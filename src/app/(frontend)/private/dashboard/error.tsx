"use client";

import ErrorComponent from "../../_components/ErrorComponent/ErrorComponent";

 // Error components must be Client Components


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorComponent
      error={error}
      reset={reset}
    />
  );
}
