import React from 'react'

function AppBackground({children}) {
    return (
        <div 
        style={{ 
            backgroundImage: "url(/background.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment:'fixed',
           
            }}
            >
     

            {children}
     
            </div>
    )
}



export default AppBackground;