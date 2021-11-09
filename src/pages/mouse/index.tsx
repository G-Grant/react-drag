import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
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
function Mouse() {
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
    const [draggedUser, setDraggedUser] = useState<IUserInfo | null>();
    const [rect, setRect] = useState<{ left: number; top: number }>();

    const onMouseDown = useCallback(
        (e: React.MouseEvent, draggedUser: IUserInfo) => {
            const oldX = e.clientX;
            const oldY = e.clientY;
            const rect = (e.target as HTMLDivElement).getBoundingClientRect();
            const mousemove = function (e: MouseEvent) {
                const newX = e.clientX;
                const newY = e.clientY;
                if (Math.abs(newX - oldX) < 10 && Math.abs(newY - oldY) < 10) {
                    return;
                }
                setRect({ left: newX - (oldX - rect.left), top: newY - (oldY - rect.top) });
                setDraggedUser(draggedUser);
            };
            const mouseup = function (e: MouseEvent) {
                const elements = document.elementsFromPoint(e.clientX, e.clientY);
                const targetEle = _.find(elements, (ele) => ele.classList.contains('target'));
                if (targetEle) {
                    _.remove(photoList, (item) => item.value === draggedUser.value);
                    setTopList([...topList, draggedUser]);
                    setPhotoList(photoList);
                }
                setDraggedUser(null);
                document.removeEventListener('mousemove', mousemove);
                document.removeEventListener('mouseup', mouseup);
            };
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        },
        [topList, photoList]
    );

    return (
        <div className='mouse-container'>
            <div className='target'>
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
                            onMouseDown={(e: React.MouseEvent) => onMouseDown(e, item)}
                        >
                            <img draggable={false} src={item.photo} />
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>
            {draggedUser &&
                createPortal(
                    <div
                        className='dragged-user-info user-info'
                        key={draggedUser.value}
                        style={{ left: rect?.left, top: rect?.top }}
                    >
                        <img draggable={false} src={draggedUser.photo} />
                        <span>{draggedUser.label}</span>
                    </div>,
                    document.body
                )}
        </div>
    );
}

export default Mouse;
