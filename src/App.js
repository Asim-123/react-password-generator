import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = generatePassword();
    console.log(password);
    setGeneratedPassword(password);
  };

  const generatePassword = () => {
    let password = "";
    const symbols = "!#@$"
    const characters = text + number + symbols;
    const length = Math.min(parseInt(number), 20); 
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    return password;
  };

  return (
    <>
    <Header/>
    <div className="container">
      <div className="text">
        Password Generator
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required onChange={(e) => setText(e.target.value)} value={text} />
            <div className="underline"></div>
            <label htmlFor="">Type Text</label>
          </div>
          <div className="input-data">
            <input type="number" required onChange={(e) => setNumber(e.target.value)} value={number} />
            <div className="underline"></div>
            <label htmlFor="text">Type number</label>
          </div>
          <div className="input-data">
            <input type="" value={generatedPassword} />
            <div className="underline"></div>
            <label htmlFor="">Generated password</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="Generate" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
