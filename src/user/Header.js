import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faUserGear} from "@fortawesome/free-solid-svg-icons";
import './Header.css'
import {useState} from "react";


export default function UserHeader({currentTab, setCurrentTab}) {


    return (
        <div id={'User-Header'} >
            <HeaderItem title={'Khách hàng'} icon={faUser} currentTab={currentTab}
                        setCurrentTab={setCurrentTab}/>
            <HeaderItem title={'Nhân viên'} icon={faUserGear} currentTab={currentTab}
                        setCurrentTab={setCurrentTab}/>
        </div>
    )
}

function HeaderItem({title, icon, currentTab, setCurrentTab}) {
    function handleClick (e)  {
        setCurrentTab(title)
    }

    return (
        <span className={currentTab === title  ? 'Header-Item selected' : 'Header-Item'}
              onClick={handleClick}>
            <FontAwesomeIcon className={'icon'} icon={icon} />
            <span>{title}</span>
        </span>
    )
}