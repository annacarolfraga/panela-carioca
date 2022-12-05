import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://projeto-individual3-l63f33mor-joojinho666-gmailcom.vercel.app",
    headers:{
        "Content-Type":"application/json",
    },
})

export default blogFetch;