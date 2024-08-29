import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../views/Register";
import { PublicLayout } from "../layouts/public/PublicLayout";
import { Home } from "../views/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={< Home />}/>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
