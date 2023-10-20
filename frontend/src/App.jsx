import { useState } from 'react';

export default function App() {
  const [angka, setAngka] = useState('');
  const [hasil, setHasil] = useState('');
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
    setHasil(`Bilangan Ganjil dari 0 s/d ${angka} adalah : ${data.data}`);
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

  async function tombolSegitigaAngka() {
    const postResponse = await fetch('/api/segitigaangka', {
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
        <TombolFungsi onClick={tombolSegitigaAngka}>
          Generate Segitiga
        </TombolFungsi>
        <TombolFungsi onClick={tombolHitungGanjil}>
          Generate Bilangan Ganjil
        </TombolFungsi>
        <TombolFungsi onClick={tombolHitungPrima}>
          Generate Bilangan Prima
        </TombolFungsi>
      </div>
      <KolomHasil hasil={hasil} />
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

function KolomHasil({ hasil }) {
  return (
    <>
      <h1>Result:</h1>
      <p>{hasil}</p>
    </>
  );
}
