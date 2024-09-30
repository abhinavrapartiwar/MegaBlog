import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref){
   const id = useId()
   return(
    <div className="w-full">
        {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>
        {label}   
        </label>}
        <input type={type} 
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        //Samjho ki tumhare paas ek custom input component hai, jisko tum alag-alag jagah use kar rahe ho. Agar parent component ko is input field ko focus karna hai ya koi aur direct action perform karna hai, toh humein ref ko us input field tak pahunchana hoga. React.forwardRef ye kaam asaan kar deta hai.
        {...props}
        id={id}
        />
    </div>
   ) 
})

export default Input
