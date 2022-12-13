import { NavLink } from 'react-router-dom';
import './Dialogs.module.css';
import s from './Dialogs.module.css';
const DialogItem = (props) => {
  return  <div className= {s.dialog_item} >
                <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
          </div>
}
const Message = (props) => {
  return (
    <div className={s.messages_text}>{props.message}</div> 
  )
}



const Dialogs = (props) => {

    

    let dialogsElements = props.dialogsData
    .map ( dialog => <DialogItem name = {dialog.name}  id = {dialog.id}/>)

    

    let messagesElements  = props.messagesData.map( m => <Message message= {m.text} />)
    return (
       <div>
         <div className={s.dialog_wrapper}>
              <div className={s.dialog_list}>
                {dialogsElements}
              </div>
              <div className= {s.messages_list} > 
                {messagesElements}
              </div>  
        </div>
       </div>
    )
}
export default Dialogs;