const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());


const notes = JSON.parse(localStorage.getItem("notes"));

    if(notes) {
        notes.forEach((note) => {
        addNewNote();
        })
        const pastNotes = document.querySelectorAll("textarea");
        pastNotes.forEach((pastNote) => {
        let i = 0;
        pastNote.textContent = notes[i];
            i++;
        })
    }

function addNewNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea></textarea>`

    const deleteBtn = note.querySelector(".delete");
    const editBtn = note.querySelector(".edit");
    const textArea = note.querySelector("textarea");
    const main = note.querySelector(".main");

    // textArea.value = text;
    // main.innerHTML = text;

    deleteBtn.addEventListener("click", ()=>{
        note.remove();
        updateLS();
    })


    editBtn.addEventListener("click", ()=>{
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
        main.innerHTML = textArea.value;
        updateLS();
    })

    // textArea.addEventListener("input", (e) => {
    //     const {value} = e.target;
    //     main.innerHTML = value;
    // })

    document.body.appendChild(note);
}

// localStorage.setItem("name", JSON.stringify());
// JSON.parse(localStorage.getItem("name"))

function updateLS() {
    const notesText=document.querySelectorAll("textarea");
    const notes = [];
    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem("notes", JSON.stringify(notes));
}
