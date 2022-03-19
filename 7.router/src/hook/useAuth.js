import React from "react";
import {AuthContext} from "../hoc/AuthProvider";

export function useAuth() {
    return React.useContext(AuthContext);
}
