import './index.css'
import Filter from "./Filter";
import event from "../fakeData/Event";
import {compareTime, convertIsoToDdMmYyyy} from "./functions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import AddEvent from "./AddEvent";


export default function Event() {
    const [add, setAdd] = useState(false)

    return (
        <div id={'Event'}>
            {renderBody(add, setAdd)}
        </div>
    )
}

function renderBody(add, setAdd) {
    if(add === true)
        return <AddEvent setAdd={setAdd}/>
    return (
        <div id={'Event-Body'}>
            <Filter setAdd={setAdd}/>
            {event.map((event) => <EventItem event={event}/>)}
        </div>
    )
}

function EventItem({event}) {
    return (
        <span className={'Event-Item'}>
            <img src={process.env.PUBLIC_URL + 'logo192.png'} alt={event.name}/>
            <div className={'event-name'}>{event.name}
                {<EventState event={event}  />}
            </div>
            <div className={'event-times'}>
                <FontAwesomeIcon style={{marginRight: '10px',
                    color: 'rgba(0, 146, 82, 1)'}} icon={faCalendarDays} />
                {`Thời gian ${convertIsoToDdMmYyyy(event.start_time)} - 
                    ${convertIsoToDdMmYyyy(event.end_time)}`}
            </div>
        </span>
    )
}

function EventState({event}) {
    const compare = compareTime(event.start_time, event.end_time)
    if(compare<0) {
        return (<div className={'event-state upcoming'}>
            Sắp diễn ra
        </div>)
    }
    else if(compare === 0) {
        return (<div className={'event-state ongoing'}>
            Đang diễn ra
        </div>)
    }
    else {
        return (<div className={'event-state finished'}>
            Đã kết thúc
        </div>)
    }
}