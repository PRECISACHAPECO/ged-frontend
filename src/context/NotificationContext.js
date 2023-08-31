import { createContext, useEffect, useState, useContext } from 'react';
import { api } from 'src/configs/api';
import { AuthContext } from './AuthContext';

const NotificationContext = createContext({});

const NotificationProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(false);
    const [notifications, setNotifications] = useState(null);
    const { loggedUnity, user } = useContext(AuthContext);

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
                console.error("Error fetching notification data:", error);
            }
        }
    };

    // Exemplo de data
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
            setRefresh(!refresh)
            console.log("🚀 ~ response:", response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getDataNotification();
        console.log('Atualiza notificaçãooooooooo')
    }, [user, loggedUnity, refresh]);

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
