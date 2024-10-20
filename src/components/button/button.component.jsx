const Button = ({title , type}) => {

    const buttonType = {
        primary:'btn-primary',
        secondary:'btn-secondary'
    }


    return(
        <>
                                                        
          <button className={`btn ${buttonType[type]}`}>{title}</button>

        </>
    );
}

export default Button;