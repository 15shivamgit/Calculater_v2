import Button from './Button';
import style from '../App.module.css';

const ButtonContainer = ({ onbuttonValue }) => {
  const bt = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.' ];


  return <div className={style.buttonContainer}>
        {bt.map((item,index) => 
          <Button key={index} bt={item} onbuttonValue={()=>onbuttonValue(item)} />
        )}
      </div>
}

export default ButtonContainer;