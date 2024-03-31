import React from "react";
import loadingStyle from "./Loading.module.css";

export default function LoadingSpinner() {
  return (
    <div className={loadingStyle.spinnerContainer}>
      <div className={loadingStyle.spinnerContents}>
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Humming Connect logo"/>
        <p className={loadingStyle.loadingText}>Humming</p>
        <p className={loadingStyle.loadingText}>Connect</p>
        <div className={loadingStyle.loadingSpinner}></div>
      </div>
    </div>
  );
}
