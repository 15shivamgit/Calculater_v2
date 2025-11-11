import style from '../App.module.css'

const Button = ({ bt, onbuttonValue }) => {

  return <button 
  className={style.button}
  onClick={onbuttonValue}
  value={bt}>
    {bt}  
  </button>
}

export default  Button;