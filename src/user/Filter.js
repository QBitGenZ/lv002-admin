
import './Filter.css'
export default function Filter({currentTab, setAddUser}) {
    function handleClick(e)  {
        setAddUser(true)
    }

    return (
        <div id={'Filter'}>
            <input type={'text'} placeholder={'Bộ lọc'}/>
            <input type={'text'} placeholder={'Bộ lọc'}/>

            {currentTab === 'Nhân viên' ? <button onClick={handleClick}>Thêm mới</button> : ""}
        </div>
    )
}