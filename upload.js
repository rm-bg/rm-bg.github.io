/*
We want to preview images, so we need to register the Image Preview plugin
*/
FilePond.registerPlugin(

    // encodes the file as base64 data
    FilePondPluginFileEncode,

    // validates the size of the file
    FilePondPluginFileValidateSize,

    // corrects mobile image orientation
    FilePondPluginImageExifOrientation,

    // previews dropped images
    FilePondPluginImagePreview

);

// Select the file input and use create() to turn it into a pond
const pond = FilePond.create(document.querySelector('input'));

// Register an event for addfile
pond.on('addfile', (error, file) => {
    if (error) {
        console.log('Error during the file upload')
    }
    // Activate the popup and show the result
    document.body.classList.add("active-popup");
});

// Remove popup when close-btn is clicked
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.body.classList.remove("active-popup");
})
