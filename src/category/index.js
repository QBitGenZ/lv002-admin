import './index.css'
import Header from "./Header";
import Filter from "./Filter";
import {useState} from "react";
import AddDevice from "./AddDevice";

export default function Category() {
    const [add, setAdd] = useState(false)

    function renderBody() {
        if(!add) {
            return <Filter setAdd={setAdd}/>
        }
        else {
            return <AddDevice setAdd={setAdd}/>
        }
    }

    return (
        <div id={'Category'} >
            <Header />
            {renderBody()}
        </div>
    )
}