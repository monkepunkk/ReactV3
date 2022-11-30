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



const Dialogs = () => {
    return (
       <div>
         <div className={s.dialog_wrapper}>
              <div className={s.dialog_list}>
                <DialogItem name='Oleg' id= '1'/>
                <DialogItem name='Lexa' id= '2'/>
                <DialogItem name='Vlados' id= '3'/>
                <DialogItem name='Diman' id= '4'/>
                <DialogItem name='Eblan' id= '5'/>

              </div>
              <div className= {s.messages_list} >
                <div className={s.messages_item} >
                  <div className= {s.messages_name} > Oleg </div>
                  <Message message='suka t' />
                </div>
                <div className={s.messages_item}>
                  <div className={s.messages_name}>Lexa</div>
                  <Message message='alo ebat' />
                </div>
              </div>
        </div>
       </div>
    )
}
export default Dialogs;