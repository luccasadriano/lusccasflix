import React from 'react'

function FormField({label, input, type, name, value, onChange }){
   return(
      <div>
         <label>
            {label}:
            <input
            type = {type}
            value = {value}
            name = {name}
            onChange = { onChange }
            />
         </label>
      </div>   
   )
}


export default FormField