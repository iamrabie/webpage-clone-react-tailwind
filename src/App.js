import Footer from "./components/footer/footer.component";
import LatestBlogs from "./components/latestBlogs/latestBlogs.component";
import Pagination from "./components/pagination/pagination.component";
import Navbar from "./components/navbar/navbar.component";
import Blogs from "./components/blogs/blogs.component";

function App() {
  return (
    <>
    <div className="pt-[140px] pb-[90px] ">
       {/* MAIN CONTAINER */}
       <div className="container">
         <Navbar />
         <Blogs />
        {/*  latest blogs container */}
         <LatestBlogs />
        {/* pagination */}
         <Pagination />
       </div>
       <hr></hr>
       <Footer />
    </div>
   
    </>
  );
}

export default App;
