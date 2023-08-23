import React from 'react';
import "./Template.css";


const Template = ({children, todoLength}) => {
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var todayString = year + '년 ' + month  + '월 ' + day + '일';

    return (
        <div className="Template">
            <div className="title">{todayString} 할 일({todoLength})</div>
            <div>{children}</div>
        </div>
    );

}

export default Template;