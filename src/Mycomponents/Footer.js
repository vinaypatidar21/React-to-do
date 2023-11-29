import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position: "absolute",
        top: "100vh",
        width: "100%"
    }
  return (
    <Footer className="bg-dark text-light py-3" style={footerStyle}>
    <p className="text-center">
    Copyright &copy; MyTodosList.com
    </p>
      
    </Footer>
  )
}

