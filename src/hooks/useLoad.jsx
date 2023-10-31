import { useContext } from 'react'
import { RouteContext } from 'src/context/RouteContext'

const useLoad = () => {
    const { isLoading, setIsLoading } = useContext(RouteContext)

    const startLoading = () => {
        setIsLoading(true)
    }

    const stopLoading = () => {
        setIsLoading(false)
    }

    return { isLoading, startLoading, stopLoading }
}

export default useLoad
