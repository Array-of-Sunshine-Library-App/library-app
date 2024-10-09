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

function deleteFriend(username: string, toDelete: string) {
  return axios
    .delete(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/friends/${toDelete}`
    )
    .then((users) => {
      return users;
    });
}

function getLendableFriends(username: string) {
  return axios
    .get(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/books?lendable=true`
    )
    .then((books) => {
      return books;
    });
}

function getBorrowingList(username: string) {
  return axios
    .get(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/borrowing`
    )
    .then((books) => {
      return books.data;
    });
}

function getLendingList(username: string) {
  return axios
    .get(`https://hosting-api-yiyu.onrender.com/api/users/${username}/lending`)
    .then((books) => {
      return books.data;
    });
}

function postBookBorrowRequest(
  borrowerUsername: string,
  bookId: string,
  ownerUsername: string
) {
  return axios.post(
    `https://hosting-api-yiyu.onrender.com/api/users/${borrowerUsername}/books/${bookId}/requestlend/${ownerUsername}`
  );
}

function deleteBookBorrowRequest(borrowerUsername: string, bookId: string) {
  return axios.delete(
    `https://hosting-api-yiyu.onrender.com/api/users/${borrowerUsername}/borrowrequest/${bookId}`
  );
}

function acceptBookBorrowRequest(
  ownerUsername: string,
  bookId: string,
  borrowerUsername: string
) {
  return axios.post(
    `https://hosting-api-yiyu.onrender.com/api/users/${ownerUsername}/books/${bookId}/acceptrequest/${borrowerUsername}`
  );
}

function returnBookAfterBorrow(
  borrowerUsername: string,
  ownerUsername: string,
  bookId: string
) {
  return axios.delete(
    `https://hosting-api-yiyu.onrender.com/api/users/${borrowerUsername}/returnbook/${ownerUsername}/${bookId}`
  );
}
function getBorrowRequests(username: string, bookId: string) {
  return axios
    .get(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/books/${bookId}/requestlist`
    )
    .then((books) => {
      return books;
    });
}
function getAllBorrowRequests(username: string) {
  return axios
    .get(
      `https://hosting-api-yiyu.onrender.com/api/users/${username}/requestborrow`
    )
    .then((books) => {
      return books.data;
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
  deleteFriend,
  getLendableFriends,
  getBorrowingList,
  getLendingList,
  postBookBorrowRequest,
  deleteBookBorrowRequest,
  acceptBookBorrowRequest,
  returnBookAfterBorrow,
  getBorrowRequests,
  getAllBorrowRequests,
};

export default functions;
