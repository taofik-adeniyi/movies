import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './comps/Header';
import Home from './comps/Home';
import MovieDetail from './comps/MovieDetail';
import PageNotFound from './comps/PageNotFound';
import Footer from './comps/Footer';

function App() {
  return (
    <div>
     <Router>
       <Header />
       <div className="container">

       <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/movie/:movieId" exact component={MovieDetail} />
        <Route component={PageNotFound} />
       </Switch>
       </ div>
       <Footer />
     </Router>
    </div>
  );
}

export default App;
