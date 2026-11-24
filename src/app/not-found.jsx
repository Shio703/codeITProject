import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="notFoundCont">
      <h1>Page Not Found</h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default NotFound;
