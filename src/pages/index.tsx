import { lazy } from "react";

const HomePage = lazy(() => import("./home"));
const MarketPage = lazy(() => import("./market"));
const UserPage = lazy(() => import("./user"));

export {
  HomePage,
  MarketPage,
  UserPage
}