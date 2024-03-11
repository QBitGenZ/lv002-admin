import {customerType} from "../../fakeData/Customer";
import './NotificationTypeList.css'

export default function NotificationTypeList({setEdit}) {
    return (
        <table id={'Notification-Type-List'}>
            <thead>
                <td>Loại thông báo</td>
                <td>Mô tả</td>
                <td></td>
            </thead>
            <tbody>
                {customerType.map((type) => <NotificationTypeItem type={type} setEdit={setEdit}/>)}
            </tbody>

        </table>
    )
}


function NotificationTypeItem({type, setEdit}) {
    const handleClick = () => {
        setEdit(true)
    }

    return (
        <tr id={type.id} className={'Notification-Type-Item'}>
            <td className={'type-name'}>{type.name}</td>
            <td className={'type-description'}>{type.description}</td>
            <td className={'button-group'}>
                <button className={'edit-button'} onClick={handleClick}>Chỉnh sửa</button>
                <button className={'delete-button'}>Xóa</button>
            </td>
        </tr>
    )
}