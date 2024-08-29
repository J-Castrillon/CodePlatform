import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../views/Register";
import { PublicLayout } from "../layouts/public/PublicLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>z
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
