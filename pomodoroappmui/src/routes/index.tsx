import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";

export const AppRoutes=()=>{
    return(
        <Routes>
            <div className="container"></div>
            <Route path="/pagina inicial" element={<p>página inicial</p>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        </Routes>

    );
}