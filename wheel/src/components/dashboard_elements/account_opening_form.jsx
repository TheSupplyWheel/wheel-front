import './../../util/util.css'
import './../../styles/accOpen.css'
import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import Check from './../../icons/checked.png'
import Cross from './../../icons/multiply.png'


const initialState = {
    basic : true,
    kyc : false,
    basic_complete: false,
    Kyc_complete: false,
    proceed : false,
    kyc_verified : false
}

const proceedToNextReducer = (state, action)=>{
    switch(action.type){
        case 'basic':
            return {state, basic : false, kyc : false, proceed : false, basic_complete: false}
        case 'kyc':
            return {state, kyc : true, basic : false, proceed : false, basic_complete: true, Kyc_complete: false}
        case 'proceed':
            return {state, kyc : false, basic : false, proceed : true, basic_complete: true, Kyc_complete: true}
        default : 
            return {state}
    }
}

function AccountOpening(){

    const [account, dispatchAccount] = useReducer(proceedToNextReducer, initialState)

    function ProceedToKYC(el){
        el.preventDefault()
        dispatchAccount({type : 'kyc'})
    }

    function ProceedToFinal(el){
        el.preventDefault()
        dispatchAccount({type : 'proceed'})
    }

    return(
      <div className='acc_opening flex flex-1 flex-dir gap16'>
        <div className='designBool'></div>
        <div className='designBool2'></div>
        
        <h3 className='elementheading'>Account opening</h3>
        {account.basic &&
            <form className='openAccForm flex flex-dir gap16'>
                <h3 className='elementheading__'>Open Your Doors of Efficiency !!</h3>
                <div className='inputs grid grid-2-col gap16 '>
                    <input placeholder='Company*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='Owner Name*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='Address*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='GSTIN*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='CataGory*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='Multi/Single*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='Reg. Number*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='Mobile Number*' className='inp' type='number' name='nameOfCompany'/>
                    <input placeholder='Email Id*' className='inp' type='text' name='nameOfCompany'/>
                    <input placeholder='Upload Company logo*' className='inp' type='file' name='nameOfCompany'/>
                    <button onClick={ProceedToKYC} className='submitAccOpenform elementheading__'>Open Your Account</button>
                </div>
            </form>
        }

        {account.kyc &&
            <form className='openAccForm flex flex-dir gap16'>
                <h3 className='elementheading__'>Complete your KYC</h3>
                <div className='inputs grid grid-2-col gap16 '>
                    <div className='crredentials flex flex-dir gap8' >
                        <label className='label'>Upload Aadhar card</label>
                        <input placeholder='aadhar*' className='inp' type='file' name='aadhar card'/>
                    </div>
                    <div className='crredentials flex flex-dir gap8' >
                        <label className='label'>Upload Pan card</label>
                        <input placeholder='pan *' className='inp' type='file' name='aadhar card'/>
                    </div>
                    <div className='crredentials flex flex-dir gap8' >
                        <label className='label'>Upload Your Image</label>
                        <input placeholder='upload image *' className='inp' type='file' name='aadhar card'/>
                    </div>
                    <div className='crredentials flex flex-dir gap8' >
                        <label className='label'>Upload store Image</label>
                        <input placeholder='store image *' className='inp' type='file' name='aadhar card'/>
                    </div>
                    <button onClick={ProceedToFinal} className='submitAccOpenform elementheading__'>Complete your KYC</button>
                </div>
            </form>
        }

        {account.proceed && 
            <div className='check grid grid-3-col gap96'>
                <div className='checks flex flex-1 gap24'>
                    <img src={Check} className='icon' alt='check'/>
                    <p className='checkNote'>Business Created</p>
                </div>
                <div className='checks flex flex-1 gap24'>
                    <img src={Check} className='icon' alt='check'/>
                    <p className='checkNote'>KYC Complated</p>
                </div>
                <div className='checks flex flex-1 gap24'>
                    <img src={Cross} className='icon' alt='check'/>
                    <p className='checkNote'>KYC Verified (takes 24hr)</p>
                </div>
                <Link to='/dashboard/add-clients' className='proccedToFinish elementheading__'>Add Your Clients</Link>
            </div>
        }
        
      </div>
    )
  }

export default AccountOpening