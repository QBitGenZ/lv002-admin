import {typeOfBicycle} from "../../fakeData/Bicycle";
import './DeviceList.css'

export default function DeviceList({setDetail, detail}) {
    return (
        <div id={'Device-List'}>
            {typeOfBicycle.map((device) => <DeviceItem device={device}
                                                       setDetail={setDetail}/>)}
        </div>
    )
}


function DeviceItem({device, setDetail}) {

    function handleClick(e) {

        setDetail(true)
    }

    return (
        <span className={'Device-Item'} onClick={handleClick}>
            <img src={process.env.PUBLIC_URL + 'logo192.png'} alt={device.name}/>
            <div className={'device-name'}>{device.name}</div>
            <div className={'device-price'}>{device.price}</div>
        </span>
    )
}