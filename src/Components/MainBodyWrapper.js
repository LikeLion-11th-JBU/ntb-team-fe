import React from "react"

const MainBodyWrapper = ({children}) => {

    const style = {
        margin: "0",
        marginLeft: "50px",
        marginRight: "50px"
    }
    
    return <div style={style}>{children}</div>
}

export default MainBodyWrapper;