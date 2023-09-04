import { createContext, useEffect, useState, useContext } from 'react';
import { api } from 'src/configs/api';
import { AuthContext } from './AuthContext';
import { Howl } from 'howler';

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const { loggedUnity, user } = useContext(AuthContext);
    const [notificationPlayed, setNotificationPlayed] = useState(false);

    //? Exemplo de data
    // const data = {
    //     titulo: 'Notificação de teste',
    //     descricao: 'Descricao de teste',
    //     url: null,
    //     urlID: null,
    //     tipoNotificacaoID: 1,
    //     usuarioGeradorID: null,
    //     usuarioID: 1,
    //     unidadeID: 1,
    //     papelID: 1
    // }
    const createNewNotification = async (data) => {
        if (!data) return
        try {
            const response = await api.post("notificacao/insertData", data);
        } catch (err) {
            console.log(err)
        }
    }

    const sound = new Howl({
        src: ['/sounds/message.mp3'],
        volume: 1, // Volume (entre 0 e 1)
    });

    const playNotificationSound = () => {
        sound.play();
    };

    //? Exemplo de data
    // const data = {
    //     titulo: 'Notificação de teste',
    //     descricao: 'Descricao de teste',
    //     url: null,
    //     urlID: null,
    //     tipoNotificacaoID: 1,
    //     usuarioGeradorID: null,
    //     usuarioID: 1,
    //     unidadeID: 1,
    //     papelID: 1
    // }
    const createNeWNotification = async (data) => {
        if (!data) return
        try {
            const response = await api.post("notificacao/insertData", data);
        } catch (err) {
            console.log(err)
        }
    }


    const getDataNotification = async () => {
        if (user && loggedUnity) {
            const data = {
                unidadeID: loggedUnity.unidadeID,
                usuarioID: user.usuarioID
            }
            try {
                const response = await api.post("notificacao/getData", data);
                updateNotifications(response.data)
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

    // chamar getDataNotification a cada 5 segundos 
    useEffect(() => {
        if (notifications.length > 0 && !notificationPlayed) {
            playNotificationSound();
            setNotificationPlayed(true);
        }
    }, [notifications, notificationPlayed]);

    const values = {
        createNewNotification,
        notifications,
        setNotifications,
        getDataNotification,
        createNeWNotification
    };

    return (
        <NotificationContext.Provider value={values}>
            {children}
        </NotificationContext.Provider>
    );
};

export { NotificationContext, NotificationProvider };
