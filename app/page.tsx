'use client'

export default function Home() {
  const scrollToTariffs = () => {
    const section = document.getElementById('tariffs')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Заголовок */}
      <h1 style={{ fontSize: '36px', marginBottom: '40px' }}>
        Become a millionaire lite
      </h1>

      {/* Кнопка перехода */}
      <button
        onClick={scrollToTariffs}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: 'white',
          color: 'black',
          fontWeight: 'bold',
          transition: 'all 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1900ff')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
      >
        Перейти к тарифам
      </button>
      <img src="/banner.png.jpg" alt="banner"style={{ marginTop: "40px", width: "400px" }} />
      <h2 style={{ color: "white", fontSize: "20px" }}>
  Научись создавать и продавать свои продукты 
</h2>

      {/* Секция тарифов */}
      <div
        id="tariffs"
        style={{
          marginTop: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Тариф 1 */}
        <div
          style={{
            backgroundColor: '#111',
            border: '1px solid red',
            borderRadius: '12px',
            padding: '32px',
            maxWidth: '400px',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(0, 4, 255, 0.3)',
          }}
        >
          <h2 style={{ fontSize: '24px', color: '#fff' }}>BML</h2>
          <h3 style={{ fontSize: '20px', color: '#fff', margin: '10px 0' }}>350$</h3>
          <p style={{ marginTop: '16px', lineHeight: '1.6', color: '#ccc' }}>
            
            Вечный доступ в BML<br />
            Неограниченный доступ к личке Outforce<br />
            
          </p>
          <a
            href="https://t.me/Outforce1?text=КОНСУЛЬТАЦИЯ%20BML"
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: '24px',
              padding: '16px 32px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#1900ff')
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'red')}
          >
            ВОЙТИ В BML
          </a>
        </div>

        {/* Тариф 2 */}
        <div
          style={{
            backgroundColor: '#111',
            border: '1px solid #ff0000',
            borderRadius: '12px',
            padding: '32px',
            maxWidth: '400px',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
          }}
        >
          <h2 style={{ fontSize: '24px', color: '#fff' }}>КОНСУЛЬТАЦИЯ + BML</h2>
          <h3 style={{ fontSize: '20px', color: '#fff', margin: '10px 0' }}>550$</h3>
          <p style={{ marginTop: '16px', lineHeight: '1.6', color: '#ccc' }}>
            Часовой звонок с Outforce<br />
            Вечный доступ в BML<br />
            Неограниченный доступ к личке Outforce<br />
            Пошаговый план действий именно для тебя<br />
            
            </p>
          <a
            href="https://t.me/Outforce1?text=PREMIUM%20BML"
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: '24px',
              padding: '16px 32px',
              backgroundColor: '#ff0000',
              color: 'black',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#ff0000')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = '#ff0000')
            }
          >
            ВОЙТИ В BML
          </a>
        </div>
      </div>
    </main>
  )
}