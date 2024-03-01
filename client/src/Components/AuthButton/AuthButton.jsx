import './AuthButton.sass';
import { useRef, useEffect } from 'react';

function AuthButton({ text, ...props }) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;

        const handleClick = () => {
            button.classList.add('onclic');
            validate();
        };

        const validate = () => {
            while(props.isLoading){
                continue;
            }
            
            button.classList.remove('onclic');
            button.classList.add('validate');
            callback();
           
           
        };

        const callback = () => {
            setTimeout(() => {
                button.classList.remove('validate');
                button.classList.add('done');
            }, 1250);
        };

        button.addEventListener('click', handleClick);

        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <button ref={buttonRef} {...props}>
            {text}
        </button>
    );
}

export default AuthButton;
