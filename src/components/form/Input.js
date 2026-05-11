import styles from './Input.module.css';

function Inoput({type, text, name, handleOnChange, value}){
     return (
       <div className={styles.form_control}>
          <label htmlFor={name}>{text}</label>
          <input type={type}
          id={name}
          placeholder={text}
          name={name}
          onChange={handleOnChange}
          value={value}
          />
       </div> 
    )
}

export default Inoput;