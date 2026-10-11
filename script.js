const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const category = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");

let notes = [];


function render() {

    notesList.replaceChildren();

    notes.forEach((note) => {

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

        li.appendChild(text);
        li.appendChild(categoryLabel);
        li.appendChild(date);
        li.appendChild(deleteButton);

        notesList.appendChild(li);
    });
}


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const text = input.value.trim();

    const newNote = {
        id: Date.now(),
        text: text,
        category: category.value,
        createdAt: new Date().toLocaleString()
    };

    notes.push(newNote);

    render();

    input.value = "";
    input.focus();
});


render();const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const category = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");

let notes = [];


function render() {

    notesList.replaceChildren();

    notes.forEach((note) => {

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

        li.appendChild(text);
        li.appendChild(categoryLabel);
        li.appendChild(date);
        li.appendChild(deleteButton);

        notesList.appendChild(li);
    });
}


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const text = input.value.trim();

    const newNote = {
        id: Date.now(),
        text: text,
        category: category.value,
        createdAt: new Date().toLocaleString()
    };

    notes.push(newNote);

    render();

    input.value = "";
    input.focus();
});

render();