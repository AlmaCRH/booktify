import api from "./config";

const signup = async (body) => {
    try {
        await api.post("/auth/signup", body)
        return 200
    } catch(error){
        return error.response.data
    }
}

export default signup