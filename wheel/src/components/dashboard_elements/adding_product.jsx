import './../../util/util.css'
import './../../styles/addProduct.css'
import Apple from './../../icons/apple.png'
import Pencil from './../../icons/pencil.png'
import Dustbin from './../../icons/dustbin.png'

import { useReducer } from 'react'
const initialState = {
    addProduct : false,
    existingProduct : true,
    excelAddProduct : false
}

const productAddReducer = (state, action)=>{
    switch(action.type){
        case 'add':
            return {state, addProduct : true, existingProduct : false, excelAddProduct : false}
        case 'existing':
            return {state, addProduct : false, existingProduct : true, excelAddProduct : false}
        case 'excel':
            return {state, addProduct : false, existingProduct : false, excelAddProduct : true}
        default :
            return {state}
    }
}

function AddingProduct(){

    const [Product, dispatchProduct] = useReducer(productAddReducer, initialState)

    function moveToAddProducts(){
        dispatchProduct({type : 'add'})
    }

    function moveToAddProductsWithExcel(){
        dispatchProduct({type : 'excel'})
    }

    function moveToExistingProducts(){
        dispatchProduct({type : 'existing'})
    }

    return(
        <div className="adding-product flex flex-dir gap16">
            <h2 className='heading heading__update'>Products</h2>
            <div className='btns flex gap16'>
                <button onClick={moveToAddProducts} className={Product.addProduct? 'border_btn border_btn_fill' : 'border_btn'} >Add Products</button>
                <button onClick={moveToAddProductsWithExcel} className={Product.excelAddProduct? 'border_btn border_btn_fill' : 'border_btn'}>Add Product With Excel</button>
                <button onClick={moveToExistingProducts} className={Product.existingProduct? 'border_btn border_btn_fill' : 'border_btn'}>View existing products</button>
            </div>
            {Product.addProduct && 
                <div className='addProductsForm pad16'>
                    <form className='addprdForm grid grid-3-col gap16'>
                        <h3 className='subHeading heading__update head__grid'>Add products</h3>
                        <input className='inp inp__update' placeholder='product name*' type='text'/>
                        <input className='inp inp__update' placeholder='Min Price*' type='text'/>
                        <input className='inp inp__update' placeholder='Max price*' type='text'/>
                        <input className='inp inp__update' placeholder='Stock Inventory*' type='text'/>
                        <input className='inp inp__update' placeholder='Product availability*' type='text'/>
                        <button className='addProduct border_btn border_btn_fill'>Add Product</button>                
                    </form>
                </div>
            }

            {Product.existingProduct && 
                <div className='existingProducts pad16 grid grid-4-col gap16'>
                    {[1,2,3,4,5,6,7,5,8,5,8,9].map(el=>
                        <div className='productExisting flex flex-1 gap16 pad16'>
                            <div className='flex flex-1 gap16'>
                                <img src={Apple} alt='apple' className='icon'/>
                                <p className='name'>Apple</p>
                            </div>
                            <div className='flex flex-1 gap16'>
                                <button className='updateBtn white__btn white__btn__'>
                                    <img src={Pencil} alt='pencil' className='icon icon__'/>
                                </button>
                                <button className='white__btn white__btn__'>
                                    <img src={Dustbin} alt='pencil' className='icon icon__'/>
                                </button>
                            </div>
                        </div>
                    )}
                    
                </div>
            }

            {Product.excelAddProduct && 
                <div className='excel pad16'>
                    <form className='addprdForm grid grid-3-col gap16'>
                        <button className='downloadExcel border_btn border_btn_fill'>Download sample excel sheet</button>
                        <h3 className='subHeading heading__update head__grid'>Add products by uploading excel</h3>
                        <div className='flex flex-dir gap16'>
                            <p className='excelProdlabel'>Upload Excel Sheet</p>
                            <input className='inp inp__update' placeholder='Product availability*' type='file'/>
                            <button className='addProduct border_btn border_btn_fill'>Add Product</button>                
                        </div>
                    </form>
                </div>
            }


            
        </div>
    )
}

export default AddingProduct