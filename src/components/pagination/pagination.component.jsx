const Pagination = ({mode}) => {

    let pages = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

    return(
        <>
        {/* <p>pagination</p> */}
        <div className="flex gap-x-1.5 mt-5 mb-[100px] py-2">
            {pages.map((item) => (           
                <p className={`py-2 px-[14.5px] rounded-full text-sm  ${mode ? 'hover:bg-[#47536B]' : 'hover:bg-gray-100 hover:text-white'}  ${item === 1  ? 'bg-[#05070A]' : ''} ${ item === 1 && mode ? 'bg-white text-black hover:bg-[#47536B]' : ''}`}>{item}</p>           
           ))}
           
        </div>

        </>
    );
}


export default Pagination;