import React, { useCallback } from 'react';

import './index.less';

function Demo() {
    const onDragStart = useCallback((e: React.DragEvent) => {
        console.log('onDragStart');
    }, []);

    const onDragEnd = useCallback((e: React.DragEvent) => {
        console.log('onDragEnd');
    }, []);

    const onDragEnter = useCallback((e: React.DragEvent) => {
        console.log('onDragEnter');
    }, []);

    const onDragOver = useCallback((e: React.DragEvent) => {
        console.log('onDragOver');
    }, []);

    const onDrop = useCallback((e: React.DragEvent) => {
        console.log('onDrop');
    }, []);

    const onDragLeave = useCallback((e: React.DragEvent) => {
        console.log('onDragLeave');
    }, []);

    return (
        <div style={{ margin: '0 auto' }}>
            <div
                className='target-ele'
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                目标元素
            </div>
            <div draggable className='dragged-ele' onDragStart={onDragStart} onDragEnd={onDragEnd}>
                可拖拽元素
            </div>
        </div>
    );
}

export default Demo;
