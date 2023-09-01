import { createContext, useEffect, useState, useContext } from 'react';
import { api } from 'src/configs/api';
import { AuthContext } from './AuthContext';

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const { loggedUnity, user } = useContext(AuthContext);

    const updateNotifications = (newNotifications) => {
        if (newNotifications.length > 0) {
            const newNotificationsFiltered = newNotifications.filter((notification) => {
                const notificationExists = notifications.find((notificationOld) => {
                    return notificationOld.notificacaoID === notification.notificacaoID
                })
                return !notificationExists
            })
            setNotifications([...notifications, ...newNotificationsFiltered])
        }
    }

    const getDataNotification = async () => {
        if (user && loggedUnity) {
            const data = {
                unidadeID: loggedUnity.unidadeID,
                usuarioID: user.usuarioID
            }
            try {
                const response = await api.post("notificacao/getData", data)
                updateNotifications(response.data)
            } catch (error) {
                console.error("Erro ao atualizar notificações:", error);
            }
        }
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
    useEffect(() => {
        getDataNotification();
        const intervalId = setInterval(() => {
            getDataNotification();
        }, 30000);
        return () => clearInterval(intervalId);
    }, [user, loggedUnity]);

    const values = {
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
