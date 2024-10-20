import Button from "../button/button.component";

const Navbar = () => {


    let menuItems = ['Features' , 'Testimonials' , 'Highlights' , 'Pricing' , 'FAQ' , 'Blog'];
    return(
        <>
        <div className="flex justify-between items-center py-2.5 px-3 rounded-2xl shadow-xl fixed top-[30px] w-3/4 border bg-white backdrop-blur-lg bg-white/50">
            <div>
              <ul className="flex gap-x-[26px]">
                <li className="text-blue-600 font-bold text-base">Sitemark</li>
                {menuItems.map((item) => {
                   return <li className="text-sm">{item}</li>;
                })}
              </ul>
            </div>

            <div className="flex gap-x-2 ">
              <Button type='secondary' title='Sign in' />
              <Button type='primary' title='Sign Up' />
            </div>
        </div>
        </>
    );
}

export default Navbar;