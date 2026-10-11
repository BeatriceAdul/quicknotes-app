const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const category = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");

const STORAGE_KEY = "quicknotes";

let notes = loadNotes();


function loadNotes() {

    const savedNotes = localStorage.getItem(STORAGE_KEY);

    return savedNotes ? JSON.parse(savedNotes) : [];
}


function saveNotes() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notes)
    );
}


function updateCount() {

    if (notes.length === 0) {
        noteCount.textContent = "You have no notes yet.";
    } else if (notes.length === 1) {
        noteCount.textContent = "You have 1 note.";
    } else {
        noteCount.textContent = `You have ${notes.length} notes.`;
    }
}


function render() {

    notesList.replaceChildren();

    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredNotes = notes.filter((note) =>
        note.text.toLowerCase().includes(searchTerm)
    );

    if (filteredNotes.length === 0 && searchTerm !== "") {

        const message = document.createElement("li");
        message.textContent = "No notes match your search.";

        notesList.appendChild(message);

    } else {

        filteredNotes.forEach((note) => {

            const li = document.createElement("li");

            li.classList.add("note");
            li.classList.add(`category-${note.category}`);


            const text = document.createElement("span");

            text.classList.add("note-text");
            text.textContent = note.text;


            const categoryLabel = document.createElement("span");

            categoryLabel.classList.add("note-category");
            categoryLabel.textContent = note.category;


            const date = document.createElement("span");

            date.classList.add("note-date");
            date.textContent = note.createdAt;


            const deleteButton = document.createElement("button");

            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "Delete";


            deleteButton.addEventListener("click", () => {

                deleteNote(note.id);

            });


            li.appendChild(text);
            li.appendChild(categoryLabel);
            li.appendChild(date);
            li.appendChild(deleteButton);

            notesList.appendChild(li);

        });
    }

    updateCount();
}


function deleteNote(id) {

    notes = notes.filter((note) => note.id !== id);

    saveNotes();

    render();
}


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const text = input.value.trim();


    if (text === "") {

        errorMessage.textContent =
            "Please type a note first.";

        return;
    }


    if (text.length > 200) {

        errorMessage.textContent =
            "Notes must be 200 characters or fewer.";

        return;
    }


    errorMessage.textContent = "";


    const newNote = {

        id: Date.now(),

        text: text,

        category: category.value,

        createdAt: new Date().toLocaleString()

    };


    notes.push(newNote);

    saveNotes();

    render();

    input.value = "";

    input.focus();
});


searchInput.addEventListener("input", () => {

    render();

});


render();