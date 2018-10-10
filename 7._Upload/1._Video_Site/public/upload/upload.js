let fileValid = false;

function submittingForm() {
    return fileValid;
}

function fileAdded(files) {
    validateFile(files[0]);
    if (fileValid) {
        swal({
            type: 'success',
            timer: 10000,
            title: 'Yaaaaay!',
            text: 'File uploaded correctly',
          })
    } else {
        const fileTypeValid = files[0].type === "video/mp4" || files[0].type === "video/ogg";
        swal({
            type: 'error',
            timer: 10000,
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: fileTypeValid ? "Size is too big. Videos under 512MB only." : "File type not valid. mp4 or ogg only."
          })
    }
}

function validateFile(file) {
    const fileTypeValid = file.type === "video/mp4" || file.type === "video/ogg";
    if (file.size <= 536870912 && fileTypeValid) {
        fileValid = true;
    } else {
        fileValid = false;
    }
    console.log(fileValid);
}
