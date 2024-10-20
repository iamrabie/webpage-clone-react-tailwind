import { IoSearchSharp } from "react-icons/io5";

const SearchField = ({mode}) => {
    return(
        <>
        <div className={`flex border ${mode ? 'border-gray-800' : ''} px-3 py-1 rounded-lg`}>
            <span className="self-center text-lg"><IoSearchSharp /> </span>
            <input type='text' className={`placeholder:text-[15px] px-2 outline-none text-sm ${mode ? 'bg-transparent placeholder:text-gray-600' : ''}`} placeholder="Search ..." />
        </div>
        </>
    );
}


export default SearchField;