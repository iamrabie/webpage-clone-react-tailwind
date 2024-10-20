import Title from "../title/title.component";
import SearchField from "../searchField/searchField.component";
import Card from "../card/card.component";
import { IoWifi } from "react-icons/io5";




const Blogs = ({mode}) => {


  // console.log("blogs mode " , mode);

  let blogCategories = [
    "All Categories",
    "Product",
    "Company",
    "Design",
    "Engineering",
  ];


  let blogsDetails = [
    {
      id: 0,
      title: "Advancing cybersecurity with next-gen solutions",
      type: "Engineering",
      text: "Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.",
      people: "Ahmed Ali",
      date: "20th-July,2024",
      url: "https://picsum.photos/800/450?random=1",
    },
    {
      id: 0,
      title: "Innovative product features that drive success",
      type: "Product",
      text: "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
      people: "Ahmed Ali",
      date: "20th-July,2024",
      url: "https://picsum.photos/800/450?random=2",
    },
  ];


  return (
    <>
      <div className="flex flex-col gap-y-[23px]">
        <Title title="Blog" />
        <p className="text-sm">Stay in the loop with the latest about our products.</p>
        <div className="flex justify-between items-center w-full py-2">
          <div>
            <ul className="flex gap-x-[30px]">
              {blogCategories.map((item) => {
                return(
                  <li className={`text-[13px] font-semibold py-1.5 px-3.5 border ${mode ? 'hover:bg-gray-900 text-[#94A0BB]' : 'border-white hover:bg-gray-100 text-[#556481] '} rounded-full  ${item === 'All Categories' ? 'bg-gray-200' : ''} ${item === 'All Categories' && mode ? 'bg-transparent border-gray-700' : 'border-none'}`}>
                    {item} 
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-x-2">
            <SearchField mode={mode} />
            <span className={`border self-center text-xl p-2 border rounded-md ${mode ? ' bg-black border-gray-700  hover:bg-transparent hover:border-gray-500' : ' bg-[#F5F6FA4C]  hover:bg-gray-200 hover:border-gray-300'}`}><IoWifi /></span>
          </div>
        </div>

        {/* blogs container */}
        <div className="flex flex-col gap-y-4">
          {/* first two blogs */}
          <div className="grid grid-cols-2 gap-x-4">
            {blogsDetails.map((item) => {
              return(
                <>
                  <div className={`border rounded-lg pb-4 flex flex-col gap-y-[26px] ${mode ? 'bg-[#0C1017] hover:bg-black border-gray-800' : 'bg-[#F5F6FA] hover:bg-white'}`}>
                    <div>
                      <img
                        src={item.url}
                        className="rounded-t-lg"
                        alt="blog1"
                      />
                    </div>
                    <div className="px-3 h-[140px]">
                      <Card
                        title={item.title}
                        subTitle={item.type}
                        text={item.text}
                        mode={mode}
                      />
                    </div>
                    <div className="flex justify-between pt-1 px-2">
                      <div className="flex gap-x-2 items-center">
                        <img src='https://mui.com/static/images/avatar/7.jpg' className='h-6 w-6 rounded-full' alt='' />
                        <p className="text-[13px]">Ahmed Ali</p>
                      </div>
                      <p className="text-[13px]">July 14, 2021</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>


          {/*blogs*/}
          <div className="grid grid-cols-3 gap-x-4">
            {/* third blog */}
            <div className={`border rounded-lg flex flex-col gap-y-[26px] ${mode ? 'bg-[#0C1017] hover:bg-black border-gray-800' : 'bg-[#F5F6FA] hover:bg-white'}`}>
              <div>
                <img
                  src="https://picsum.photos/800/450?random=9"
                  className="rounded-t-lg"
                  alt="blog1"
                />
              </div>
              <div className="py-4 px-3 h-[250px]">
                <Card
                  title="Designing for the future: trends and insights"
                  subTitle="Design"
                  text="Stay ahead of the curve with the latest design trends and insights. Our design team shares their."
                  mode={mode}
                />
              </div>
              <div className="flex justify-between pt-1 px-3">
                <div className="flex gap-x-2 items-center">
                   <img src='https://mui.com/static/images/avatar/7.jpg' className='h-6 w-6 rounded-full' alt='' />
                   <p className="text-[13px]">Ahmed Ali</p>
                </div>
                <p className="text-[13px]">July 14, 2021 </p>
              </div>
            </div>


            {/* fourth and fifth blog */}
            <div className="flex flex-col gap-y-4">
              {blogsDetails.map((item) => {
                return (
                  <>
                    <div className={`border rounded-lg ${mode ? 'bg-[#0C1017] hover:bg-black border-gray-800' : 'bg-[#F5F6FA] hover:bg-white'}`}>
                      <div className="py-4 px-3 h-[220px]">
                        <Card
                          title={item.title}
                          subTitle={item.type}
                          text={item.text}
                          mode={mode}
                        />
                      </div>
                      <div className="flex justify-between pt-2 pb-4 px-3">
                        <div className="flex gap-x-2 items-center">
                            <img src='https://mui.com/static/images/avatar/7.jpg' className='h-6 w-6 rounded-full' alt='' />
                            <p className="text-[13px]">Ahmed Ali</p>
                        </div>
                        <p className="text-[13px]">{item.date}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>


            {/* sixth  blog */}
            <div className={`border rounded-lg flex flex-col gap-y-[26px] ${mode ? 'bg-[#0C1017] hover:bg-black border-gray-800' : 'bg-[#F5F6FA] hover:bg-white'}`}>
              <div>
                <img
                  src="https://picsum.photos/800/450?random=6"
                  className="rounded-t-lg"
                  alt="blog1"
                />
              </div>
              <div className="py-4 px-3 h-[250px]">
                <Card
                  title="Maximizing efficiency with our latest product updates"
                  subTitle="Product"
                  text="Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow."
                  mode={mode}
                />
              </div>
              <div className="flex justify-between pt-1 px-3">
                 <div className="flex gap-x-2 items-center">
                    <img src='https://mui.com/static/images/avatar/7.jpg' className='h-6 w-6 rounded-full' alt='' />
                    <p className="text-[13px]">Ahmed Ali</p>
                 </div>
                <p className="text-[13px]">July 14, 2021 </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
