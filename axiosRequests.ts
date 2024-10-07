import axios from "axios";

const getLibrary = (username: string) => {
  return axios
    .get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/books`)
    .then((books: any) => {
      return books;
    });
};

const getWishlist = (username: string) => {
  return axios
    .get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist`)
    .then((books: any) => {
      return books;
    });
};

const postLibrary = (username: string, data: any) => {
  return axios
    .post(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/books`,
      data
    )
    .then((book: any) => {
      return book;
    });
};

const postWishlist = (username: string, data: any) => {
  return axios
    .post(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist`,
      data
    )
    .then((book: any) => {
      return book;
    });
};

const getLibraryBook = (username: string, bookId: string) => {
  return axios
    .get(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/books/${bookId}`
    )
    .then((book: any) => {
      return book;
    });
};
const getWishlistBook = (username: string, bookId: string) => {
  return axios
    .get(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist/${bookId}`
    )
    .then((book: any) => {
      return book;
    });
};

const deleteLibraryBook = (username: string, bookId: string) => {
  return axios.delete(
    `https://hosting-api-yiyu.onrender.com/api/users/${username}/books/${bookId}`
  );
};

const deleteWishlistBook = (username: string, bookId: string) => {
  return axios.delete(
    `https://hosting-api-yiyu.onrender.com/api/users/${username}/wishlist/${bookId}`
  );
};

const postFriendRequest = (username: string, data: any) => {
  return axios
    .post(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/friendrequests`,
      data
    )
    .then((request) => {
      return request;
    });
};

const getFriendRequests = (username: string) => {
  return axios
    .get(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/friendrequests`
    )
    .then((requests) => {
      return requests;
    });
};

const getFriends = (username: string) => {
  return axios
    .get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/friends`)
    .then((friends) => {
      return friends;
    });
};

const acceptFriendRequest = (username: string, data: any) => {
  return axios
    .post(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/acceptfriend`,
      data
    )
    .then((friends) => {
      return friends;
    });
};

function deleteFriendRequest(username: string, toReject: string) {
  return axios.delete(
    `https://hosting-api-yiyu.onrender.com/api/users/${username}/friendrequests/${toReject}`
  );
}

function getUser(username: string) {
  return axios
    .get(`https://hosting-api-yiyu.onrender.com/api/users/${username}`)
    .then((users) => {
      return users;
    });
}

const functions = {
  getLibrary,
  getWishlist,
  postLibrary,
  postWishlist,
  getLibraryBook,
  getWishlistBook,
  deleteLibraryBook,
  deleteWishlistBook,
  postFriendRequest,
  getFriendRequests,
  getFriends,
  acceptFriendRequest,
  deleteFriendRequest,
  getUser,
};

export default functions;
