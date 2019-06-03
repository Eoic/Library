const Alert = (props) => {
    return (
        <div className={`alert ${props.alertType}`}>
            {props.message}
        </div>
    );
}

export default Alert;