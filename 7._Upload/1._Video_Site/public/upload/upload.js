let fileValid = false;

function submittingForm() {
    return fileValid;
}

function fileAdded(files) {
    validateFile(files[0]);
}

function validateFile(file) {
    if (file.type === "video/mp4" || file.type === "video/ogg" && file.size <= 536870912) {
        fileValid = true;
    } else {
        fileValid = false;
    }
}