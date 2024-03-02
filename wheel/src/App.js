import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './components/dashboard_elements/dashboard_landing';

import Landing from './components/landingpage/landing';
import AccountOpening from './components/dashboard_elements/account_opening_form';
import AddingClients from './components/dashboard_elements/adding_clients';
import AddingProduct from './components/dashboard_elements/adding_product';
import PurchaseOrders from './components/dashboard_elements/purchase_order';
import Store from './components/dashboard_elements/store';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route path='dashboard' element={<Dashboard/>}>
            <Route path='open-acc' element={<AccountOpening/>}></Route>
            <Route path='add-clients' element={<AddingClients/>}></Route>
            <Route path='add-products' element={<AddingProduct/>}></Route>
            <Route path='purchase-order' element={<PurchaseOrders/>}></Route>
            <Route path='add-store' element={<Store/>}></Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
