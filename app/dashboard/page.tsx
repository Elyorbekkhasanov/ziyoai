'use client'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const courses = [
  { emoji: '🤖', title: 'ChatGPT bilan ishlash', level: "Boshlang'ich", lessons: 12, color: '#00C896', progress: 0 },
  { emoji: '🎨', title: 'AI bilan rasm yaratish', level: "O'rta", lessons: 8, color: '#FF6B4A', progress: 0 },
  { emoji: '💼', title: 'Biznes uchun AI', level: "O'rta", lessons: 15, color: '#7C5CFC', progress: 0 },
  { emoji: '💻', title: 'AI bilan kod yozish', level: "Ilg'or", lessons: 20, color: '#F5A623', progress: 0 },
  { emoji: '✍️', title: 'AI Copywriting', level: "Boshlang'ich", lessons: 10, color: '#00B4D8', progress: 0 },
  { emoji: '🧠', title: 'Prompt Engineering', level: "O'rta", lessons: 14, color: '#E040FB', progress: 0 },
]

export default function Dashboard() {
  const { user, isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded || !isSignedIn) return null

  return (
    <main style={{minHeight: '100vh', background: '#080C14', color: 'white', fontFamily: 'system-ui, sans-serif'}}>
      
      {/* Background */}
      <div style={{position: 'fixed', top: '-200px', left: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 70%)', pointerEvents: 'none'}} />

      {/* Navbar */}
      <nav style={{position: 'fixed', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px', background: 'rgba(8,12,20,0.9)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 100, boxSizing: 'border-box'}}>
        <div style={{fontSize: '22px', fontWeight: '800'}}>
          ziyo<span style={{color: '#00C896'}}>AI</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <span style={{fontSize: '14px', color: 'rgba(255,255,255,0.5)'}}>
            Salom, {user.firstName || user.emailAddresses[0].emailAddress.split('@')[0]}! 👋
          </span>
          <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #00C896, #7C5CFC)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', cursor: 'pointer'}}
            onClick={() => router.push('/profile')}>
            {(user.firstName?.[0] || user.emailAddresses[0].emailAddress[0]).toUpperCase()}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '100px 40px 60px'}}>

        {/* Welcome */}
        <div style={{background: 'linear-gradient(135deg, rgba(0,200,150,0.1), rgba(124,92,252,0.1))', border: '1px solid rgba(0,200,150,0.15)', borderRadius: '16px', padding: '28px 32px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'}}>
          <div>
            <h1 style={{fontSize: '24px', fontWeight: '800', marginBottom: '8px'}}>
              Xush kelibsiz, {user.firstName || 'Talaba'}! 🎉
            </h1>
            <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '14px'}}>
              AI dunyosini o'zbek tilida kashf eting. Qaysi kursdan boshlaysiz?
            </p>
          </div>
          <div style={{display: 'flex', gap: '24px'}}>
            {[
              {val: '0', label: 'Tugallangan'},
              {val: '0', label: 'Davom etayotgan'},
              {val: `${courses.length}`, label: 'Mavjud kurslar'},
            ].map(s => (
              <div key={s.label} style={{textAlign: 'center'}}>
                <div style={{fontSize: '24px', fontWeight: '800', color: '#00C896'}}>{s.val}</div>
                <div style={{fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '4px'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Kurslar */}
        <h2 style={{fontSize: '20px', fontWeight: '700', marginBottom: '20px'}}>Kurslar</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px'}}>
          {courses.map(c => (
            <div key={c.title}
              onClick={() => router.push(`/courses/${c.title.toLowerCase().replace(/ /g, '-')}`)}
              style={{background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'all 0.2s'}}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = c.color + '66'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              <div style={{fontSize: '32px', marginBottom: '12px'}}>{c.emoji}</div>
              <h3 style={{fontSize: '16px', fontWeight: '700', marginBottom: '8px'}}>{c.title}</h3>
              <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginBottom: '16px'}}>{c.lessons} dars · {c.level}</p>
              
              {/* Progress bar */}
              <div style={{height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden'}}>
                <div style={{height: '100%', width: `${c.progress}%`, background: c.color, borderRadius: '2px'}} />
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '8px'}}>
                <span style={{fontSize: '11px', color: 'rgba(255,255,255,0.3)'}}>
                  {c.progress === 0 ? 'Boshlanmagan' : `${c.progress}% tugallandi`}
                </span>
                <span style={{fontSize: '11px', color: c.color, fontWeight: '600'}}>Boshlash →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}