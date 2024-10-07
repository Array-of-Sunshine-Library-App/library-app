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

exports.getLibraryBook = (username:string, bookId:string)=>{
    axios.get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/books/${bookId}`).then((book:any)=>{
        return book 
    })
}
exports.getWishlistBook = (username:string, bookId:string)=>{
    axios.get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist/${bookId}`).then((book:any)=>{
        return book
    })
}

exports.deleteLibraryBook = (username:string, bookId:string)=>{
    axios.delete(`https://hosting-api-yiyu.onrender.com/api/users/${username}/books/${bookId}`)

}

exports.deleteWishlistBook = (username:string, bookId:string)=>{
    axios.delete(`https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist/${bookId}`)
}

exports.postFriendRequest=(username:string, data:any)=>{
    axios.post(`https://hosting-api-yiyu.onrender.com/api/users/${username}/friendrequests`,data).then((request)=>{
            return request
    })
}

exports.getFriendRequests=(username:string)=>{
    axios.get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/friendrequests`).then((requests)=>{
            return requests
    })
}

exports.getFriends=(username:string)=>{
    axios.get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/friends`).then((friends)=>{
            return friends
    })
}

exports.acceptFriendRequest=(username:string, data:any)=>{
    axios.post(`https://hosting-api-yiyu.onrender.com/api/users/${username}/acceptfriend`,data).then((friends)=>{
        return friends
})
}


exports.deleteFriendRequest=(username:string, toReject:string)=>{
    axios.delete(`https://hosting-api-yiyu.onrender.com/api/users/${username}/friendrequests/${toReject}`)
}

exports.getAllUsers=()=>{
    axios.get(`https://hosting-api-yiyu.onrender.com/allusers`).then((users)=>{
            return users
    })
}