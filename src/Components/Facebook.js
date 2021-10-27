import React from 'react'

const Facebook = () => {
    return (
        <div className = "facebook">
            <h1 className = "facebook-h1" >FaceBook</h1>
            <div className  ="facebook-div">
                <form className = "facebook-form">
                  <p className = "facebook-p">
                  Log in to Facebook
                  </p>
                  <input className = "facebook-email" placeholder = "Email address ot phone number" type ="text" />
                  <br></br>
                  <input className = "facebook-email" placeholder = "Email address ot phone number" type ="text" />
                  <br></br>
<button className = "facebook-btn"> Log In  </button>
<a href = "#" className = "facebook-span1">Forgotten account?</a>
<a href = "#" className = "facebook-span2">Sign up for Facebook</a>
                </form>
            </div>
        </div>
    )
}

export default Facebook
