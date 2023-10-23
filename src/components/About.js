import React from 'react'

const About = () => { 
    return (
        <div>
            This is About page
        </div>
    )
}

export default About


// import React, { useContext, useEffect } from 'react'
// import NoteContext from '../context/notes/NoteContext'

// const About = () => {
//     const a = useContext(NoteContext)
//     useEffect(()=>{
//         a.update();
//     })
//   return (
//     <div>
//       this is about {a.state.name} and he is in class {a.state.class}
//     </div>
//   )
// }

// export default About
