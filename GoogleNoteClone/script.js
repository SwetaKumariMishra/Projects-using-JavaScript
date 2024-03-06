const addButton = document.querySelector(".button-text");

const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];

  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
    <div class="operation">
            <button class="edit"> <i class="fas fa-edit"></i></button>
            <button class="delete"> <i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>`;

  note.insertAdjacentHTML("afterbegin", htmlData);

  //getting the references
  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  // toggle using edit button
  textArea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (Event) => {
    const value = Event.target.value;
    mainDiv.innerHTML = value;

    updateLSData();
  });

  document.body.appendChild(note); // it appends a node as the last child of a node
};

// getting data back from the local storage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());

// The localStorage and sessionStorage properties allow to save key/value pairs in a web browser. The localStorage object stores data with no expiration
// date. The data will not be deleted when the browser is closed, and will be available the next day, week,or year.
