import {customerType} from "../../fakeData/Customer";
import './ReportTypeList.css'

export default function ReportTypeList({setEdit}) {
    return (
        <table id={'Report-Type-List'}>
            <thead>
                <td>Loại báo cáo</td>
                <td>Mô tả</td>
                <td></td>
            </thead>
            <tbody>
                {customerType.map((type) => <ReportTypeItem type={type} setEdit={setEdit}/>)}
            </tbody>

        </table>
    )
}


function ReportTypeItem({type, setEdit}) {
    const handleClick = () => {
        setEdit(true)
    }

    return (
        <tr id={type.id} className={'Report-Type-Item'}>
            <td className={'type-name'}>{type.name}</td>
            <td className={'type-description'}>{type.description}</td>
            <td className={'button-group'}>
                <button className={'edit-button'} onClick={handleClick}>Chỉnh sửa</button>
                <button className={'delete-button'}>Xóa</button>
            </td>
        </tr>
    )
}