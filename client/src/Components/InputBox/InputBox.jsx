import './InputBox.sass';

function InputBox({ ...props }) {
   

    return (
       <label htmlFor='inp' className='inp'>
        <input {...props} id='inp'></input>
        <span className='labelInp'>{props.text}</span>
       </label>
    );
}

export default InputBox;
