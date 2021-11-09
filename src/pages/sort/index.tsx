import React, { useCallback, useState } from 'react';
import chance from 'chance';
import _ from 'lodash';
import classnames from 'classnames';

import './index.less';

interface IListItem {
    value: string;
    label: string;
    color: string;
}

function Sort() {
    const [draggedItem, setDraggedItem] = useState<IListItem | null>();
    const [list, setList] = useState<IListItem[]>([
        {
            value: chance().guid(),
            label: '这是第一项',
            color: '#ff7fae',
        },
        {
            value: chance().guid(),
            label: '这是第二项',
            color: '#646bd9',
        },
        {
            value: chance().guid(),
            label: '这是第三项',
            color: '#6c98c6',
        },
        {
            value: chance().guid(),
            label: '这是第四项',
            color: '#fe7250',
        },
        {
            value: chance().guid(),
            label: '这是第五项',
            color: '#e25a53',
        },
    ]);

    const onDragStart = useCallback((e: React.DragEvent, listItem: IListItem) => {
        e.dataTransfer.effectAllowed = 'move';
        setDraggedItem(listItem);
    }, []);

    const onDragEnd = useCallback((e: React.DragEvent) => {
        e.dataTransfer.clearData();
        setDraggedItem(null);
    }, []);

    const onDragEnter = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            const targetEle = e.target as HTMLLIElement;
            const targetIndex = _.findIndex(list, (item) => item.value === JSON.parse(targetEle.dataset.item!).value);
            _.remove(list, (item) => item.value === draggedItem!.value);
            list.splice(targetIndex, 0, draggedItem!);
            setList([...list]);
        },
        [draggedItem]
    );

    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const onDrop = useCallback(
        (e: React.DragEvent) => {
            const targetEle = e.target as HTMLLIElement;
            const targetIndex = _.findIndex(list, (item) => item.value === JSON.parse(targetEle.dataset.item!).value);
            _.remove(list, (item) => item.value === draggedItem!.value);
            list.splice(targetIndex, 0, draggedItem!);
            setList([...list]);
        },
        [draggedItem]
    );

    return (
        <div className='sort-container'>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li
                            key={item.value}
                            style={{ backgroundColor: item.color }}
                            className={classnames({ dragged: item.value === draggedItem?.value })}
                            draggable={true}
                            onDragStart={(e) => onDragStart(e, item)}
                            onDragOver={onDragOver}
                            onDragEnter={onDragEnter}
                            onDragEnd={onDragEnd}
                            onDrop={onDrop}
                            data-item={JSON.stringify(item)}
                        >
                            {item.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sort;
