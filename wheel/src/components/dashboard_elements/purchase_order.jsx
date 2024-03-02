import './../../util/util.css'
import './../../styles/purchaseOrder.css'
import { useReducer } from 'react'
import Download from './../../icons/arrow.png'

const initialState = {
    addPurchaseOrder : true,
    approve : false,
    prevOrder : false
}

const purchaseorderReducer = (state, action)=>{
    switch(action.type){
        case 'addPurchase' :
            return {state, addPurchaseOrder : true, approve: false, prevOrder: false}
        case 'approve' :
            return {state, addPurchaseOrder : false, approve: true, prevOrder: false}
        case 'prevOrder' :
            return {state, addPurchaseOrder : false, approve: false, prevOrder: true}
        default :
            return {state}

    }
}

function PurchaseOrders(){

    const [Purchase, dispatchPurchase] = useReducer(purchaseorderReducer, initialState)

    function moveToAddPurchaseorder(){
        dispatchPurchase({type : 'addPurchase'})
    }

    function moveToApprovePurchaseorder(){
        dispatchPurchase({type : 'approve'})
    }

    function moveToPrevOrderPurchaseorder(){
        dispatchPurchase({type : 'prevOrder'})
    }

    return(
      <div className='purchaseOrders flex flex-dir gap16'>
        <h1 className='heading secHeading'>Purchase Order</h1>
        <div className='btns flex gap16'>
            <button onClick={moveToAddPurchaseorder}  className={Purchase.addPurchaseOrder? 'border_btn border_btn_fill' : 'border_btn'} >Add Purchase Order</button>
            <button onClick={moveToApprovePurchaseorder} className={Purchase.approve ? 'border_btn border_btn_fill' : 'border_btn'}>Approve Orders</button>
            <button onClick={moveToPrevOrderPurchaseorder} className={Purchase.prevOrder? 'border_btn border_btn_fill' : 'border_btn'}>Previous order report</button>
        </div>
        <hr></hr>
        {Purchase.addPurchaseOrder && 
            <div className='formOfPurchase grid grid-3-col gap16'>
                <form className='formPuchaseOrder grid grid-3-col gap16'>
                    <p className='subsidaryHeading'>Adding purchase order</p>
                    <input className='inp' placeholder='Item name' type='text'/>
                    <input className='inp' placeholder='Item quantity' type='text'/>
                    <input className='inp' placeholder='Item price' type='text'/>
                    <input className='inp' placeholder='Item tax' type='text'/>
                    <input className='inp' placeholder='Labour cost' type='text'/>
                    <input className='inp' placeholder='Transportation cost' type='text'/>
                    <input className='inp' placeholder='Mislaneous cost' type='text'/>
                </form>
                <div className='flex flex-dir gap16 formPuchaseOrder'>
                    <p className='totalcost'>Total purchase value - 1789562/-</p>
                    <p className='totalcost'>Total additional cost - 1782/-</p>
                </div>
                <div className='formPuchaseOrder addpurchasebtnBox'>
                    <button className='border_btn border_btn_fill purchaseOrderBtn'>Add Purchase Order</button>
                </div>
            </div>
        }

        {Purchase.approve && 
            <div className='formOfPurchase approveOrders flex flex-dir gap16'>
                <p className='subsidaryHeading'>Approve Outlet Orders</p>
                <table className='table'>
                    <thead>
                        <th>S.no</th>
                        <th>Outlet Name</th>
                        <th>Order Id</th>
                        <th>Items Involves</th>
                        <th>Approval Amount</th>
                        <th>Payment type</th>
                        <th>Date of place</th>
                        <th>Status of approval</th>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6].map(el=>
                            <>
                                <tr>
                                    <td>1</td>
                                    <td>niyaaz outlet</td>
                                    <td>14781582848</td>
                                    <td>
                                        {[1,2,3,6,852].map(el=> <p>Carrot - 5kg</p>)}
                                    </td>
                                    <td>147869/-</td>
                                    <td>Pending</td>
                                    <td>15/02/2024</td>
                                    <td className='approvalStatus' > <span>Not Approved</span> </td>
                                </tr>
                                

                            </>
                        )}
                    </tbody>
                    <tfoot>
                        <th>S.no</th>
                        <th>Outlet Name</th>
                        <th>Order Id</th>
                        <th>Items Involves</th>
                        <th>Approval Amount</th>
                        <th>Payment type</th>
                        <th>Date of place</th>
                        <th>Status of approval</th>
                    </tfoot>
                </table>
            </div>
        }

        {Purchase.prevOrder && 
            <div className='prevOrders flex flex-dir gap16 '>
                <p className='subsidaryHeading'>Approve Outlet Orders</p>
                <table className='table'>
                    <thead>
                        <th>S.no</th>
                        <th>Outlet Name</th>
                        <th>Order Id</th>
                        <th>Approval Amount</th>
                        <th>Date of place</th>
                        <th>Download Purchase order</th>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6].map(el=>
                            <>
                                <tr>
                                    <td>1</td>
                                    <td>niyaaz outlet</td>
                                    <td>14781582848</td>
                                    <td>147869/-</td>
                                    <td>15/02/2024</td>
                                    <td className=''> <button className='downloadPurchaseOrder'>
                                        <img src={Download} alt='download' className='icon icon__'/>    
                                    </button>
                                    </td>
                                </tr>
                                

                            </>
                        )}
                    </tbody>
                    <tfoot>
                        <th>S.no</th>
                        <th>Outlet Name</th>
                        <th>Order Id</th>
                        <th>Approval Amount</th>
                        <th>Date of place</th>
                        <th>Status of approval</th>
                    </tfoot>
                </table>
            </div>
        }


        
      </div>
    )
}

export default PurchaseOrders