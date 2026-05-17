import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <main style={{minHeight: '100vh', background: '#080C14', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{position: 'fixed', top: '-200px', left: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)', pointerEvents: 'none'}} />
      <div style={{position: 'fixed', bottom: '-200px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,92,252,0.07) 0%, transparent 70%)', pointerEvents: 'none'}} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', zIndex: 1}}>
        <div style={{fontSize: '28px', fontWeight: '800', color: 'white'}}>
          ziyo<span style={{color: '#00C896'}}>AI</span>
        </div>
        <SignUp appearance={{
          variables: {
            colorPrimary: '#00C896',
            colorBackground: '#111827',
            colorText: 'white',
            colorTextSecondary: 'rgba(255,255,255,0.5)',
            colorInputBackground: 'rgba(255,255,255,0.05)',
            colorInputText: 'white',
            borderRadius: '10px',
          },
          elements: {
            card: { border: '1px solid rgba(255,255,255,0.07)', boxShadow: 'none' },
            formButtonPrimary: { background: '#00C896', color: 'black', fontWeight: '700' },
          }
        }} />
      </div>
    </main>
  )
}