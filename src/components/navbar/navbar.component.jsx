import Button from "../button/button.component";
import { MdDarkMode , MdLightMode} from "react-icons/md";
import { useState } from 'react';


const Navbar = ({mode}) => {

    const [darkMode , setDarkMode] = useState(false);
    // console.log("dark mode :" , darkMode);


    let menuItems = ['Features' , 'Testimonials' , 'Highlights' , 'Pricing' , 'FAQ' , 'Blog'];

    
    const handleAppMode = () => {

      setDarkMode(prev => !prev);
      mode(!darkMode);

    }



    return(
        <>
        <div className={`flex justify-between items-center py-2 px-3 rounded-2xl shadow-xl fixed top-[30px] w-3/4 border backdrop-blur-lg bg-transparent ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div>
              <ul className="flex gap-x-1">
                <li className="text-blue-600 font-bold text-base self-center pe-4">Sitemark</li>
                {menuItems.map((item) => {
                   return <li className={`text-sm cursor-pointer px-2 py-1.5 rounded-md ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} hover:border-gray-200`}>{item}</li>;
                })}
                <li className="font-bold text-base self-center ps-4 text-xl" onClick={handleAppMode}>
                  {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </li>
              </ul>
            </div>

            <div className="flex gap-x-2 ">
              <Button type={`${darkMode ? 'secondaryDark' : 'secondary'}`} title='Sign in' />
              <Button type={`${darkMode ? 'primaryDark' : 'primary'}`} title='Sign up' />
            </div>
        </div>
        </>
    );
}

export default Navbar;