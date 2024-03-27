import React from "react";
import loadingStyle from "./Loading.module.css";

export default function LoadingSpinner() {
  return (
    <div className={loadingStyle.spinnerContainer}>
      <div className={loadingStyle.loadingSpinner}>
      </div>
    </div>
  );
}
