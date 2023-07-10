import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UserPage } from "pages";
import { MarketPage } from "pages";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ HomePage } />
        <Route path="/market" Component={ MarketPage } />
        <Route path="/user" Component={ UserPage } />
      </Routes>
    </BrowserRouter>
  );
};
