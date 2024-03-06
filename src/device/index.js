import './index.css'
import Filter from "./Filter";
import AddDevice from "./AddDevice";
import {useState} from "react";

export default function Device() {
    const [addDevice, setAddDevice] = useState(false)

    function renderBody() {
        if(!addDevice) {
            return (<div>Tưởng tượng đây là danh sách</div>)
        }
        else {
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