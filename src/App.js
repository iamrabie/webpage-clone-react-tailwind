import Footer from "./components/footer/footer.component";
import LatestBlogs from "./components/latestBlogs/latestBlogs.component";
import Pagination from "./components/pagination/pagination.component";
import Navbar from "./components/navbar/navbar.component";
import Blogs from "./components/blogs/blogs.component";
import {useState} from 'react';
import './App.css';

function App() {
 
  const [mode , setMode] = useState(false);
  // console.log('app mode :' , mode);

  const handleMode = (val) => {
    // console.log("val" , val);
     setMode(val);
  }


  return (
    <>
    <div className={`pt-[140px] pb-[90px] ${mode ? 'bg-black text-white' : ''}`}>
       {/* MAIN CONTAINER */}
       <div className="container">
         <Navbar mode={handleMode} />
         <Blogs mode={mode} />
        {/*  latest blogs container */}
         <LatestBlogs mode={mode} />
        {/* pagination */}
         <Pagination mode={mode} />
       </div>
       <hr className={` ${mode ? 'border border-gray-900' : ''}`}></hr>
       <Footer mode={mode} />
    </div>
   
    </>
  );
}

export default App;
