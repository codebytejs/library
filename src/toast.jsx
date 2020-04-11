import React, { Component } from 'react'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
class Notification extends   Component {
 
    state = {
        toastId:null
    }
    render() {
        toast.configure({
            autoClose: 10000,
            draggable: false
          })
          const notify = () => {
              this.toastId =  toast("Default Notification !");
           
                toast.success("Success submiting !", {
                  position: toast.POSITION.RIGHT_CENTER
                });
                toast.error("Error Notification !", {
                  position: toast.POSITION.TOP_LEFT
                });
           
                toast.warn("Warning Notification !", {
                  position: toast.POSITION.BOTTOM_LEFT
                });
          
                toast.info("Info Notification !", {
                  position: toast.POSITION.BOTTOM_CENTER
                });
           
                toast("Custom Style Notification with css class!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: 'foo-bar'
                });
          }
          const dismiss = () =>  toast.dismiss(this.toastId);
        return(
            <div className="App">
            <button onClick={notify}>Notify !</button>
            <button onClick={dismiss}>Dismiss</button>
          </div>
        
        )
    }
 
}
export default Notification