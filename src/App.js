import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
	return (
		<div>
			PageOne
			{/* using <a> is a Bad !! Approach */}
			<Link to='/pageTwo'>Go to Page 2</Link>
		</div>
	);
};

const PageTwo = () => {
	return (
		<div>
			PageTwo
			{/* using <a> is a Bad !! Approach */}
			<Link to='/'>Go to Page 1</Link>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path='/' exact component={PageOne} />
					<Route path='/pageTwo' component={PageTwo} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
