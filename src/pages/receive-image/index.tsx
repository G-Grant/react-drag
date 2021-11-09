import React, { useCallback, useState } from 'react';

import './index.less';

function ReceiveImage() {
    const [img, setImg] = useState<string>();
    const [html, setHtml] = useState<string>();

    const onDragEnter = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        console.log(e.dataTransfer.getData('text/html'), e.dataTransfer.getData('bg'));
        setImg(e.dataTransfer.getData('bg'));
        setHtml(e.dataTransfer.getData('text/html'));
    }, []);

    return (
        <div className='receive-image-container'>
            <div className='target' onDrop={onDrop} onDragEnter={onDragEnter} onDragOver={onDragOver}>
                {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
            </div>
        </div>
    );
}

export default ReceiveImage;
