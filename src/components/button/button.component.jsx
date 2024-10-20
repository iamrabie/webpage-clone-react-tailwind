const Button = ({title , type}) => {

    const buttonType = {
        primary:'btn-primary',
        secondary:'btn-secondary',
        primaryDark:'btn-primary-dark-mode',
        secondaryDark:'btn-secondary-dark-mode'
    }


    return(
        <>
                                                        
          <button className={`btn ${buttonType[type]}`}>{title}</button>

        </>
    );
}

export default Button;