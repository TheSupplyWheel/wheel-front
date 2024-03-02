import './../../util/util.css'
import './../../styles/dashboard_landing.css'
import { Link, Outlet } from 'react-router-dom'

function Navigation(){
  return(
    <div className='nav pad16' >
      <Link to='/' className='logoContainer flex flex-1 gap8'>
        <div className='logoBox'></div>
        <h1 className='name'>TheSupplyWheel</h1>
      </Link>
      <div className='menuContainerOne flex flex flex-dir gap8'>
        <p className='menuHead'>Main Menu</p>
        <Link className='navLinkBtn' to='open-acc'>Open Account</Link>
        <Link className='navLinkBtn' to='add-products'>Add Products</Link>
        <Link className='navLinkBtn'  to='add-clients'>Add Clients</Link>
        <Link className='navLinkBtn' to='purchase-order'>Add Purchases</Link>
        <Link className='navLinkBtn' to='/'>Add Sales</Link>
        <Link className='navLinkBtn' to='add-store'>Setup your store</Link>
        <Link className='navLinkBtn' to='/'>Credit & Debit note</Link>
        <Link className='navLinkBtn' to='/'>Analytics</Link>
        <Link className='navLinkBtn' to='/'>Book loader</Link>
        <Link className='navLinkBtn' to='/'>Make payments</Link>
        <Link className='navLinkBtn' to='/'>handle clients</Link>
      </div>
      <hr></hr>
      <div className='menuContainerTwo flex flex flex-dir'>
        <Link className='navLinkBtn' to='/'>Settings</Link>
        <Link className='navLinkBtn' to='/'>Logout</Link>
      </div>
      <hr></hr>
      <div className='feedback flex flex-dir flex-1 '>
        <Link className='navLinkBtn navLinkBtn_feedback feedback' to='/'>Give Feedback</Link>
      </div>
    </div>
  )
}

function FlowPage(){
  return(
    <div className='flowpage' >
      <div className='topFlowpage flex flex-2 pad16'>
        <h2 className='welcome'>Welcome to Dashborad tarsem singh</h2>
        
      </div>
        <div className='displayofelements pad16'>
          <div className='netDisplay pad16'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

function Dashboard(){
    return(
      <div className='dashboard grid grid-12-col'>
        <Navigation />
        <FlowPage/>
      </div>
    )
}

export default Dashboard;