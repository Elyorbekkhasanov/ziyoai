'use client'
import { useSignIn } from '@clerk/nextjs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const { signIn, isLoaded } = useSignIn()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!isLoaded) return
    setLoading(true)
    setError('')
    try {
      const result = await signIn.create({ identifier: email, password })
      if (result.status === 'complete') {
        router.push('/dashboard')
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Xato yuz berdi')
    }
    setLoading(false)
  }

  return (
    <main style={{minHeight: '100vh', background: '#080C14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', padding: '24px'}}>
      
      <div style={{position: 'fixed', top: '-200px', left: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)', pointerEvents: 'none'}} />
      <div style={{position: 'fixed', bottom: '-200px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,92,252,0.07) 0%, transparent 70%)', pointerEvents: 'none'}} />

      <div style={{width: '100%', maxWidth: '420px', zIndex: 1}}>
        
        {/* Logo */}
        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <div style={{fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '8px'}}>
            ziyo<span style={{color: '#00C896'}}>AI</span>
          </div>
          <p style={{color: 'rgba(255,255,255,0.4)', fontSize: '14px'}}>Xush kelibsiz!</p>
        </div>

        {/* Card */}
        <div style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '32px'}}>
          
          <h2 style={{fontSize: '22px', fontWeight: '700', marginBottom: '24px', color: 'white'}}>Kirish</h2>

          {/* Google */}
          <button style={{width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px'}}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google bilan kirish
          </button>

          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
            <div style={{flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)'}} />
            <span style={{color: 'rgba(255,255,255,0.2)', fontSize: '12px'}}>yoki</span>
            <div style={{flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)'}} />
          </div>

          {/* Email */}
          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px'}}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="sizning@email.com"
              style={{width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 14px', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}}
            />
          </div>

          {/* Password */}
          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px'}}>Parol</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 14px', color: 'white', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}}
            />
          </div>

          {error && <p style={{color: '#FF6B6B', fontSize: '13px', marginBottom: '16px'}}>{error}</p>}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{width: '100%', background: '#00C896', color: 'black', fontWeight: '700', padding: '13px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '15px', opacity: loading ? 0.7 : 1}}
          >
            {loading ? 'Kirilmoqda...' : 'Kirish →'}
          </button>

          <p style={{textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '20px'}}>
            Akkaunt yo'qmi?{' '}
            <a href="/sign-up" style={{color: '#00C896', textDecoration: 'none'}}>Ro'yxatdan o'ting</a>
          </p>
        </div>
      </div>
    </main>
  )
}