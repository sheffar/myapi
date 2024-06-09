let imageUrl = document.querySelector('#imageUrl');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
let mainContent = document.querySelector('#mainContent');
let category = document.querySelector('#category');

let form = document.querySelector('#newsForm');
let btn = document.querySelector('button[type="submit"]');
let allInput = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

let errorMessages = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
});

const validateInput = async () => {
    errorMessages = []
    if (!imageUrl.value) {
        errorMessages.push("Image URL cannot be empty");
    }

    if (!title.value) {
        errorMessages.push("Title cannot be empty");
    }

    if (category.value === "") {
        errorMessages.push("Please select a category");
    }

    if (!description.value) {
        errorMessages.push("Description cannot be empty");
    }

    if (!mainContent.value) {
        errorMessages.push("Main Content cannot be empty");
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
        // highlightErrorFields();
        return;
    }

    // Disable submit button
    btn.disabled = true;
    btn.textContent = "Loading...";

    try {
        // Perform form submission
        const response = await fetch("/api/news", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                imageUrl: imageUrl.value,
                title: title.value,
                description: description.value,
                mainContent: mainContent.value,
                category: category.value
            })
        })
        const data = await response.json()
        // form.submit();

        if (response.ok) {

            if (data.message) {
                alert(data.message);
                form.reset();
            } else {
                alert("AN Error Occured")
            }
        } else {
            alert(data.message)
        }
    } catch (e) {
        console.log('Error submitting form:', e.message);
        alert("An error occurred while submitting the form");
    } finally {
        // Re-enable submit button
        btn.disabled = false;
        btn.textContent = "Submit";
    }
};

// const highlightErrorFields = () => {
//     allInput.forEach(input => {
//         input.classList.remove('error');
//         if (!input.value) {
//             input.classList.add('error');
//         }
//     });
// };
