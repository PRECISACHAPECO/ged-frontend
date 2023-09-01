import { createContext, useEffect, useState, useContext } from 'react';
import { api } from 'src/configs/api';
import { AuthContext } from './AuthContext';
import { Howl } from 'howler';

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const { loggedUnity, user } = useContext(AuthContext);

    const sound = new Howl({
        src: ['/sounds/message.mp3'],
        volume: 1, // Volume (entre 0 e 1)
    });

    const playNotificationSound = () => {
        sound.play();
    };

    const getDataNotification = async () => {
        if (user && loggedUnity) {
            const data = {
                unidadeID: loggedUnity.unidadeID,
                usuarioID: user.usuarioID
            }
            try {
                const response = await api.post("notificacao/getData", data);
                setNotifications(response.data);
            } catch (error) {
                console.error("Erro ao atualizar notificações:", error);
            }
        }
    };

    useEffect(() => {
        getDataNotification();
        const intervalId = setInterval(() => {
            getDataNotification();
        }, 30000);

        return () => clearInterval(intervalId);
    }, [user, loggedUnity]);

    useEffect(() => {
        if (notifications.length > 0) {
            playNotificationSound()
        }
    }, [notifications])

    const values = {
        notifications,
        setNotifications,
        getDataNotification
    };

    return (
        <NotificationContext.Provider value={values}>
            {children}
        </NotificationContext.Provider>
    );
};

export { NotificationContext, NotificationProvider };
