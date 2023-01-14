import React from 'react'

export default function Footer() {

    const mystyle={
        width: '100%;',
        height: '12vh',
        backgroundColor: 'rgb(252, 114, 137)',
        color: 'white',
        display: 'flex',
        // textAlign: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        alignItem: "center",
        paddingTop: '35px',
        marginTop: '1rem'

    }
  return (
    <div className='footer-main' style={mystyle}>
      <p>Made with ❤ by @Dhiraj_Sangale</p>
    </div>
  )
}
