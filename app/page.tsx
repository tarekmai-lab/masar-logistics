export default function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', direction: 'rtl', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ color: '#1a365d' }}>مسار للخدمات اللوجستية</h1>
      <p>مرحباً بكم في نظام تتبع الشحنات الخاص بـ Masar Holdings</p>
      
      <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '30px auto' }}>
        <h3 style={{ marginBottom: '15px' }}>تتبع شحنتك</h3>
        <input 
          type="text" 
          placeholder="أدخل رقم التتبع هنا..." 
          style={{ width: '90%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button style={{ backgroundColor: '#1a365d', color: 'white', border: 'none', padding: '12px 25px', cursor: 'pointer', borderRadius: '5px', width: '95%' }}>
          بحث عن الشحنة
        </button>
      </div>
      
      <footer style={{ marginTop: '50px', fontSize: '12px', color: '#666' }}>
        &copy; 2026 مسار القابضة LLC - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
