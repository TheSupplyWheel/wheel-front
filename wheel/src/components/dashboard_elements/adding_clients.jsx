import './../../util/util.css'
import './../../styles/addClients.css'
import { useState, useReducer, createRef } from 'react';
import Apple from './../../icons/apple.png'

const initialState = {
    name : '',
    address : '',
    business : '',
    phone : '',
    fixed : true,
    range : false
}

function ClientReducer(state, action){
    switch(action.type){
        case 'name' : 
            return {state, address : action.payload.address, name : action.payload.name, business : action.payload.business, phone : action.payload.phone}
        case 'address' : 
            return {state, address : action.payload.address, name : action.payload.name, business : action.payload.business, phone : action.payload.phone}
        case 'business' : 
            return {state, address : action.payload.address, name : action.payload.name, business : action.payload.business, phone : action.payload.phone}
        case 'phone' : 
            return {state, address : action.payload.address, name : action.payload.name, business : action.payload.business, phone : action.payload.phone}
        case 'fixed' : 
            return {state, fixed : true, range : false}
        case 'range' : 
            return {state, fixed : false, range : true}
        default : 
            return {state}
    }
}

function AddingClients(){

    const name = createRef()
    const business = createRef()
    const address = createRef()
    const phone = createRef()


    const [Client, dispatchClient] = useReducer(ClientReducer, initialState)

    function nameOfClient(el){
        dispatchClient({type : 'name', payload : {
            name : name.current.value,
            business : business.current.value,
            address : address.current.value,
            phone : phone.current.value,
        }})
    }

    function addressOfClient(el){
        dispatchClient({type : 'address', payload : {
            name : name.current.value,
            business : business.current.value,
            address : address.current.value,
            phone : phone.current.value,
        }})
    }

    function businessOfClient(el){
        dispatchClient({type : 'business', payload : {
            name : name.current.value,
            business : business.current.value,
            address : address.current.value,
            phone : phone.current.value,
        }})
    }

    function phoneOfClient(el){
        dispatchClient({type : 'phone', payload : {
            name : name.current.value,
            business : business.current.value,
            address : address.current.value,
            phone : phone.current.value,
        }})
    }

    function shiftToFixedPrice(el){
        dispatchClient({type : 'fixed', payload : {
            name : name.current.value,
            business : business.current.value,
            address : address.current.value,
            phone : phone.current.value,
        }})
    }

    function shiftToRangePrice(el){
        dispatchClient({type : 'range', payload : {
            name : name.current.value,
            business : business.current.value,
            address : address.current.value,
            phone : phone.current.value,
        }})
    }

    return(
        <div className="addingClients grid grid-8-col">
            <div className='formOfAddingClients pad16 flex flex-dir gap16'>
                <h2 className='heading'>Add Clients + </h2>
                <input ref={name} onChange={nameOfClient} className='inp__updated' placeholder='Client Name*' type='text' />
                <input ref={address} onChange={addressOfClient} className='inp__updated' placeholder='Client Address*' type='text' />
                <input ref={business} onChange={businessOfClient} className='inp__updated' placeholder='Client Business Name*' type='text' />
                <input ref={phone} onChange={phoneOfClient} className='inp__updated' placeholder='Client Phone Number*' type='number' />
                <button className='addClientBtn white__btn'>Add Client</button>
            </div>
            <div className='PriceSettingForClients flex flex-dir gap16'>
                <div className='topHeading flex flex-dir gap16'>
                    <h4 className='secHeading'>Price Setting for - {Client.name}</h4>
                    <div className='info pad16 grid grid-2-col gap16'>
                        <p className='client_name credentialInfo'>Client name - {Client.name}</p>
                        <p className='client_business credentialInfo'>Client business - {Client.business}</p>
                        <p className='client_address credentialInfo'>Client address - {Client.address}</p>
                        <p className='client_address credentialInfo'>Client phone number - {Client.phone}</p>
                        <p className='client_date credentialInfo'>Joined Date - {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
                <div className='Middle flex flex-dir gap8'>
                    <p className='priceSetting'>Set Prices for Client</p>
                    <div className='priceOptions flex flex-1 gap16'>
                        <button onClick={shiftToFixedPrice} className={Client.fixed? 'priceOpt border_btn border_btn_fill' : 'priceOpt border_btn'}>Fixed Price</button>
                        <button onClick={shiftToRangePrice} className={Client.range? 'priceOpt border_btn border_btn_fill' : 'priceOpt border_btn'}>Range Price</button>
                    </div>
                    <div className='listOfProducts grid grid-4-col gap16'>
                        <div className='products pad16 flex flex-dir gap16'>
                            <div className='flex flex-1 gap16'>
                                <img src={Apple} className='icon' alt='apple'/>
                                <p className='prdname'>Apple</p>
                            </div>
                            <p className='prdname prdpricelabel'>Add price per kg.</p>
                            {Client.fixed && <input className='input' placeholder='price' type='number'/>}
                            {Client.range && <div className='range grid grid-1-col gap8'>
                                <input className='input' placeholder='Min' type='number'/>
                                <input className='input' placeholder='Max' type='number'/>
                            </div>}
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddingClients;