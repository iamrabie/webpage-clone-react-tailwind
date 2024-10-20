const Card = ({subTitle , title , text }) => {
    return(
        <>
        <div className="flex flex-col gap-y-3">
            <p className="text-[13px] text-[#47536B]">{subTitle}</p>
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-sm text-[#47536B]">{text}</p>
        </div>
        </>
    );
}



export default Card;
