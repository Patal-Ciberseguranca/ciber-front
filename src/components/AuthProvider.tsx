import { useContext, createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({
  token: '',
  user: null,
  loginAction: (username: String, password: String): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      // Perform login action
      // For example, with axios:
      axios
        .post('http://localhost:3000/login', {
          username,
          password,
        })
        .then((response: { data: any }) => {
          const { data } = response;
          if (data.token) {
            resolve(true); // Resolve with true if authentication is successful
          } else if (
            data === 'UtilizadorNaoExiste' ||
            data === 'PasswordErrada'
          ) {
            // Reject with an error message if user does not exist or password is wrong
            reject('Credenciais inválidas.');
          } else {
            // Reject with an error message if response is unexpected
            reject('Resposta do servidor inesperada.');
          }
        })
        .catch((error: any) => {
          // Handle any errors that occur during the axios request itself
          console.error(error);
          reject(error);
        });
    });
  },
  logOut: () => {},
  isAuthenticated: false,
  cipherMode: 'AES-128-CBC',
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    (JSON.parse(
      localStorage.getItem('isAuthenticated') || 'false',
    ) as boolean) || false,
  );

  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const loginAction = async (username: String, password: String) => {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:3000/login', {
          username,
          password,
        })
        .then((response: { data: any }) => {
          const { data } = response;
          if (data.token) {
            const token = data.token;
            const key = data.key;
            setToken(token);
            localStorage.setItem('token', token);
            localStorage.setItem('key', key);
            localStorage.setItem('username', username.toString());
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('cipherMode', data.cipherMode);
            setCipherMode(data.cipherMode);
            setIsAuthenticated(true);
            resolve(true);
          } else if (data === 'UtilizadorNaoExiste') {
            reject(new Error('Utilizador ou palavra passe errada!'));
          } else if (data === 'PasswordErrada') {
            reject(new Error('Utilizador ou palavra passe errada!'));
          } else {
            resolve(false);
          }
        })
        .catch((err: any) => {
          console.error(err);
          reject(err);
        });
    });
  };

  const logOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('key');
    localStorage.removeItem('username');
  };

  const [cipherMode, setCipherMode] = useState('AES-128-CBC');

  return (
    <AuthContext.Provider
      value={{ token, user, loginAction, logOut, isAuthenticated, cipherMode }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

export type AuthContext = ReturnType<typeof useAuth>;
