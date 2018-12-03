import React from "react";

import { LocalStorage } from "../utils/browser-storage";

export const withLoginFallback = (WrappedComponent) => {
    return (props) => {
        if (LocalStorage.hasItem("token")) {
            props.history.push("/login");
            return null;
        }

        return <WrappedComponent { ...props } />
    };
};
