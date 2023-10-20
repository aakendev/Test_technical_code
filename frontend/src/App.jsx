import { useState } from 'react';

export default function App() {
  const [angka, setAngka] = useState('');
  function onChange(e) {
    setAngka(Number(e.target.value));
  }
  async function tombolHitungGanjil() {
    const postResponse = await fetch('/api/bilanganganjil', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ angka }),
    });
    const data = await postResponse.json();
    console.log(data);
  }

  async function tombolHitungPrima() {
    const postResponse = await fetch('/api/bilanganprima', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ angka }),
    });
    const data = await postResponse.json();
    console.log(data);
  }
  return (
    <div className='App'>
      <InputanAngka onChange={onChange} value={angka} />
      <div className='grup-tombol'>
        <TombolFungsi onClick={() => alert('Test Button 1')}>
          Generate Segitiga
        </TombolFungsi>
        <TombolFungsi onClick={tombolHitungGanjil}>
          Generate Bilangan Ganjil
        </TombolFungsi>
        <TombolFungsi onClick={tombolHitungPrima}>
          Generate Bilangan Prima
        </TombolFungsi>
      </div>
      <KolomHasil />
    </div>
  );
}

function InputanAngka({ onChange, value }) {
  return (
    <input
      type='number'
      placeholder='Input Angka'
      onChange={onChange}
      value={value}
    />
  );
}

function TombolFungsi({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function KolomHasil() {
  return <h1>Result:</h1>;
}
