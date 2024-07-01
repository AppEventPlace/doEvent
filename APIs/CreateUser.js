const CreateUser = async (stateJson) => {
  await fetch(
    "https://v8gfptr7d7.execute-api.us-east-1.amazonaws.com/createUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // rquid: "fsdgf6854sahgdf5243",
      },
      body: stateJson,
    }
  )
    .then((response) => response.json())
    .then((result) => [console.log(result), alert("Creacion hecha")])
    .then(() => console.log(stateJson));
  return null;
};

export default CreateUser;
