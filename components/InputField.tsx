import keyReturn from '../icons/KeyReturn.svg'
import Image from 'next/image'
import { useEffect } from 'react';

interface InputFieldProps {
    onSubmit: (e: any) => void;
    placeholder: string;
    onInputChange: (e: any) => void;
    fontSize?: any;
    value?: string;
}

export function TextInputField(props: InputFieldProps) {
    useEffect(() => {
        var input = document.getElementById('input')!;
        var form = document.getElementById('form')!;
        input.style.width = `${((input?.getAttribute('placeholder')?.length ?? 10) * 18)}px`;
        form.style.width = `${((input?.getAttribute('placeholder')?.length ?? 10) * 18)}px`;
    }, []);
    
    return <form id="form" onSubmit={props.onSubmit}>
        <input id="input" type="text" placeholder={props.placeholder} value={props.value} onChange={props.onInputChange}/>
        <Image width={40} src={keyReturn} alt="enter" />
        <style jsx>{`
            form {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            input, input:focus{
                border: none;
                outline: none;
                height: 50px;
                font-size: 32px;
                font-weight: 400;
                text-align: center;
                background-color: white;
                color: black;
                padding: 0px;
                margin-left: 40px;
                margin-right: 10px;
            }
            input::placeholder {
                color: #808080;
            }
        `}</style>
    </form>
}