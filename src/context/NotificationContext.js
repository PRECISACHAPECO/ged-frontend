import { createContext, useEffect, useState, useContext } from 'react';
import { api } from 'src/configs/api';
import { AuthContext } from './AuthContext';
import { Howl } from 'howler';

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const { loggedUnity, user } = useContext(AuthContext);

    const createNewNotification = async (data) => {
        if (!data) return;
        try {
            const response = await api.post("notificacao/insertData", data);
        } catch (err) {
            console.log(err);
        }
    }

    const sound = new Howl({
        src: ['/sounds/message.mp3'],
        volume: 1,
    });

    const playNotificationSound = () => {
        sound.play();
    };

    const verifyNewNotification = (data) => {
        const dataLength = localStorage.getItem('dataLength');
        if (dataLength != data.length && data.length > dataLength) {
            playNotificationSound()
        }
        setTimeout(() => {
            setNotifications(data)
            localStorage.setItem('dataLength', data.length);
        }, 2500);
    }

    const getDataNotification = async () => {
        if (user && loggedUnity) {
            const data = {
                unidadeID: loggedUnity.unidadeID,
                usuarioID: user.usuarioID
            }
            try {
                const response = await api.post("notificacao/getData", data);
                verifyNewNotification(response.data);
            } catch (error) {
                console.error("Erro ao atualizar notificações:", error);
            }
        }
    };

    useEffect(() => {
        getDataNotification();

        const intervalId = setInterval(() => {
            getDataNotification();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [user, loggedUnity]);

    const values = {
        createNewNotification,
        notifications,
        setNotifications,
        getDataNotification,
    };

    return (
        <NotificationContext.Provider value={values}>
            {children}
        </NotificationContext.Provider>
    );
};

export { NotificationContext, NotificationProvider };
