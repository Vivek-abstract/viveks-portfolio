import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '16px' }}>Oops!</h1>
      <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)' }}>
        You are lost, traveller. Head back{' '}
        <Link href="/" style={{ color: 'var(--primary)', fontWeight: 600 }}>
          home
        </Link>
      </p>
    </div>
  );
}
