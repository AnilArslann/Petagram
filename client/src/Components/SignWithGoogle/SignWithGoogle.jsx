import './SignWithGoogle.sass';

function SignWithGoogle({ ...props }) {
   

    return (
        <button type='button' {...props} className='googleButton'>
            Sign in with Google
        </button>
       
    );
}

export default SignWithGoogle;
