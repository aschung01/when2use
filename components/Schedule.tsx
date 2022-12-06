import dayjs, { Dayjs } from "dayjs"
import { weekdayNumToStr } from "../utils/transformers";
import { Clock } from 'phosphor-react';
import React from "react";
import { MouseProvider, useMouseContext } from "../context/MouseContext";

export default function Schedule() {
    let today = dayjs();
    let after = today.hour(8).minute(0);
    let before = today.hour(18).minute(0);
    let {mouseDown, setMouseDown} = useMouseContext();

    const handleMouseLeave = (e: any) => {
        setMouseDown(false);
    }

    return <div className="outer">
        <table>
        <thead>
            <tr>
                <th>
                    <Clock />
                    <p style={{fontSize: "12px"}}>(GMT +09:00)<br/>ASIA/SEOUL</p>
                </th>
                {
                    [...Array(7)].map((_, i) => {
                        return <th key={i}>
                        <h1>{today.add(i, 'day').date()}</h1>
                        <p>{weekdayNumToStr(today.add(i, 'day').day())}</p>
                    </th>
                    })
                }
            </tr>
        </thead>
        </table>
        <div className="wrap" onMouseLeave={handleMouseLeave}>
            <table>
                <tbody>
                {   [...Array(before.diff(after, 'hour') * 2)].map((_, i) => {
                    let time : Dayjs = after.add(i * 30, 'minute');

                    return <tr key={i}>
                        {
                            time.minute() === 0 ? <td onMouseEnter={handleMouseLeave} className="headcol">{time.format('HH:mm')}</td> :
                            <td onMouseEnter={handleMouseLeave} className="headcol"></td>
                        }
                        <td>
                            <TableData />
                        </td>
                        <td>
                            <TableData />
                        </td>
                        <td>
                            <TableData />
                        </td>
                        <td>
                            <TableData />
                        </td>
                        <td>
                            <TableData />
                        </td>
                        <td>
                            <TableData />
                        </td>
                        <td>
                            <TableData />
                        </td>
                    </tr>
                })
                }
                </tbody>
            </table>
        </div>
        <style jsx>{`
            .outer {
                background-color: white;
                border: 1px solid #e5e5e5;
                border-radius: 15px;
                margin-top: 16px;
            }
            table {
                border-collapse: collapse;
            }
            thead {
                text-align: center;
                width: 100%;
            }
            thead th {
                -webkit-touch-callout: none !important;
                -webkit-user-select: none !important;
                -khtml-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }
            thead th:first-child, th:last-child {
                min-width: 120px;
                vertical-align: center;
                border-right: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                border-left: 1px solid transparent;
            }
            thead th:last-child {
                min-width: 120px;
                vertical-align: center;
                border-left: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                border-right: 1px solid transparent;
            }
            thead th:not(:first-child, :last-child) {
                min-width: 120px;
                vertical-align: center;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                border-top-left-radius: 15px;
            }
            th h1 {
                font-size: 32px;
                font-weight: 600;
                margin: 0;
                padding: 0;
                -webkit-touch-callout: none !important;
                -webkit-user-select: none !important;
                -khtml-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }
            th p {
                font-size: 16px;
                color: #808080;
                font-weight: 300;
                -webkit-touch-callout: none !important;
                -webkit-user-select: none !important;
                -khtml-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }
            .wrap {
                overflow: visible;
                border-radius: 15px;
            }
            .headcol {
                min-width: 120px;
                font-size: 0.875rem;
                color:#808080;
                padding: 0.25rem 0;
                text-align: center;
                border: 0;
                position: relative;
                border-left: 1px solid transparent;
                border-right: 1px solid transparent;
                border-bottom: 1px solid transparent;
                top: -14px;

                -webkit-touch-callout: none !important;
                -webkit-user-select: none !important;
                -khtml-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }

            tbody tr:first-child .headcol{
                top: -4px;
            }
            
            .wrap tr td {
                min-width: 120px;
                padding: 0;
                white-space: none;
                word-wrap: nowrap;
                height: 28px;
            }
            .wrap tr td:not(:last-child) {
                border-right: 1px solid #e5e5e5;
            }
            tr:nth-child(odd) td:not(.headcol) {
                border-bottom: 1px dashed #e5e5e5;
            }

            tr:nth-child(even) td:not(.headcol) {
                border-bottom: 1px solid #eee;
            }

        `}</style>
    </div>
}

interface TableDataProps {
    className?: string;
    onDragOver?: (e: any) => void;
    children?: any;
    style?: any;
}

function TableData(props: TableDataProps) {
    const { children, ...other } = props;
    let {mouseDown, setMouseDown} = useMouseContext();
    const [dragOver, setDragOver] = React.useState(false);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseDown(true);
        if (dragOver) {
            setDragOver(false);
        } else {
            setDragOver(true);
        }
        console.log('down');
    }

    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseDown(false);
        console.log('up');
    }

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseDown) {
            if (dragOver) {
                setDragOver(false);
            } else {
                setDragOver(true);
            }
            console.log(mouseDown);
        }
    }
    
    return <>
    <div className={`${dragOver ? "dragOver" : ""}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseOver={handleMouseOver} {...other} >{children}</div>
    <style jsx>{`
        .dragOver {
            background-color: #e5e5e5;
        }
        div {
            width: 100%;
            height: 100%;
        }
        div:hover {
            border: 1px solid #808080;
        }
    `}</style>
    </>
}