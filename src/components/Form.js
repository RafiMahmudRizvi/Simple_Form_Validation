import React, {useState}from 'react'
import './form.css'


const Form = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    const [registration, setRegistration] = useState('')
    const [isEmpty, setIsEmpty] = useState({
        fname: false,
        lname: false,
        email: false
    })


    function handelClick(e){
        e.preventDefault()

      if (data.email.match(/\S+@\S+\.\S+/) && data.fname.length>=3 && data.lname.length>=3) {
      
              setRegistration("valid")
          
      }else{
          setRegistration("invalid")
      }
      
      if(data.fname.length<= 3){
         setIsEmpty((p)=>{
            return( {
                 ...p,
                 fname : true
             })
         })
      }else{
        setIsEmpty((p)=>{
            return( {
                 ...p,
                 fname : false
             })
         })   
      }
      if(data.lname.length<= 3){
        setIsEmpty((p)=>{
           return( {
                ...p,
                lname : true
            })
        })
     }else{
       setIsEmpty((p)=>{
           return( {
                ...p,
                lname : false
            })
        })   
     }
     if(!data.email.match(/\S+@\S+\.\S+/) || data.email.length<5){
        setIsEmpty((p)=>{
            return( {
                 ...p,
                 email: true
             })
         })  
     }else{
        setIsEmpty((p)=>{
            return( {
                 ...p,
                 email: false
             })
         }) 
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
            <div className="input">
                <input value={data.fname}
                type="text" 
                placeholder='First Name' 
                name='fname' 
                onChange={handelChange}
                />
                {isEmpty.fname && <span>Invalid First Name</span>}
            </div>

            <div className="input">
                <input value={data.lname}      
                type="text" 
                placeholder='Last Name' 
                name='lname' 
                onChange={handelChange}
                
                />
                {isEmpty.lname && <span>Invalid Last Name</span>}
            </div>

            <div className="input">
                <input value={data.email}
                type="email" 
                placeholder='Email' 
                name='email' 
                onChange={handelChange}
                
                />   
                {isEmpty.email && <span>Invalid Email Address</span>}
            </div>

            <button type='submit' onClick={handelClick}> Register </button>
         </form>
      </div>

  )
}

export default Form
