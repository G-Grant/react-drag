import React, { useCallback } from 'react';
import bg1 from '../../assets/img/1.jpg';

import './index.less';

function CrossBrowserDragImage() {
    const onDragStart = useCallback((e: React.DragEvent) => {
        e.dataTransfer.setData('text/html', (e.target as HTMLElement).outerHTML);
    }, []);

    const onDragEnd = useCallback((e: React.DragEvent) => {
        e.dataTransfer.clearData();
    }, []);

    const onDragStartTips = useCallback((e: React.DragEvent) => {
        e.dataTransfer.setData('text/html', (e.target as HTMLElement).outerHTML);
        e.dataTransfer.setData('text/uri-list', 'https://juejin.cn/user/3051900007089063');
        e.dataTransfer.setData('text/plain', '大家好，我是 Barret');
    }, []);

    return (
        <div className='cross-browser-drag-image-container'>
            <div className='source'>
                <img src={bg1} draggable={true} onDragStart={onDragStart} onDragEnd={onDragEnd} />
                <div
                    className='box'
                    style={{ width: 200, backgroundColor: 'red' }}
                    draggable={true}
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                >
                    这是一个可拖拽的元素
                </div>
                <div
                    style={{ backgroundColor: 'aqua', marginTop: 20 }}
                    draggable={true}
                    onDragStart={onDragStartTips}
                    onDragEnd={onDragEnd}
                >
                    大家好，我是 Barret
                </div>
            </div>
        </div>
    );
}

export default CrossBrowserDragImage;
