import './AuthButton.sass';
import { useRef, useEffect,useState } from 'react';

function AuthButton({ ...props }) {
    const buttonRef = useRef(null);
    let [done, setDone] = useState(false);


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
            setDone(true);
        };

        button.addEventListener('click', handleClick);

        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <button ref={buttonRef} {...props} className='authButton'>
            {done?'':props.text}
        </button>
    );
}

export default AuthButton;
