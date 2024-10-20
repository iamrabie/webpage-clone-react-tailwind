const Card = ({subTitle , title , text , mode }) => {
    return(
        <>
        <div className="flex flex-col gap-y-3">
            <p className={`text-[13px] ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'} `}>{subTitle}</p>
            <p className="text-xl font-semibold">{title}</p>
            <p className={`text-sm text-[#47536B]  ${mode ? 'text-[#94A0BB]' : 'text-[#47536B]'} ${text.length > 120 ? 'line-clamp-3' : ''}`}>{text}</p>
        </div>
        </>
    );
}



export default Card;
