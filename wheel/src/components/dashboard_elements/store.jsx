import './../../util/util.css'
import './../../styles/store.css'
import Apple from './../../icons/apple.png'
import Menu from './../../icons/hamburger.png'
import Moon from './../../icons/new-moon.png'
import Left from './../../icons/left-arrow.png'
import { useReducer } from 'react'

const initialState = {
    template : true,
    payment : false
}

const paymentReducer = (state, action)=>{
    switch(action.type){
        case 'template':
            return {state, template  : true, payment : false}
        case 'payment':
            return {state, template  : false, payment : true}
        default :
            return {state}
    }
}

function Store(){

    const [store, dispatchStore] = useReducer(paymentReducer, initialState)

    function colorThemeOfStore(el){
        const prod = document.querySelectorAll('.prod')
        const prod__ = document.querySelectorAll('.prod__')

        const addToCard = document.querySelectorAll('.AddToCart')
        const input = document.querySelectorAll('.unitsinp')


        prod.forEach(e=>{
            e.style.borderLeft = `0.5rem solid  ${el.target.value}` 
            e.style.boxShadow = `0 0 0.3rem ${el.target.value}`
        })
        prod__.forEach(e=>{
            e.style.borderBottom = `0.5rem solid  ${el.target.value}` 
            e.style.boxShadow = `0 0 0.3rem ${el.target.value}`
        })
        addToCard.forEach(e=>{
            e.style.backgroundColor = `${el.target.value}`
        })
        input.forEach(e=>{
            e.style.backgroundColor = `${el.target.value}10`
        })
         

    }

    function MoveToStore(){
        dispatchStore({type : 'template'})
    }

    function MoveTopayment(){
        dispatchStore({type : 'payment'})
    }

    return(
      <div className='store flex flex-dir gap16'>
        <h1 className='heading secHeading'>Setup the store</h1>
        <div className='storeCredentials flex gap16'>
            <button onClick={MoveToStore} className={store.template ? 'border_btn border_btn_fill' : 'border_btn'}>Store Templates</button>
            <button onClick={MoveTopayment} className={store.payment ? 'border_btn border_btn_fill' : 'border_btn'}>Store payments</button>
        </div>
        <hr></hr>
        {store.template && 
            <div className='templates grid grid-4-col gap16'>
            <div className='templateOne'>
                <div className='topScreen'></div>

                <div className='screen pad8'>
                    <div className='credentials flex flex-dir gap8'>
                        <h5 className='storeHead__'>Your company name</h5>
                        <p className='storeHead'>GSTIN - 1478529635478</p>
                        <p className='storeHead'>Date - 12/05/2024</p>
                    </div>
                    <div className='productsOfStore pad8 flex flex-dir gap16'>
                        {[1,2,3,4,5,6,8,8].map(el=>
                            <div className='prod flex flex-dir pad8 gap16'>
                                <div className='cred flex flex-1 gap16'>
                                    <img src={Apple} className='icon__' alt='item image' />
                                    <p className='name__'>Apple</p>
                                    <p className='price'>895/- kg</p>
                                </div>
                                <div className='flex flex-1 gap8'>
                                    <input className='inp__ unitsinp' placeholder='1kg*' type='number'/>
                                    <button className='AddToCart '>Add to cart</button>
                                </div>
                            </div>
                        )}
                        <button className='PaymentDemo border_btn border_btn_fill'>Place Order</button>
                        
                    </div>
                </div>
                <div className='bottomBtns flex flex-2 pad16 gap16'>
                    <img src={Menu} alt='menu' className='icon__small'/>
                    <img src={Moon} alt='menu' className='icon__small'/>
                    <img src={Left} alt='menu' className='icon__small'/>

                </div>
            </div>


            <div className='templateTwo'>
                <div className='topScreen'></div>

                <div className='screen pad8'>
                    <div className='credentials flex flex-dir gap8'>
                        <h5 className='storeHead__'>Your company name</h5>
                        <p className='storeHead'>GSTIN - 1478529635478</p>
                        <p className='storeHead'>Date - 12/05/2024</p>
                    </div>
                    <div className='productsOfStore pad8 grid grid-2-col gap16'>
                        {[1,2,3,4,5,6,8,8].map(el=>
                            <div className='prod__ flex flex-dir pad8 gap8'>
                                <div className='cred flex flex-dir flex-1 gap8'>
                                    <img src={Apple} className='icon__' alt='item image' />
                                    <p className='name__'>Apple</p>
                                    <p className='price'>895/- kg</p>
                                </div>
                                <div className='flex flex-dir flex-1 gap8'>
                                    <input className='inp__ unitsinp' placeholder='1kg*' type='number'/>
                                    <button className='AddToCart'>Add to cart</button>
                                </div>
                            </div>
                        )}
                        <button className='PaymentDemo paySecondDesign border_btn border_btn_fill'>Place Order</button>
                        
                    </div>
                </div>
                <div className='bottomBtns flex flex-2 pad16 gap16'>
                    <img src={Menu} alt='menu' className='icon__small'/>
                    <img src={Moon} alt='menu' className='icon__small'/>
                    <img src={Left} alt='menu' className='icon__small'/>

                </div>
            </div>
            {/* <div className='storeCustomization flex flex-dir gap16 pad16'>
                <div className='flex flex-1 gap16'>
                    <label className='colorpicker' for="colorpicker">Change color of your store</label>
                    <input onChange={colorThemeOfStore} className='inp__color' type="color" id="colorpicker" />
                </div>
            </div> */}
        </div>
        }


        {store.payment && 
            <div className='payments'>payment</div>
        }
        
      </div>
    )
  }

export default Store