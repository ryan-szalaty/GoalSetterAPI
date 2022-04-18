import {useState, useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const {email, password} = formData;
    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState, 
            [event.target.name]: event.target.value
        }));
    };
    const onSubmit = (event) => {
        event.preventDefault()
    };
  return (
    <div>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>
                Login and start setting goals!
            </p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                    className='form-control' 
                    type='email' 
                    id='email' 
                    name='email' 
                    value={email} 
                    placeholder='Enter your email.' 
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    className='form-control' 
                    type='password' 
                    id='password' 
                    name='password' 
                    value={password} 
                    placeholder='Enter your password.' 
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Login