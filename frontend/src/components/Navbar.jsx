import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal'
import Cart from '../screen/Cart'
import { useCart } from './ContextReducer'

const Navbar = () => {

  let data=useCart()
  const [cartView,setCartView]=useState(false)

  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("authToken")
    navigate("/login")
  }
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic fw-bolder" to='/'>FoodExpress</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto d-flex">
        <Link className="nav-link active fs-5" aria-current="page" to='/'>Home</Link>
        {localStorage.getItem("authToken")?
        <Link className="nav-link active fs-5" aria-current="page" to='/myOrder'>My Orders</Link>
        
        :""
      }
        <div className='d-flex'>
       {!localStorage.getItem("authToken")?
       <>
        <Link className="btn bg-white text-warning mb-2 mx-1" to='/login'>Login</Link>
        <Link className="btn bg-white text-warning mb-2 mx-1" to='/createuser'>SignUp</Link>
        </>
        :
        <>
        <div className='btn bg-white text-warning mb-2 mx-1' onClick={()=>{setCartView(true)}}>
          🛒 {" "}
          <Badge pill bg="warning">{data.length}</Badge>
        </div>

        {cartView ?
        <Modal onClose={()=>{setCartView(false)}}>
            <Cart />
        </Modal>
        :null
        }

        <div className='btn bg-danger text-white mb-2 mx-1' onClick={handleLogout}>
          Logout
        </div>
        </>
        }
        </div>

      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar