# Bootstrap 5 Modal Close on Back Button 🚪

![Bootstrap 5 Modal](https://img.shields.io/badge/Bootstrap%205-Modal-blue?style=flat&logo=bootstrap)

Welcome to the **Bootstrap 5 Modal Close on Back Button** repository! This project enables you to close a Bootstrap modal when the back button is pressed. This feature enhances user experience by allowing users to navigate back without needing to click on a close button.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Introduction

Bootstrap is a popular front-end framework that simplifies web development. Modals are a key component of Bootstrap, providing a way to display content in a dialog overlay. However, users often expect to close modals using the back button on their devices. This repository addresses that need.

## Features

- Closes Bootstrap modals when the back button is pressed.
- Simple and lightweight JavaScript implementation.
- Compatible with Bootstrap 5.
- Easy to integrate into existing projects.

## Installation

To get started, clone the repository using the following command:

```bash
git clone https://github.com/acurinmarkjoseph/bootstrap-5-modal-close-on-back.git
```

Navigate to the project directory:

```bash
cd bootstrap-5-modal-close-on-back
```

You can also download the latest release from the [Releases section](https://github.com/acurinmarkjoseph/bootstrap-5-modal-close-on-back/releases). 

## Usage

To use this feature, include the necessary Bootstrap CSS and JS files in your HTML. You can do this by adding the following lines in your `<head>` section:

```html
<link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
```

Next, create a modal structure in your HTML:

```html
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Your content here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

Then, add the JavaScript to handle the back button functionality:

```javascript
$(document).ready(function() {
  var modal = $('#exampleModal');

  // Open modal
  $('#openModal').on('click', function() {
    modal.modal('show');
  });

  // Close modal on back button
  $(window).on('popstate', function() {
    if (modal.is(':visible')) {
      modal.modal('hide');
    }
  });
});
```

## How It Works

This implementation leverages the `popstate` event in JavaScript. When the modal opens, we can push a new state to the history stack. When the user presses the back button, the `popstate` event triggers, allowing us to check if the modal is visible. If it is, we can close it.

### Example

Here’s a complete example of how your HTML might look:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
    <title>Bootstrap Modal Example</title>
</head>
<body>

<button id="openModal" class="btn btn-primary">Open Modal</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Your content here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
<script>
$(document).ready(function() {
  var modal = $('#exampleModal');

  // Open modal
  $('#openModal').on('click', function() {
    modal.modal('show');
    history.pushState(null, null, location.href); // Push state to history
  });

  // Close modal on back button
  $(window).on('popstate', function() {
    if (modal.is(':visible')) {
      modal.modal('hide');
    }
  });
});
</script>

</body>
</html>
```

## Contributing

We welcome contributions to this project. If you have suggestions for improvements or want to report issues, please create an issue or submit a pull request. 

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

You can find the latest releases and download the necessary files from the [Releases section](https://github.com/acurinmarkjoseph/bootstrap-5-modal-close-on-back/releases). 

By using this feature, you enhance the user experience of your web applications, making them more intuitive and user-friendly. 

Feel free to explore, modify, and use this project in your own applications!