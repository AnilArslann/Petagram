import {useEffect,useState,useContext} from 'react';
import { useSearchParams,useNavigate } from 'react-router-dom';
import {Alert,CircularProgress} from '@mui/material';
import { AuthContext } from '../Context/authContext';
import { baseUrl, postRequest } from '../utils/service';

const EmailVerification = () => {

    const {user, updateUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const emailToken = searchParams.get('emailToken');
    console.log('Email token is :',emailToken);

    useEffect(()=>{
        (async()=>{
            if(user?.isVerified){
                setTimeout(()=>{
                    navigate('/');
                },2000);
            }
            else{
                if(emailToken){
                    setLoading(true);
                    const res=await postRequest(`${baseUrl}/user/verify-email`,JSON.stringify({emailToken}));
                    setLoading(false);
                    if(res.status===200){
                        updateUser(res.data);
                    }
                    else{
                        setError(res);
                    }
                    

                    
                   
                    
                }
                else{
                    setError({error:true,message:'Token is not Found'});
                }
            }
        })();
    },[emailToken,user]);

    return (
        <div>
           {loading?
           (<div><CircularProgress/></div>):
           (<div>
            {user?.isVerified?
            (<div>
                <Alert severity="success">Email Verified Successfully,redirecting...</Alert>
            </div>):
            (<div>
                {error.error?(<Alert severity="error">{error.message}</Alert>):null}
            </div>)}



           </div>
            )
           }
        </div>
    )

}
export default EmailVerification;