import { createContext, useEffect, useState, useContext } from 'react';
import { api } from 'src/configs/api';
import { AuthContext } from './AuthContext';

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState(null);
    const { loggedUnity, user } = useContext(AuthContext);


    const getData = async () => {
        if (user && loggedUnity) {

            const data = {
                unidadeID: loggedUnity.unidadeID,
                usuarioID: user.usuarioID
            }
            try {

                const response = await api.post("notificacao/getData", data);
                console.log("response", response);
                setNotifications(response.data);
            } catch (error) {
                console.error("Error fetching notification data:", error);
            }
        }
    };

    useEffect(() => {
        getData();
    }, [user, loggedUnity]);

    const values = {
        notifications,
        setNotifications,
        getData
    };

    return (
        <NotificationContext.Provider value={values}>
            {children}
        </NotificationContext.Provider>
    );
};

export { NotificationContext, NotificationProvider };
