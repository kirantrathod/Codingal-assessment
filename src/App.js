import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import * as Routes from "./constants/Routes";
import TrailLessonGrade1to3 from "./components/TrialLesson/Grade1-3/TrailLessonGrade1to3";
import Posts from "./components/Posts/Posts";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path={Routes.TRIAL_LESSON}
            component={TrailLessonGrade1to3}
          />
          <Route exact path={Routes.POSTS} component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
