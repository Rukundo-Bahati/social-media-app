import React, { useContext } from 'react'
import './stories.scss'
import Beni from '../../assets/course.png'
import { AuthContext } from '../../context/authenticationContext'; 
import Baba from '../../assets/baba.jpg'

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories =  [
   { id: 1,
    name: "John Doe",
    img: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
     
   },
   { id: 2,
    name: "James Doe",
    img: "https://fastly.picsum.photos/id/189/200/300.jpg?hmac=hHje_4JkF5zMl3-XI-og30tFYciyr_jlTaswOXtA_Bo"
     
   },
   { id: 3,
    name: "Jane Doe",
    img: "https://fastly.picsum.photos/id/182/200/300.jpg?hmac=W6MnOpe7fP0LlNAyWl6rzWbjyLOM3ix2TXRcFx7vEPE"
     
   },
   { id: 4,
    name: "Jojo Doe",
    img: "https://fastly.picsum.photos/id/827/200/300.jpg?hmac=0Q7y5JGXuxSXgO7VUvdNhXC4yoAupOJiKmRS9RoPqs8"
     
   }
 
  ]
 
  return (
    <div className='stories' >

<div className="story">
        <img src="https://fastly.picsum.photos/id/970/200/300.jpg?hmac=8mPwdPFtAKcn0NQrEIClW3IlOWsKgskAikm_8YQj-qM" alt="" />
        <span> Baba Lao </span>
        <button>+</button>
      </div>

      {stories.map(story => (
  <div className="story" key={story.id}>
    <img src={story.img} alt="" />
    <span>{story.name}</span>
  </div>
))}
   
    </div>
  )
}

export default Stories
