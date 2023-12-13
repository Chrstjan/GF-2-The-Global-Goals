//Form Validation
const formContainer = document.querySelector(".form-container");

const createContactForm = () => {
    const formElement = document.createElement("form");
    const formFieldset = document.createElement("fieldset");

    formElement.appendChild(formFieldset);

    const createContactInputElement = (type, placeholder) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        return input;
    }

    const createContactTextArea = (placeholder, rows) => {
        const textArea = document.createElement("textarea");
        textArea.setAttribute("placeholder", placeholder);
        textArea.setAttribute("rows", rows);
        return textArea;
    }

    const createContactBtnElement = (type, value) => {
        const inputBtn = document.createElement("input");
        inputBtn.setAttribute("type", type);
        inputBtn.setAttribute("value", value);
        return inputBtn;
    }

    const fName = createContactInputElement("text", "Indtast dit fulde navn");
    const email = createContactInputElement("email", "Indtast gyldig email");
    const telNumber = createContactInputElement("tel", "Indtast telefonnummer");
    const textArea = createContactTextArea("Evt. Besked.", 7);

    const validateInput = (input, regEx, errorMessage) => {
        const trimmedValue = input.value.trim();
        const isValid = regEx.test(trimmedValue);

        if (isValid) {
            input.classList.add("valid");
            input.classList.remove("invalid");
        }
        else {
            input.classList.add("invalid");
            input.classList.remove("valid");
            displayErrorMessage(errorMessage);
        }

        return isValid;
    };

    const displayErrorMessage = (message) => {
        errorTextContainer.textContent = message;
    }

    const formValidation = (e) => {
        const nameRegExp = /^[a-zA-Z]{2,17}$/;
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

        const isFNameValid = validateInput(fName, nameRegExp, "Dit navn skal indeholde mindst to bogstaver");
        const isEmailValid = validateInput(email, emailRegExp, "du skal indtaste en gyldig email");

        if (isFNameValid && isEmailValid) {
            formFieldset.innerHTML = "";
            const recivedMessage = document.createElement("h2");
            recivedMessage.textContent = "Tak for din besked!.";
            formFieldset.appendChild(recivedMessage);
        }
        else {
            e.preventDefault();
        }
    };

    const resetBtn = createContactBtnElement("reset", "Fortryd");
    const submitBtn = createContactBtnElement("submit", "Send");

    const contactBtnContainer = document.createElement("span");
    contactBtnContainer.classList.add("btn-container");
    contactBtnContainer.appendChild(resetBtn);
    contactBtnContainer.appendChild(submitBtn);

    submitBtn.addEventListener("click", formValidation);

    const errorTextContainer = document.createElement("div");
    
    const appendChildren = (parent, elements) => {
        elements.forEach((element) => {
            parent.appendChild(element)
        });
    };

    appendChildren(formFieldset, [
        fName,
        email,
        telNumber,
        textArea,
        contactBtnContainer,
        errorTextContainer,
    ]);

    formContainer.appendChild(formElement);
};

window.addEventListener("load", () => {
    createContactForm();
})