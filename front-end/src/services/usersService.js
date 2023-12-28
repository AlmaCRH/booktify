import api from "./config";

const getUserById = async (id) => {
  try {
    const { data } = await api.get(`/users/profile/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const updateMyAccount = async (id, body) => {
  try {
    const { data } = await api.put(`/users/profile/${id}`, body, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const deleteMyAccount = async (id) => {
  try {
    const { data } = await api.delete(`/users/profile/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const addLog = async (id) => {
    try {
        const {data} = await api.post(`/users/profile/${id}/log`, body, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        return data
    }catch(error){
        return error.message
    }
}

const updateLogStatus = async (id, body) => {
    try {
        const {data} = await api.put(`/users/profile/${id}/log`, body, {
            headers: {
                token:localStorage.getItem("token")
            }
        })
        return data
    }catch(error){
        return error.message
    }
}


const getAllUsers = async() => {
    try {
        const {data} = await api.get("/users", {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        return data
    }catch(error){
        return error.message
    }
}

const addNewUser = async (body) => {
    try {
        const {data} = await api.post("/users", body, {
            headers:{
                token: localStorage.getItem("token")
            }
        })
        return data
    }catch(error){
        return error.message
    }
}

const deleteUser = async (id) => {
    try {
        const {data} = await api.delete(`/users/${id}`, {
            headers:{
                token: localStorage.getItem("token")
            }
        })
        return data
    } catch(error){
        return error.message
    }
}

const updateUser = async (id, body) => {
    try {
        const {data} = await api.put(`/users/${id}`, body, {
            headers:{
                token: localStorage.getItem("token")
            }
        })
    }catch(error){
        return error.message
    }
}

export {getUserById, updateMyAccount, deleteMyAccount, addLog, updateLogStatus, getAllUsers,addNewUser, deleteUser, updateUser }