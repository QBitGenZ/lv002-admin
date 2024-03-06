
import './Filter.css'
export default function Filter({setAddDevice}) {
    function handleClick(e) {
        setAddDevice(true)
    }

    return (
        <div id={'Filter'}>
            <input type={'text'} placeholder={'Bộ lọc'}/>
            <input type={'text'} placeholder={'Bộ lọc'}/>

            <button onClick={handleClick}>Thêm mới</button>
        </div>
    )
}