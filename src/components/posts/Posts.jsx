import React from 'react'
import './posts.scss' 
import Post from '../Post/Post';

const Posts = () => {

   const posts = [

     {
      id:1,
      name: "John Doe",
      userId:1,
      profilePic: "https://picsum.photos/536/354",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quia.",
      img: "https://picsum.photos/seed/picsum/536/354"
     },

     {
      id:2,
      name: "John Doe",
      userId:2,
      profilePic: "https://picsum.photos/536/354",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quia.",
      img: "https://scontent.fkgl1-1.fna.fbcdn.net/v/t39.30808-6/429893746_928458012349230_1541966910650716340_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Fpid9IP0VHUAX8-xqnC&_nc_ht=scontent.fkgl1-1.fna&oh=00_AfDbFueWRt2ygtzaj9Gv-SZs-LZWbr0TBaB2qIgQJyB7mA&oe=65E8DEAB"
     },

    

   ]



  return (
    <div className='posts' >
      {posts.map(post=>(
       <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts
