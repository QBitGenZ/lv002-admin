import {customerType} from "../../fakeData/Customer";
import './CustomerTypeList.css'

export default function CustomerTypeList({setEdit}) {
    return (
        <table id={'Customer-Type-List'}>
            <thead>
                <td>Loại khách hàng</td>
                <td>Mô tả</td>
                <td></td>
            </thead>
            <tbody>
                {customerType.map((type) => <CustomerTypeItem type={type} setEdit={setEdit}/>)}
            </tbody>

        </table>
    )
}


function CustomerTypeItem({type, setEdit}) {
    const handleClick = () => {
        setEdit(true)
    }

    return (
        <tr id={type.id} className={'Customer-Type-Item'}>
            <td className={'type-name'}>{type.name}</td>
            <td className={'type-description'}>{type.description}</td>
            <td className={'button-group'}>
                <button className={'edit-button'} onClick={handleClick}>Chỉnh sửa</button>
                <button className={'delete-button'}>Xóa</button>
            </td>
        </tr>
    )
}