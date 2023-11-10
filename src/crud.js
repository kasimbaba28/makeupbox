const fs = require('fs');
const path = require('path');

var btnCreate = document.getElementById('btnCreate');
var btnRead = document.getElementById('btnRead');
var btnUpdate = document.getElementById('btnUpdate');
var btnDelete = document.getElementById('btnDelete');
var fileName = document.getElementById('fileName');
var fileContents = document.getElementById('fileContents');

let pathName = path.join(__dirname, 'Files');

// Check if the directory exists, if not, create it
if (!fs.existsSync(pathName)) {
  fs.mkdir(pathName, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating directory:', err);
    }
  });
}

btnCreate.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);
  let contents = fileContents.value;

  fs.writeFile(file, contents, function (err) {
    if (err) {
      console.error('Error creating file:', err);
      alert('Error creating file: ' + err.message);
      return;
    }
    var txtfile = document.getElementById('fileName').value;
    alert(contents + ' was created');
    console.log('The file was created');
  });
});

btnRead.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);

  fs.readFile(file, 'utf-8', function (err, data) {
    if (err) {
      console.error('Error reading file:', err);
      alert('Error reading file: ' + err.message);
      return;
    }
    fileContents.value = data;
    alert('File content read successfully!');
    console.log('The file was read!');
  });
});

btnUpdate.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);
  let contents = fileContents.value;

  fs.writeFile(file, contents, function (err) {
    if (err) {
      console.error('Error updating file:', err);
      alert('Error updating file: ' + err.message);
      return;
    }
    var txtfile = document.getElementById('fileName').value;
    alert(contents + ' was updated');
    console.log('The file was updated');
  });
});

btnDelete.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);

  // Clear the contents of the file by writing an empty string
  fs.writeFile(file, '', function (err) {
    if (err) {
      console.error('Error deleting file contents:', err);
      alert('Error deleting file contents: ' + err.message);
      return;
    }
    fileName.value = '';
    fileContents.value = '';
    alert('File contents were deleted successfully!');
    console.log('The file contents were deleted!');
  });
});
