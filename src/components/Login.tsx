import React from 'react';
import {useReducer} from 'react';
import {useEffect} from 'react';

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayLoad = {
    username: string,
    nombre: string
}
type AuthAction =
    | { type: 'logout'}
    | {type: 'login', payload: LoginPayLoad};

    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    username: '',
                    nombre: ''
                }
            case 'login':
                const {nombre, username} = action.payload;
                return {
                    validando: false,
                    token: 'MITOKEN1234567890',
                    //username: action.payload.username,
                    //nombre: action.payload.nombre,
                    username,
                    nombre,
                }
                break;
            default:
                return state;
                break;
        }
    }

export const Login = () => {
    //const [{validando, token}, dispatch] = useReducer(authReducer, initialState)
    const [state, dispatch] = useReducer(authReducer, initialState)
   
    useEffect(() => {
        setTimeout(() => {
          dispatch({type:'logout'}) 
        }, 2500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'andyg',
                nombre: 'Andrea G'
            }
        })
    }

    //LOGOUT
    const logout = () => {
        dispatch({ type: 'logout' });
    };

    //Si se agregara una dependencia 
    if (state.validando) {
        return (
        <>
            <h3>Login</h3>
                <div className="AlertInfo_Div">
                    Validando Información...
                </div>   
        </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {
            (  state.token  )
                ? 
                (
                    <div className="AlertSuccess_Div">
                        Autenticado como: { state.nombre }
                    </div>
                )
                : 
                (   
                    <div className="AlertDanger_Div">
                        No Autenticado...
                    </div>
                )
            }
            {
                ( state.token )
                ? ( 
                    <button
                        className="Logout_Button"
                        onClick={logout}
                    >
                        Logout   
                    </button> 
                )
                : (   
                    <button
                        name="Login_Button"
                        className="btn btn-primary"
                        onClick={ login }
                    >
                        Login   
                    </button>   
                )
            }           
        </>
    )
}