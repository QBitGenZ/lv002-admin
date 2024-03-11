import {TransactionPoint} from "../../fakeData/TransactionPoint";
import './TransactionPointList.css'

export default function TransactionPointList({setEdit}) {
    return (
        <table id={'Point-List'} >
            <thead>
            <tr>
                <td className={'point-name'}>Điểm giao dịch</td>
                <td className={'point-address'}>Địa chỉ</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {TransactionPoint.map((point) => <DeviceItem point={point} setEdit={setEdit}/>)}
            </tbody>

        </table>
    )
}


function DeviceItem({point, setEdit}) {
    const handleClick = () => {
        setEdit(true)
    }

    return (
        <tr id={point.id} className={'Point-Item'}>
            <td className={'point-name'}>{point.name}</td>
            <td className={'point-address'}>{point.address}</td>
            <td className={'button-group'}>
                <button className={'edit-button'} onClick={handleClick}>Chỉnh sửa</button>
                <button className={'delete-button'}>Xóa</button>
            </td>
        </tr>
    )
}