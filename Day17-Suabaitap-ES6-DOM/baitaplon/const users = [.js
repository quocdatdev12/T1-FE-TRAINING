const users = [
    {
      id: 1743259741258,
      userName: "nghiem",
      avatar: "",
      salary: "",
      des: " ",
      gender: "",
      isMarried: false,
      ducation: "",
    },
    {
      id: 1743259748402,
      userName: "nghiem1",
      avatar: "",
      salary: "",
      des: "",
      gender: "",
      isMarried: false,
      ducation: "",
    },
  ];
  
  const id = "1743259748402";

const newUers = users.map((item) => {
    return {
        ...user,
        userName: item.id === +(id) ? "nghiem3" : item.userName,
    }
})
console.log(newUers);
