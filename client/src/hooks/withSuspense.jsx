import React, { Suspense } from "react";

const WithSuspense = ({ Children }) => {
  return <Suspense fallback={<p>Loading...</p>}>{Children}</Suspense>;
};

export default WithSuspense;
