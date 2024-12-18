import { useState } from 'react';

const CaesarCipher = () => {
  const [text, setText] = useState('');
  const [shift, setShift] = useState('');
  const [resultText, setResultText] = useState('');
  const [isEncrypt, setIsEncrypt] = useState(true);


  const caesarCipher = (text: string, shift: any, isEncrypt: boolean) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-zA-Z]/)) {
        let code = text.charCodeAt(i);
        let base = (char === char.toLowerCase()) ? 97 : 65;
        let adjustedShift = isEncrypt ? shift : -shift;
        result += String.fromCharCode((code - base + adjustedShift + 26) % 26 + base);
      } else {
        result += char;
      }
    }
    return result;
  };

  const handleCipher = () => {
    const shiftKey = parseInt(shift);
    if (!isNaN(shiftKey)) {
      setResultText(caesarCipher(text, shiftKey, isEncrypt));
    } else {
      alert('please enter a valid number for key');
    }
  };

  return (
    <div style={{
      backgroundColor:'#ddd',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding :'10px',
      borderRadius :'10px',
      width:'100%',
      margin:'0 auto'
    }}>
      <h1>
        Caesar Encryption & Decryption
      </h1>
      <div>
        <label>Text :</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your Text"
        />
      </div>
      <div>
        <label>Key :</label>
        <input
          type="number"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          placeholder="Enter Key"
        />
      </div>
      <div>
        <label>
          <input
            type="radio"
            checked={isEncrypt}
            onChange={() => setIsEncrypt(true)}
          />
          Encryption
        </label>
        <label>
          <input
            type="radio"
            checked={!isEncrypt}
            onChange={() => setIsEncrypt(false)}
          />
          Decryption
        </label>
      </div>
      <button onClick={handleCipher}>
        {isEncrypt ? 'encryption' : 'decryption'}
      </button>
      <div>
        {resultText && (
          <div>
            <h3>{isEncrypt ? 'Cipher text' : 'Plain text'}</h3>
            <p>{resultText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaesarCipher;
