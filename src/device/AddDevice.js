import './AddDevice.css'

export default function AddDevice({setAddDevice}) {

    function handleClick(e) {
        setAddDevice(false)
    }

    return (
        <div id={'Add-Device'}>
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
                        <td>
                            <div>Tên thiết bị</div>
                            <input type={"text"}/>
                        </td>
                        <td>
                            <div>Giá</div>
                            <input type={"text"}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Loại xe</div>
                            <input type={"text"}/>
                        </td>
                        <td>
                            <div>Điểm giao dịch</div>
                            <input type={"text"}/>
                        </td>
                    </tr>
                    <tr>
                    <td colSpan={2}>
                            <div>Mô tả</div>
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