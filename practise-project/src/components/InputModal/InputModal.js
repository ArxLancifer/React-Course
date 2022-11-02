import styles from './InputModalStyle.module.css'

function Modal(props){

    return(
        <div className={styles['modal-container'] }  onClick={()=>props.modalShowHandler()}>
            <div>
              <h2>Invalid Input</h2>
              <p>{props.modalProps.message}</p>
              <button onClick={()=>props.modalShowHandler()} type='button'>Okay</button>  
            </div>
            
        </div>
    )

}

export default Modal;