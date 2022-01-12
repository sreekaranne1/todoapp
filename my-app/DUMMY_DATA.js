import firebase from "./firebase";
let userData = [];

export async function getAllTodos() {
  userData = [];
  var starCountRef = firebase.database().ref("ToDos");
  starCountRef.on("value", (snapshot) => {
    const data = snapshot.val();
    for (let id in data) {
      userData.push({ id, ...data[id] });
    }
  });
  return userData;
}
export async function insertData(data) {
  const insertref = firebase.database().ref("ToDos");
  const newref = insertref.push();
  newref.set(data);
}

export async function getActiveTodo() {
  const sampleDate = await getAllTodos();
  console.log(sampleDate);
  return sampleDate.filter((event) => event.isComplete === false);
}

export async function getCompletedTodo() {
  const sampleDate = await getAllTodos();
  return sampleDate.filter((event) => event.isComplete === true);
}
