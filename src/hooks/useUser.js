import { useSelector } from "react-redux"

export const useUser = () => {
    const user = useSelector(state => state.user.currentUser)
    const token = useSelector(state => state.user.token)
    const role = useSelector(state => state.user.currentUser?.isAdmin)

    return [user, token, role]
}