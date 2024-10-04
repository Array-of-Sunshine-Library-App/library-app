import axios from "axios";


exports.getLibrary = (username:string)=>{
    axios.get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/books`).then((books:any)=>{
        return books
    })
}

exports.getWishlist = (username:string)=>{
    axios.get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist`).then((books:any)=>{
        return books
    })
}

exports.postLibrary= (username:string, data:any)=>{
    axios.post(`https://hosting-api-yiyu.onrender.com/api/users/${username}/books`,data).then((book:any)=>{
        return book
    })
}

exports.postWishlist= (username:string, data:any)=>{
    axios.post(`https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist`,data).then((book:any)=>{
        return book
    })
}
