import React, {useState} from "react";

function useForm(validator){

    const [inputValue, setInputValue] = useState('');
    const [inputHasChanged, setInuptHasChange] = useState(false);

    const valueIsValid = validator(inputValue);
    const hasError = !valueIsValid && inputHasChanged;

    function inputValueChangeHandler(event){
        setInputValue(event.target.value);
     }

     function inputBlurHandler(){
        setInuptHasChange(true);
     }



     function resetField(){
        setInputValue('');
        setInuptHasChange(false);
     }

     return {
        inputValue,
        hasError,
        inputValueChangeHandler,
        inputBlurHandler,
        resetField,
     }

}

export default useForm;