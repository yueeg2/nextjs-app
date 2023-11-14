import React from "react"
import Image from "next/image";
import styles from "./login.module.css";

const LoadingAmination = () => {

    return (
        <div id="loading"

            style={{ position: "absolute", top: 0 }}
            className="w-full h-full z-[1000] fixed bg-[transparent] backdrop-blur backdrop-blur-md items-center justify-center flex">
            <div className="text-center">
                <span style={{ color: "black" }}>Loading...</span>
            </div>

        </div>
    )
}

export default LoadingAmination;
