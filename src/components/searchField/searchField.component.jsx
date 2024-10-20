import { IoSearchSharp } from "react-icons/io5";

const SearchField = () => {
    return(
        <>
        <div className="flex border px-3 py-1 rounded-lg">
            <span className="self-center text-lg"><IoSearchSharp /> </span>
            <input type='text' className="placeholder:text-[15px] px-2" placeholder="Search ..." />
        </div>
        </>
    );
}


export default SearchField;