import React, { useState, useRef } from 'react';
import axios from 'axios';

const Upload = () => {
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const fileInput = useRef();

    const onChange = async event => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);

        try {
            const res = await axios.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
                }
            });
            console.log("Uploaded: ");
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const onClick = _ => {
        fileInput.current.click();
    }

    return (
        <>
            <button className='w-100 center btn btn-green round text-left' onClick={onClick}>
                <i className={'w-fixed fas fa-book'}></i> Add books
            </button>
            <input ref={fileInput} type='file' name='file' onChange={onChange} hidden />
        </>
    );
}

export default Upload;