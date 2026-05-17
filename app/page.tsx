'use client'
import { useUser, SignInButton, UserButton } from '@clerk/nextjs'

export default function Home() {
  const { isSignedIn } = useUser()

  return (
    <main style={{minHeight: '100vh', background: '#080C14', color: 'white', fontFamily: 'system-ui, sans-serif', overflow: 'hidden'}}>
      
      {/* Background glow */}
      <div style={{position: 'fixed', top: '-200px', left: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)', pointerEvents: 'none'}} />
      <div style={{position: 'fixed', bottom: '-200px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,92,252,0.07) 0%, transparent 70%)', pointerEvents: 'none'}} />

      {/* Navbar */}
      <nav style={{position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px', background: 'rgba(8,12,20,0.8)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 100, boxSizing: 'border-box'}}>
        <div style={{fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px'}}>
          ziyo<span style={{color: '#00C896'}}>AI</span>
        </div>
        <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
          <a href="#" style={{color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px'}}>Kurslar</a>
          <a href="#" style={{color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px'}}>Haqida</a>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button style={{background: '#00C896', color: 'black', fontWeight: '700', padding: '9px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px'}}>
                Kirish
              </button>
            </SignInButton>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '0 24px', position: 'relative', zIndex: 1}}>
        
        {/* Badge */}
        <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,200,150,0.08)', border: '1px solid rgba(0,200,150,0.2)', color: '#00C896', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', marginBottom: '32px'}}>
          <span style={{width: '6px', height: '6px', background: '#00C896', borderRadius: '50%', display: 'inline-block'}}></span>
          O'zbek tilida · Bepul · Amaliy
        </div>

        {/* Title */}
        <h1 style={{fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-2px', marginBottom: '24px', maxWidth: '800px'}}>
          Sun'iy intellektni{' '}
          <span style={{color: '#00C896'}}>o'zbek tilida</span>{' '}
          o'rganing
        </h1>

        {/* Sub */}
        <p style={{fontSize: '18px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', maxWidth: '520px', marginBottom: '40px'}}>
          ChatGPT, Claude, Midjourney va boshqa AI vositalarni ishlatishni O'zbekiston hamjamiyatidan o'rganing.
        </p>

        {/* CTA */}
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
          {isSignedIn ? (
            <a href="/dashboard" style={{background: '#00C896', color: 'black', fontWeight: '700', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '16px'}}>
              Kurslarni ko'rish →
            </a>
          ) : (
            <SignInButton mode="modal">
              <button style={{background: '#00C896', color: 'black', fontWeight: '700', padding: '14px 28px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '16px'}}>
                Bepul boshlash →
              </button>
            </SignInButton>
          )}
          <button style={{background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)', fontWeight: '500', padding: '14px 24px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontSize: '16px'}}>
            ▶ Demo ko'rish
          </button>
        </div>

        {/* Stats */}
        <div style={{display: 'flex', gap: '48px', marginTop: '64px', flexWrap: 'wrap', justifyContent: 'center'}}>
          {[
            {val: '12,000+', label: 'Talaba'},
            {val: '40+', label: 'Kurs'},
            {val: '100%', label: "O'zbek tilida"},
            {val: 'Bepul', label: 'Boshlash'},
          ].map((s) => (
            <div key={s.label} style={{textAlign: 'center'}}>
              <div style={{fontSize: '28px', fontWeight: '800', letterSpacing: '-1px'}}>{s.val}</div>
              <div style={{fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '4px'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Kurslar bo'limi */}
      <section style={{padding: '80px 40px', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1}}>
        <h2 style={{fontSize: '32px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '40px'}}>Kurslar</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px'}}>
          {[
            {emoji: '🤖', title: 'ChatGPT bilan ishlash', level: "Boshlang'ich", lessons: 12, color: '#00C896'},
            {emoji: '🎨', title: 'AI bilan rasm yaratish', level: "O'rta", lessons: 8, color: '#FF6B4A'},
            {emoji: '💼', title: 'Biznes uchun AI', level: "O'rta", lessons: 15, color: '#7C5CFC'},
            {emoji: '💻', title: 'AI bilan kod yozish', level: "Ilg'or", lessons: 20, color: '#F5A623'},
            {emoji: '✍️', title: 'AI Copywriting', level: "Boshlang'ich", lessons: 10, color: '#00B4D8'},
            {emoji: '🧠', title: 'Prompt Engineering', level: "O'rta", lessons: 14, color: '#E040FB'},
          ].map((c) => (
            <div key={c.title}
              style={{background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'transform 0.2s'}}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
            >
              <div style={{fontSize: '32px', marginBottom: '12px'}}>{c.emoji}</div>
              <h3 style={{fontSize: '16px', fontWeight: '700', marginBottom: '8px'}}>{c.title}</h3>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontSize: '12px', color: c.color, fontWeight: '600'}}>{c.level}</span>
                <span style={{fontSize: '12px', color: 'rgba(255,255,255,0.3)'}}>📚 {c.lessons} dars</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '13px', position: 'relative', zIndex: 1}}>
        <div style={{fontWeight: '800', fontSize: '18px', color: 'white'}}>ziyo<span style={{color: '#00C896'}}>AI</span></div>
        <span>© 2026 ZiyoAI · O'zbek AI ta'lim platformasi</span>
      </footer>

    </main>
  )
}