import React from "react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div className="text-center">
      <h2> Verification successful.</h2>
      <br></br>
      <p>
        <Link to="/">Go to Verification Page</Link>
      </p>
    </div>
  );
}
