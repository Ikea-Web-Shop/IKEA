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
	NotFound
} from './Pages/Main';

import {MainLayout ,
HomeLayout,} from './Layouts/MainLayout'
import {UserLayout,UserPanel} from "./Layouts/UserLayout"

function App() {
	return (
		<>
			<Router>
				<ScrollToTop>
					<Routes>
					<Route path='*' element={<NotFound />} />
					<Route path='/login' element={<Login />} />
				
					

					<Route path='/museum' element={<Museum />} />
						<Route element={<HomeLayout />}>
							<Route path='/' element={<Home />} />
						</Route>
						<Route element={<UserLayout />}>
							<Route path='/user-panel' element={<UserPanel />} />
						</Route>
						<Route element={<MainLayout />}>
							<Route path='/about' element={<About />} />
							
							
							<Route path='/behind' element={<Behind />} />
							<Route path="/international-sales" element={<InternationalSales />} />
							<Route path='/life-at-home' element={<LifeAtHome />} />
						
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
