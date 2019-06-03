import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [uploadPercentage, setUploadPercentage] = useState(0);

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

    return (
        <input type='file' name='file' className='w-100 round center btn btn-green' onChange={onChange} />
    );
}

export default Upload;