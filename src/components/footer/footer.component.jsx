import Button from "../button/button.component";
import { FaGithub , FaXTwitter , FaLinkedin } from "react-icons/fa6";


const Footer = ({mode}) => {

    let Products = ['Features' , 'Testimonials' , 'Highlights' , 'Pricing' , 'FAQs'];
    let Comapny = ['About Us' , 'Careers' , 'Press'];
    let Legal = ['Terms' , 'Privacy' , 'Contact'];

    return (
      <>
        <div className="container pt-[70px]">
          {/* CONTAINER 1 */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-5">
              <p className="text-blue-600 font-semibold text-lg">Sitemark</p>
              <div className="flex flex-col gap-y-1">
                <p className="text-[15px] font-semibold">Join the newsletter</p>
                <p className={`text-sm ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'}`}>
                  Subscribe for weekly updates. No spams ever!
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <label className={`text-sm ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'}`}>Email</label>
                <div className="flex gap-x-2">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className={`border w-64 rounded-lg px-2 py-1 placeholder:text-xs outline-none text-sm ${mode ? 'border-gray-800 bg-black placeholder:text-gray-500':''}`}
                  />
                  <Button title="Subscribe" type={`${mode ? 'primaryDark' : 'primary'}`}  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-[70px]">
              <div>
                <p className="font-semibold mb-1 text-[15px]">Products</p>
                {Products.map((item) => {
                  return (
                    <p className={`text-sm leading-7 border-b cursor-pointer ${mode ? 'border-gray-800' : 'border-gray-300'} w-[fit-content] font-semibold ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'}`}>
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <p className="font-semibold mb-1 text-[15px]">Company</p>
                {Comapny.map((item) => {
                  return (
                    <p className={`text-sm leading-7 border-b cursor-pointer ${mode ? 'border-gray-800' : 'border-gray-300'} w-[fit-content] font-semibold ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'}`}>
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <p className="font-semibold mb-1 text-[15px]">Legal</p>
                {Legal.map((item) => {
                  return (
                    <p className={`text-sm leading-7 border-b cursor-pointer ${mode ? 'border-gray-800' : 'border-gray-300'} w-[fit-content] font-semibold ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'}`}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          <hr className={`mt-[22px] mb-5 ${mode ? 'border border-gray-900' : ''}`}></hr>


          <div className={`flex flex-col gap-y-1.5 text-sm ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'}`}>
            <div>
              <p>
                <span className={`border-b-2 ${mode ? 'border-gray-800' : 'border-gray-300'} font-semibold`}>
                  Privacy Policy
                </span>{" "}
                •{" "}
                <span className={`border-b-2  ${mode ? 'border-gray-800' : 'border-gray-300'} font-semibold`}>
                  Terms of Service
                </span>
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                Copyright ©{" "}
                <span className="text-[15px] font-semibold">Sitemark</span> 2024
              </p>
              <div className="flex gap-x-2">
                <button className={`p-2.5 border rounded-md ${mode ? ' bg-black border-gray-700  hover:bg-transparent hover:border-gray-500' : ' bg-[#F5F6FA4C]  hover:bg-gray-200 hover:border-gray-300'}`}>
                  <FaGithub /> 
                </button>
                <button className={`p-2.5 border rounded-md  ${mode ? ' bg-black border-gray-700 hover:bg-transparent hover:border-gray-500' : ' bg-[#F5F6FA4C] hover:bg-gray-200 hover:border-gray-300'}`}>
                  <FaXTwitter />
                </button>
                <button className={`p-2.5 border rounded-md  ${mode ? ' bg-black border-gray-700 hover:bg-transparent hover:border-gray-500' : ' bg-[#F5F6FA4C] hover:bg-gray-200 hover:border-gray-300'}`}>
                  <FaLinkedin />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


export default Footer;