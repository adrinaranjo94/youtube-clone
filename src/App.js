import React from "react";
import "./App.css";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { RecommendedVideos } from "pages/RecommendedVideos";
import { Switch, Route } from "react-router-dom";
import { SearchPage } from "pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Switch>
          <Route path="/search/:searchTerm" component={SearchPage} />
          <Route path="/" exact component={RecommendedVideos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
