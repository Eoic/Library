const Alert = (props) => {
    return (
        <div className={`round alert ${props.alertType || 'alert-default'}`}>
            <div style={{ float: "left", width: "10%" }}>
                <i className='fas fa-pen' ></i>
            </div>
            <div style={{ float: "right", width: "90%" }}>
                {props.message}
            </div>
            <div style={{ clear: "both" }}></div>
        </div>
    );
}

export default Alert;