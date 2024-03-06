import './index.css'
import HomeHeader from "./Header";
import TimeChooser from "./TimeChooser";
export default function Home() {
    return (
        <div id={'Home'}>
            <HomeHeader/>
            <TimeChooser/>
        </div>
    )
}
