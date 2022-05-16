import React, {useState}from 'react'
import './form.css'


const Form = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    const [registration, setRegistration] = useState('')



    function handelClick(e){
        e.preventDefault()

      if (data.email.match(/\S+@\S+\.\S+/)) {
          if(data.fname.length>=3 && data.lname.length>=3){
              setRegistration("valid")
          }else{
            setRegistration("invalid")

          }
      } 
        
    }


//save the input value into the data
    function handelChange(e) {
        const name= e.target.name;
        const value = e.target.value;

        switch (name) {
            case "fname":
                     setData((previousValue)=>{ 
                         return (
                                    { ...previousValue,
                                        fname: value
                                    }
                              ) 
                        })                
                break;
            case "lname":
                setData((previousValue)=>{ 
                    return (
                               { ...previousValue,
                                   lname: value
                               }
                         ) 
                   })                  
                break;
            case "email":
                setData((previousValue)=>{ 
                    return (
                               { ...previousValue,
                                   email: value
                               }
                         ) 
                   })                  
                break;
        
            default:
                break;
        }
    }


  return (
      <div className='form_container'>
        {registration === "valid" && <div className='valid'> Successfuly! Your registration is completed.</div>}
        {registration === "invalid" && <div className='invalid'> Sorry! Your registration is <b>not</b> completed.</div>}
        <form >
            <input type="text" 
            placeholder='First Name' 
            name='fname' 
            onChange={handelChange}
            />
            <input type="text" 
            placeholder='Last Name' 
            name='lname' 
            onChange={handelChange}
              
            />
            <input type="email" 
            placeholder='Email' 
            name='email' 
            onChange={handelChange}
              
            />

            <button type='submit' onClick={handelClick}> Register </button>
         </form>
      </div>

  )
}

export default Form
