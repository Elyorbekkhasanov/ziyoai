'use client'
import { useUser, SignInButton, UserButton } from '@clerk/nextjs'

export default function Home() {
  const { isSignedIn } = useUser()

  return (
    <main style={{minHeight: '100vh', background: '#080C14', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      
      <div style={{position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', background: 'rgba(8,12,20,0.8)'}}>
        <div style={{fontSize: '22px', fontWeight: 'bold'}}>
          ziyo<span style={{color: '#00C896'}}>AI</span>
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button style={{background: '#00C896', color: 'black', fontWeight: 'bold', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer'}}>
              Kirish
            </button>
          </SignInButton>
        )}
      </div>

      <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center'}}>
        ziyo<span style={{color: '#00C896'}}>AI</span>
      </h1>
      <p style={{color: '#888', marginBottom: '40px'}}>
        O'zbek tilida AI ta'lim platformasi
      </p>
      
      {isSignedIn ? (
        <a href="/dashboard" style={{background: '#00C896', color: 'black', fontWeight: 'bold', padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px'}}>
          Kurslarni ko'rish
        </a>
      ) : (
        <SignInButton mode="modal">
          <button style={{background: '#00C896', color: 'black', fontWeight: 'bold', padding: '14px 32px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '16px'}}>
            Bepul boshlash
          </button>
        </SignInButton>
      )}

    </main>
  )
}