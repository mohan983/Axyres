import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import Navbar from '../components/Navbar.jsx'

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [values, setValues] = useState({email: '', password: '' })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setError(null)
    const { email, password } = values
    if (!email || !password) {
      setError('All fields are required')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    setLoading(true)
    try {
      await signup(values)
      navigate('/login', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="card" style={{maxWidth:480, margin:'80px auto'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
            <h2 style={{margin:0}}>Create Account</h2>
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <input className="input" name="email" placeholder="Email" value={values.email} onChange={onChange} />
              <input className="input" type="password" name="password" placeholder="Password" value={values.password} onChange={onChange} />
            </div>
            {error && <p style={{color:'tomato', marginTop:10}}>{error}</p>}
            <div style={{height:12}} />
            <button className="btn primary" disabled={loading}>{loading ? 'Creating...' : 'Sign Up'}</button>
          </form>
          <p className="muted" style={{marginTop:12}}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  )
}
