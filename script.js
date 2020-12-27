if(document.title == "Document"){
    const button = document.getElementById("button");
    button.addEventListener("click", store);

    function store(){
        localStorage.firstName = document.getElementById("firstName").value;
        localStorage.lastName = document.getElementById("lastName").value;
        localStorage.text = document.getElementById("text").value;
    }

    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", clear);

    function clear(){
        localStorage.clear();
    }

    const file = document.querySelector('input[type=file]');
    console.log(file);

    file.addEventListener("change", previewFile);

    function previewFile() {
        const preview = document.querySelector('img');
        const fileImage = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
          // convert image file to base64 string
          preview.src = reader.result;
          localStorage.imageData = reader.result.replace(/^data:image\/jpeg;base64,/, "");
        }, false);

        if (fileImage) {
          reader.readAsDataURL(fileImage);
        }
      }
}

if(document.title == "Table"){
    document.getElementById("first-name").textContent=localStorage.firstName;
    document.getElementById("last-name").textContent=localStorage.lastName;
    document.getElementById("textarea-text").textContent=localStorage.text;
    document.getElementById("table-image").style.backgroundImage = `url(data:image/png;base64,${localStorage.imageData})`;

}