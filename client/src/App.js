import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/home"
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import MyGreenZone from "./Pages/mygreenzone"
import MyCal from "./Pages/Interface/Monitoring/MyCal"
import Budgeting from "./Pages/Interface/Planning/Budgeting"
import Designing from "./Pages/Interface/Planning/Designing"
import SeedStarting from "./Pages/Interface/Planning/SeedStarting"
import People from "./Pages/Communicate/People"
import Forums from "./Pages/Communicate/Forums"
import Projects from "./Pages/Communicate/Projects"
import IGCs from "./Pages/Resources/Information/IGCs"
import Podcasts from "./Pages/Resources/Information/Podcasts"
import Books from "./Pages/Resources/Information/Books"
import Blogs from "./Pages/Resources/Information/Blogs"
import SeedCompanies from "./Pages/Resources/Information/SeedCompanies"
import MyGallery from "./Pages/Resources/Gallery"
import IPM from "./Pages/Resources/IPM"



function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/mygreenzone" component={MyGreenZone} />
					<Route exact path="/my-cal" component={MyCal} />
					<Route exact path="/budgeting" component={Budgeting} />
					<Route exact path="/layout" component={Designing} />
					<Route exact path="/seed-starting" component={SeedStarting} />
					<Route exact path="/people" component={People} />
					<Route exact path="/forums" component={Forums} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/garden-centers" component={IGCs} />
					<Route exact path="/podcasts" component={Podcasts} />
					<Route exact path="/books" component={Books} />
					<Route exact path="/blogs" component={Blogs} />
					<Route exact path="/seed-companies" component={SeedCompanies} />
					<Route exact path="/gallery" component={MyGallery} />
					<Route exact path="/ipm" component={IPM} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
