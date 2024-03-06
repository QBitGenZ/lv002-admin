import {useLayoutEffect, useState} from "react";
import './Login.css'
import PropTypes from "prop-types";
export default  function Login ({setAccessToken, setRefreshToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useLayoutEffect(() => {
        document.querySelector('body').style.backgroundColor = 'white';
    }, []);
    function preventSubmit(event) {
        event.preventDefault()
        let user = {
            username: username,
            password: password
        }

        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        }
        ).then(res => res.json())
            .then(data => {
                setAccessToken(data.access)
                setRefreshToken(data.refresh)

                localStorage.setItem('access', data.access)
                localStorage.setItem('refresh', data.refresh)
            })
            .catch(error => console.log(error))
    }

    return (
        <div id='Login'>
            <img className={'logo512'} alt='logo' src={process.env.PUBLIC_URL + '/logo512.png'}/>
            <form onSubmit={preventSubmit}>
                <label htmlFor='username'>Tên đăng nhập</label>
                <input id='username' type='text' value={username}
                       onChange={e => setUsername(e.target.value)}/>
                <label htmlFor='password'>Mật khẩu</label>
                <input id='password' type='password' value={password}
                        onChange={e => setPassword(e.target.value)}/>
                <input id='submit' type='submit' value='Đăng nhập'/>
                <img className='the-boy' alt='Người con trai dẫn xe đạp'
                     src={process.env.PUBLIC_URL + 'assets/images/login/the_boy.png'}/>
                <img className={'the-girl'}  alt={'Người con gái chạy xe đap'}
                     src={process.env.PUBLIC_URL + 'assets/images/login/the_girl.png'}/>
            </form>

        </div>
    )
}

Login.propTypes = {
    setAccessToken: PropTypes.func.isRequired,
    setRefreshToken: PropTypes.func.isRequired
}