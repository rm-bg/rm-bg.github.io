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
const uploader = FilePond.create(document.querySelector('input'), {
    name: "uploader",
    labelIdle: `
        <div style="width:100%;height:100%;">
            <p>Drag &amp; Drop your image or <span class="filepond--label-action" tabindex="0">Browse</span></p>
        </div>
    `
});

// Register an event for addfile
uploader.on('addfile', (error, file) => {
    if (error) {
        console.log('Error during the file upload')
    }

    // Activate the popup and show the result
    document.querySelector('.output-img').setAttribute('src', file.getFileEncodeDataURL())
    document.body.classList.add("active-popup");
});

// Remove popup when close-btn is clicked
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.body.classList.remove("active-popup");
})
