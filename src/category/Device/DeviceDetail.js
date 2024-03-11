import './DeviceDetail.css'

export default function DeviceDetail({setDetail, device_object}) {
    function handleClick(e) {
        setDetail(false)
    }

    return (
        <div id={'Device-Detail'}>
            <div className={'image-container'}>
                <input type="file" id="image-input" accept="image/*" style={{display: 'none'}}/>
                <label for="image-input">
                    <img src={process.env.PUBLIC_URL + 'assets/images/category/image-input.png'}
                         alt="Your Image"/>
                </label>
            </div>

            <div className={'info-container'}>
                <div className={'name'}>
                    {device_object.name}
                </div>

                <div className={'button-container'}>
                    <button id={'button-exit'} onClick={handleClick}>Hủy bỏ</button>
                    <button id={'button-save'}>Lưu</button>
                </div>
            </div>
        </div>

    )
}