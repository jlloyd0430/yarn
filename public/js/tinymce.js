tinymce.init({
  selector: "#serviceDescription",
  apiKey: process.env.TINY_CLOUD_API_KEY,
  plugins: [
    "advlist lists link autolink autosave code",
    "preview",
    "searchreplace",
    "wordcount",
    "media table emoticons image imagetools"
  ],
  toolbar:
    "undo redo | styleselect | fontselect | fontsizeselect | bold italic underline | alignLeft alignCenter alignRight alignJustify | bullist numlist outdent indent | link | foreColor backcolor emoticons | preview table",
  height: 300,
  setup: (editor) => {
    editor.on("change", function () {
      tinymce.triggerSave();
    });
  }
});

