import React, {useState, useEffect} from 'react'
import { FaUser } from 'react-icons/fa' 


const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

  return (
    <>
        <section className="heading">
            <h5><FaUser /> Registrar Usuario</h5>
            <p>Por favor ingresa tus datos para crear una cuenta</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={name}
                        placeholder="Ingresa tu nombre"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Ingresa tu email"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Ingresa tu contraseña"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Confirma tu contraseña"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Registrar</button>
                </div>
            </form>
        </section>
    
    </>
  )
}

export default Register