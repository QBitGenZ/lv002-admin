import './AddComponent.css'

export default function AddComponent({header, name, detail, setAdd}) {

    function handleClick() {
        setAdd(false)
    }

    return (
        <div id={'Add-Background'}>
            <div id={'Add-Component'}>
                <h2>{header}</h2>
                <div className={'name'}>
                    {name}
                </div>
                <input type={'text'}/>
                <div className={'detail'}>
                    {detail}
                </div>
                <input type={'text'}/>

                <div className={'button-container'}>
                    <button className={'button-exit'} onClick={handleClick}>Hủy bỏ</button>
                    <button className={'button-save'}>Lưu</button>
                </div>
            </div>
        </div>
    );
}