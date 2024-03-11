import './index.css'
import Header from "./Header";
import Filter from "./Filter";
import {useState} from "react";
import AddDevice from "./Device/AddDevice";
import DeviceList from "./Device/DeviceList";
import TransactionPointList from "./TransactionPoint/TransactionPointList";
import CustomerTypeList from "./CustomerType/CustomerTypeList";
import ReportTypeList from "./ReportType/ReportTypeList";
import NotificationTypeList from "./NotificationType/NotificationTypeList";
import AddComponent from "./components/AddComponent";

export default function Category() {
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const [detail, setDetail] = useState(false)
    const [currentTab, setCurrentTab] = useState('Loại xe')


    function renderList() {
        if(currentTab === 'Loại xe') {
            return <DeviceList setDetail={setDetail} detail={detail}/>
        }
        else if(currentTab === 'Điểm giao dịch') {
            return <TransactionPointList setEdit={setEdit}/>
        }
        else if(currentTab === 'Loại khách hàng') {
            return <CustomerTypeList setEdit={setEdit}/>
        }
        else if(currentTab === 'Loại báo cáo') {
            return <ReportTypeList setEdit={setEdit}/>
        }
        else {
            return <NotificationTypeList setEdit={setEdit}/>
        }
    }

    function renderBody() {
        if (edit) {
            return renderEditModal(currentTab, setEdit)
        }
        if (add) {
            return renderAddModal(currentTab, setAdd)
        }
        return (
            <>
                <Filter setAdd={setAdd}/>
                {renderList()}
            </>
        )
    }

    return (
        <div id={'Category'} >
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} setAdd={setAdd}/>
            {renderBody()}
        </div>
    )
}

function renderAddModal(currentTab, setAdd) {
    if(currentTab === 'Loại xe') {
        return <AddDevice setAdd={setAdd}/>
    }
    else if(currentTab === 'Điểm giao dịch') {
        return <AddComponent header={'Thêm điểm giao dịch'} name={'Tên điểm giao dịch'}
                             detail={'Địa chỉ'} setAdd={setAdd}/>
    }
    else if(currentTab === 'Loại khách hàng') {
        return <AddComponent header={'Thêm loại khách hàng'} name={'Tên loại khách hàng'}
                             detail={'Mô tả'} setAdd={setAdd}/>
    }
    else if(currentTab === 'Loại báo cáo') {
        return <AddComponent header={'Thêm loại báo cáo'} name={'Tên loại báo cáo'}
                             detail={'Mô tả'} setAdd={setAdd}/>
    }
    else {
        return <AddComponent header={'Thêm loại thông báo'} name={'Tên loại thông báo'}
                             detail={'Mô tả'} setAdd={setAdd}/>
    }
}

function renderEditModal(currentTab, setEdit) {
    if(currentTab === 'Loại xe') {
        return <AddDevice setAdd={setEdit}/>
    }
    else if(currentTab === 'Điểm giao dịch') {
        return <AddComponent header={'Chỉnh sửa điểm giao dịch'} name={'Tên điểm giao dịch'}
                             detail={'Địa chỉ'} setAdd={setEdit}/>
    }
    else if(currentTab === 'Loại khách hàng') {
        return <AddComponent header={'Chỉnh sửa loại khách hàng'} name={'Tên loại khách hàng'}
                             detail={'Mô tả'} setAdd={setEdit}/>
    }
    else if(currentTab === 'Loại báo cáo') {
        return <AddComponent header={'Chỉnh sửa loại báo cáo'} name={'Tên loại báo cáo'}
                             detail={'Mô tả'} setAdd={setEdit}/>
    }
    else {
        return <AddComponent header={'Chỉnh sửa loại thông báo'} name={'Tên loại thông báo'}
                             detail={'Mô tả'} setAdd={setEdit}/>
    }
}

