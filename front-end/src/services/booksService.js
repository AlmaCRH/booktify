import api from "./config";

const getAllBooks = async () => {
  try {
    const { data } = await api.get("/books");
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

const getBookById = async (id) => {
  try {
    const { data } = await api.get(`/books/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

const addNewBook = async (body) => {
  try {
    const { data } = await api.post("/books/", body, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const updateBook = async (id, body) => {
  try {
    const { data } = await api.put(`/books/${id}`, body, {
      headers: { token: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const deleteBook = async (id) => {
  try {
    const { data } = await api.delete(`/books/id`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export { getAllBooks, getBookById, addNewBook, updateBook, deleteBook };
