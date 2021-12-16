const requete = (URL) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, nom: "Sébastien Rival" },
          { id: 2, nom: "Toai Vu Do CHi" },
        ],
        "/users/1": { id: 1, nom: "Sébastien Rival" },
        "/users/2": { id: 2, nom: "Toai Vu Do CHi" },
        "/users/1/posts": [
          {
            title: "C++ vs Java",
            content:
              "Is Java better than C++ in terms of learning curve especially when it comes to design patterns or software design and architecture?",
            id: 1,
          },
          {
            title: "NodeJS or Django",
            content: "Should i choose Nodejs over Django?Why?",
            id: 2,
          },
        ],
        "/posts/1/comments": [
          {
            title: "C++ vs Java",
            content:
              "Is Java better than C++ in terms of learning curve especially when it comes to design patterns or software design and architecture?",
            id: 1,
          },
          {
            title: "NodeJS or Django",
            content: "Should i choose Nodejs over Django?Why?",
            id: 2,
          },
        ],
      };

      if (pages[URL]) {
        resolve({
          status: 200,
          data: pages[URL],
        });
      } else {
        reject({
          status: 404,
          message: "not found",
        });
      }
    }, 3000);
  });
};

requete("/users/1")
  .then((response) => {
    console.log("Req 1 : ", response.data);
    const sebastien = response.data;
    return requete(`/users/${sebastien.id}/posts`);
  })
  .then((response) => {
    console.log("Req 2 : ", response.data);
    const post = response.data[0];
    return requete(`/posts/${post.id}/comments`);
  })
  .then((response) => {
    console.log("req 3 : ", response.data);
  });
