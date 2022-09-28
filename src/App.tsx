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
	Statement,
} from './Pages/Main';

import {MainLayout ,
HomeMainLayout,} from './Layouts/MainLayout'

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
							<Route path="/international-sales" element={<InternationalSales />} />
							<Route path='/life-at-home' element={<LifeAtHome />} />
							<Route path='/museum' element={<Museum />} />
							<Route path='/work-with-us' element={<WorkWithUs />} />
							<Route path='/sustainability' element={<Sustainability />} />
							<Route path='/contact' element={<Contact />} />
							<Route path="/newsroom" element={<Newsroom />} />
							<Route path='/statement' element={<Statement />} />



          
          </Route>
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
