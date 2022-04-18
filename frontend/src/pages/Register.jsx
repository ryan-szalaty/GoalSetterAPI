import {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {name, email, password, confirmPassword} = formData;
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
                <FaUser /> Register
            </h1>
            <p>
                Please create an acccount.
            </p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                    className='form-control' 
                    type='text' 
                    id='name' 
                    name='name' 
                    value={name} 
                    placeholder='Enter your name.' 
                    onChange={onChange}
                    />
                </div>
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
                    placeholder='Choose a password.' 
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input 
                    className='form-control' 
                    type='password' 
                    id='confirmPassword' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    placeholder='Please confirm your password.' 
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

export default Register