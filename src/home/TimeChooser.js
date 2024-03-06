import './TimeChooser.css'

export default function TimeChooser(){
    return (
        <div id={'Time-Chooser'}>
            <span className={'begin-chooser-container'}>
                <div className={'title'}>Từ</div>
                <input className={'begin-time'} type={'date'}/>
            </span>
            <span className={'end-chooser-container'}>
                <div className={'title'}>Đến</div>
                <input className={'end-time'} type={'date'}/>
            </span>
        </div>
    )
}