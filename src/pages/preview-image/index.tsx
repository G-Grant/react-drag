import React, { useCallback, useState } from 'react';

import './index.less';

function PreviewImage() {
    const [file, setFile] = useState<File>();
    const [fileUrl, setFileUrl] = useState<string>();
    const onDragEnter = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);
    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);
    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
        setFileUrl(window.URL.createObjectURL(e.dataTransfer.files[0]));
    }, []);
    return (
        <div className='preview-image-container'>
            <div className='target' onDragOver={onDragOver} onDragEnter={onDragEnter} onDrop={onDrop}>
                <div>文件名：{file?.name}</div>
                <div>大小：{file?.size}</div>
                <div>类型：{file?.type}</div>
                <img src={fileUrl} alt='' />
            </div>
        </div>
    );
}

export default PreviewImage;
