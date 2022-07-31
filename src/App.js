import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogDetails from './blogDet';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import Notfound from './Notfound';


function App() {

  // const handleDelete(id)
  // {
  //   return(
  //     const newBlogs={blogs.filter((blog)=>blog.id!==id)}
  //     setBlogs(newBlogs)
  //   );
  // }
  

  //const name='mario';

// const handleClick=()=>{
//   setName('luigi');
//   //name='luigi';
// }


  return (
    <div className='app'>
    <Navbar />
    <Router>
      <div className="content">
        <switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
