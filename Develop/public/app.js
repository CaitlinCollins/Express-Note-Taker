const saveButton = $(".save-note");

saveButton.on("click", function (event) {
    event.preventDefault();

    // Create data object with user input.
    const title = $(".note-title").val().trim();
    const text = $(".note-text-area").val().trim();
    const newNote = {
        title: title,
        text: text,
    };
    return newNote;
});
console.log(newNote);

module.exports = newNote;