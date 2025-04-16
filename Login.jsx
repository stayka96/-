
import React from "react";

export default function Login() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5'
    }}>
      <h1 style={{ color: '#007bff' }}>تسجيل الدخول</h1>
      <input type="text" placeholder="رقم الهاتف" style={{ padding: '10px', margin: '10px', width: '250px' }} />
      <input type="password" placeholder="القن السري" style={{ padding: '10px', margin: '10px', width: '250px' }} />
      <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>دخول</button>
      <a href="#" style={{ marginTop: '10px', color: '#007bff' }}>نسيت القن السري؟</a>
    </div>
  );
}
