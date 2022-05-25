import axios from "axios";

const instance = axios.create ({
    baseURL: "https://marketing-website-72f28-default-rtdb.firebaseio.com/"
});

export default instance;