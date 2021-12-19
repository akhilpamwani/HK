import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import { Comp } from './Components/AllComp/Comp';
import { DB } from './Components/DataBase/DB';



function App() {
  return (
    <>
    <Router>
   <Switch>

<Route path="/" component={Comp} exact/>
<Route path="/farah" component={DB} exact/>

    </Switch>
    </Router>
    </>
  );
}

export default App;
