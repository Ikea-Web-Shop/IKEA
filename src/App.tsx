import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './Components';

import {
	About,
	Home,
	Login,
	Behind,
	InternationalSales,
	LifeAtHome,
	Museum,
	WorkWithUs,
	Newsroom,
	Sustainability,
	Contact,
} from './Pages/Main';

import MainLayout from './Layouts/MainLayout/MainLayout';

import HomeMainLayout from './Layouts/MainLayout/HomeMainLayout';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route element={<HomeMainLayout />}>
							<Route path='/' element={<Home />} />
						</Route>
						<Route element={<MainLayout />}>
							<Route path='/about' element={<About />} />
							<Route path='/login' element={<Login />} />
							<Route path='/behind' element={<Behind />} />
							<Route
								path='/international-sales'
								element={<InternationalSales />}
							/>
							<Route path='/life-at-home' element={<LifeAtHome />} />
							<Route path='/museum' element={<Museum />} />
							<Route path='/work-with-us' element={<WorkWithUs />} />
							<Route path='/museum' element={<Museum />} />

							<Route path='/museum' element={<Museum />} />
						</Route>
					</Routes>
				</ScrollToTop>
			</Router>
		</>
	);
}

export default App;
