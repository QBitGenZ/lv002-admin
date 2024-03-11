import './AddEvent.css'

export default function AddEvent({setAdd}) {

    function handleClick(e) {
        setAdd(false)
    }

    return (
        <div id={'Add-Event'}>
            <div className={'image-container'}>
                <input type="file" id="image-input" accept="image/*" style={{display: 'none'}}/>
                <label for="image-input">
                    <img src={process.env.PUBLIC_URL + 'assets/images/category/image-input.png'}
                         alt="Your Image"/>
                </label>
            </div>

            <div className={'info-container'}>
                <table>
                    <tr>
                        <td colSpan={2}>
                            <div>Tên sự kiện</div>
                            <input style={{width: '90%'}} type={"text"}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div>Địa chỉ</div>
                            <input style={{width: '90%'}} type={"text"}/>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Ngày bắt đầu</div>
                            <input type={"datetime-local"}/>
                        </td>
                        <td>
                            <div>Ngày kết thúc</div>
                            <input type={"datetime-local"}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div>Chi tiết sự kiện</div>
                            <textarea rows={8}/>
                        </td>

                    </tr>
                </table>

                <div className={'button-container'}>
                    <button id={'button-exit'} onClick={handleClick}>Hủy bỏ</button>
                    <button id={'button-save'}>Lưu</button>
                </div>

            </div>
        </div>

    )
}