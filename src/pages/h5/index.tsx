import React, { useCallback, useState } from 'react';
import chance from 'chance';
import _ from 'lodash';
import bg1 from '../../assets/img/1.jpg';
import bg2 from '../../assets/img/2.jpg';
import bg3 from '../../assets/img/3.jpg';
import './index.less';

interface IUserInfo {
    value: string;
    label: string;
    photo: string;
}

function H5() {
    const [photoList, setPhotoList] = useState<IUserInfo[]>([
        {
            value: chance().guid(),
            label: chance().name(),
            photo: bg1,
        },
        {
            value: chance().guid(),
            label: chance().name(),
            photo: bg2,
        },
        {
            value: chance().guid(),
            label: chance().name(),
            photo: bg3,
        },
    ]);
    const [topList, setTopList] = useState<IUserInfo[]>([]);

    const onDragStart = useCallback((e: React.DragEvent, item) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('userInfo', JSON.stringify(item));
    }, []);

    const onDragEnd = useCallback((e: React.DragEvent) => {
        e.dataTransfer.clearData();
    }, []);

    const onDragEnter = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const onDrop = useCallback(
        (e: React.DragEvent) => {
            const userInfo: IUserInfo = JSON.parse(e.dataTransfer.getData('userInfo'));
            _.remove(photoList, (item) => item.value === userInfo.value);
            setTopList([...topList, userInfo]);
            setPhotoList(photoList);
        },
        [photoList, topList, setPhotoList, setTopList]
    );

    return (
        <div className='h5-container'>
            <div className='target' onDrop={onDrop} onDragEnter={onDragEnter} onDragOver={onDragOver}>
                {topList.map((item) => {
                    return (
                        <div className='user-info' key={item.value}>
                            <img draggable={false} src={item.photo} />
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>
            <div className='source'>
                {photoList.map((item) => {
                    return (
                        <div
                            className='user-info'
                            key={item.value}
                            draggable={true}
                            onDragStart={(e: React.DragEvent) => onDragStart(e, item)}
                            onDragEnd={onDragEnd}
                        >
                            <img draggable={false} src={item.photo} />
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default H5;
