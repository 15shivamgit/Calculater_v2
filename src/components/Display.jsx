import style from '../App.module.css'

const Display = ({ displayVal }) => {

  return <input
    className={style.display}
    type="text"
    value={displayVal}
    readOnly
  />
}

export default Display;