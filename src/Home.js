
import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';



function Home() {

  // const handleDelete(id)
  // {
  //   return(
  //     const newBlogs={blogs.filter((blog)=>blog.id!==id)}
  //     setBlogs(newBlogs)
  //   );
  // }
  const {data : blogs, isLoading, error}=useFetch("http://localhost:8000/blogs")

  

  //const name='mario';

// const handleClick=()=>{
//   setName('luigi');
//   //name='luigi';
// }


  return (
    <div className="App">
      {error && <h2>{error}</h2>}
      {isLoading && <h1>Loading....</h1>}
      {blogs && <BlogList blogs={blogs}/>}
    </div>
  );
}

export default Home;
