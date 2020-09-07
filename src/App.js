import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { RecommendedVideos } from "pages/RecommendedVideos";
import { SearchPage } from "pages/SearchPage";

import "./App.css";

const App = () => {
  const { menuSidebarCollapse } = useSelector((state) => state.ui);

  useEffect(() => {
    localStorage.setItem("menuSidebarCollapse", menuSidebarCollapse);
    return () => {};
  }, [menuSidebarCollapse]);

  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <div
          className={`page__content ${
            menuSidebarCollapse ? "page__collapse" : ""
          }`}
        >
          <Switch>
            <Route path="/search/:searchTerm" component={SearchPage} />
            <Route path="/" exact component={RecommendedVideos} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
