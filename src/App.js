import Layout from "./components/Layout";
import GoodMorningSection from "./components/GoodMorningSection";
import RecentlyPlayed from "./components/RecentlyPlayed";
import ShowsToTry from "./components/ShowsToTry";
import ArtistSection from "./components/ArtistSection";
import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Route path="/" exact render={(routerProps) => <Layout>
        <GoodMorningSection/>
        <RecentlyPlayed/>
        <ShowsToTry/>
      </Layout> } />
      <Route path="/artist/:artist" render={(routerProps) => <Layout>
        <ArtistSection artist={routerProps.match.params.artist}/>
      </Layout>}/>
    </Router>
    </>
  );
}

export default App;
