import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function Home() {
    return (
        <nav className='menu'>
            <Link to='/h5'>H5 拖拽效果</Link>
            <Link to='/mouse'>Mouse 拖拽效果</Link>
            <Link to='/sort'>拖拽排序</Link>
            <Link to='/preview-image'>拖拽图片到浏览器</Link>
            <Link to='/cross-browser-drag-image'>浏览器之间拖拽图片</Link>
            <Link to='/receive-image'>跨浏览器接收图片</Link>
        </nav>
    );
}

export default Home;
