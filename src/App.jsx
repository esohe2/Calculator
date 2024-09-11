import { useState } from "react"

export default function App(){

  const [result, setResult] = useState('')
  const [lastPressed, setLastPressed] = useState('')
  const clickhandler = (event) => {
    setResult(result.concat(event.target.value))
  }
  const cleardisplay = () => {
    setResult('')
  }
  const calculate = () => {
    setResult(eval(result).toString())
  }

  const handleButtonClick = (value) => {
    if (value === '0' && result === '0' && lastPressed === '0') {
      return; 
    }
    setResult (result + value)
    setLastPressed( value)
  }

  return (
    <>
      <div className="calc">
        <input type="text" placeholder="0" id="answer" value={result} />
        <input type="button" value="9" className="button" onClick={clickhandler} />
        <input type="button" value="8" className="button" onClick={clickhandler} />
        <input type="button" value="7" className="button" onClick={clickhandler} />
        <input type="button" value="6" className="button" onClick={clickhandler} />
        <input type="button" value="5" className="button" onClick={clickhandler} />
        <input type="button" value="4" className="button" onClick={clickhandler} />
        <input type="button" value="3" className="button" onClick={clickhandler} />
        <input type="button" value="2" className="button" onClick={clickhandler} />
        <input type="button" value="1" className="button" onClick={clickhandler} />

        <button className="btn" onClick={() => handleButtonClick('0')}>0</button>
        <input type="button" value="+" className="button" onClick={clickhandler} />
        <input type="button" value="-" className="button" onClick={clickhandler} />
        <input type="button" value="/" className="button" onClick={clickhandler} />
        <input type="button" value="*" className="button" onClick={clickhandler} />
        <input type="button" value="%" className="button" onClick={clickhandler} />
        <input type="button" value="." className="button" onClick={clickhandler} />

        <input type="button" value="Clear" className="button1" onClick={cleardisplay}/>
        <input type="button" value="=" className="button1" onClick={calculate}/>
      </div>
    </>
  )
}