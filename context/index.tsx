"use client";
import { createContext, ReactNode, useState } from 'react';

//import netlifyIdentity from 'netlify-indentity-widget'
interface MyComponentProps {
  children: ReactNode;
}
const AuthContext = createContext<any>({
  login: () => { },
  logout: () => { },
  user: null,
  authReady: false,
});

export const AuthContextProvider: React.FC<MyComponentProps> = ({ children }) => {

  // checked - yue
  const [loading, setLoading] = useState<boolean>(false);
  const [notify, setNotify] = useState<{ open: boolean, success: boolean, message: string } | undefined>();
  // track loading state while determinating the server side loading
  const [dialog, setDialog] = useState<{ open: boolean, cancel: boolean, title: string, message: string, confirm: Function } | undefined>();

  const [authnData, setAuthnData] = useState<any>();
  const [authzData, setAuthzData] = useState<undefined | { status: "ok" | "warning" | "critical", description: string, time: string }>();

  // unchecked - yue
  const [user, setUser] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [resloginData, setResLoginData] = useState<any>();  // user login status for tracking there status in diff pages
  const [esTrialData, setEsTrialData] = useState<false | any>(false);
  const [status, setStatus] = useState<string>();
  const [credentialsData, setCredentialsData] = useState(null);
  //popsup
  const [popsup, setPopsup] = useState<{ open: boolean, cancel: boolean, title: string } | undefined>();
  
  const context = {
    // checked - yue

    loading, setLoading,
    dialog, setDialog,
    notify, setNotify,
    authnData, setAuthnData,
    authzData, setAuthzData,

    // unchecked - yue
    credentialsData, setCredentialsData,
    status, setStatus,
    user, setUser,

    isOpen, setIsOpen,
    resloginData, setResLoginData,
    esTrialData, setEsTrialData,

    //popsup
    popsup, setPopsup,
  }
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext


