import { useSelector } from "react-redux"

export const useUser = () => {
    const user = useSelector(state => state.user.currentUser)
    const role = useSelector(state => state.user.currentUser?.isAdmin)

    return [user, role]
}