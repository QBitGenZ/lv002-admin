import './index.css'
import Filter from "./Filter";
import AddDevice from "./AddDevice";
import {useState} from "react";
import {bicycles} from "../fakeData/Bicycle";

export default function Device() {
    const [addDevice, setAddDevice] = useState(false)

    function renderBody() {
        if(!addDevice) {
            return (<table>
                <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Loại xe đạp
                    </th>
                    <th className={'text-align-center'}>
                        Số lần sử dụng
                    </th>
                    <th className={'text-align-center'}>
                        Điểm giao dịch
                    </th>
                    <th className={'text-align-center'}>
                        Trạng thái sử dụng
                    </th>
                </tr>
                </thead>
                <tbody>
                {bicycles.map((device) => <DeviceItem device={device}/> )}
                </tbody>
            </table>)
        } else {
            return <AddDevice setAddDevice={setAddDevice}/>
        }
    }

    return (
        <div id={'Device'}>
            <Filter setAddDevice={setAddDevice}/>
            {renderBody()}
        </div>
    )
}

function DeviceItem({device}) {
    return (
        <tr>
            <td>
                {device.uuid}
            </td>
            <td>
                {device.type}
            </td>
            <td className={'text-align-center'}>
                {device.used}
            </td>
            <td>
                {device.transaction}
            </td>
            <td className={'text-align-center'}>
                {device.status}
            </td>
        </tr>
    )
}