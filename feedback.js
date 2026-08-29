/* =====================================================
   MEDINFO PORTAL - FEEDBACK
   File: js/feedback.js
   ===================================================== */

const FEEDBACK_KEY = "medinfo_feedback";


/* =====================================================
   GET FEEDBACK
   ===================================================== */

function getFeedback() {

    try {

        return JSON.parse(
            localStorage.getItem(FEEDBACK_KEY)
        ) || [];

    } catch (error) {

        console.error(
            "Unable to load feedback:",
            error
        );

        return [];

    }
}


/* =====================================================
   SAVE FEEDBACK
   ===================================================== */

function saveFeedback(feedbackList) {

    localStorage.setItem(
        FEEDBACK_KEY,
        JSON.stringify(feedbackList)
    );

}


/* =====================================================
   CREATE FEEDBACK
   ===================================================== */

function createFeedback(data) {

    const feedbackList =
        getFeedback();


    const currentUser =
        typeof getCurrentUser === "function"
            ? getCurrentUser()
            : null;


    const feedback = {

        id:
            "feedback_" +
            Date.now(),

        name:
            data.name.trim(),

        email:
            data.email.trim().toLowerCase(),

        category:
            data.category,

        rating:
            Number(data.rating),

        message:
            data.message.trim(),

        userId:
            currentUser
                ? currentUser.id
                : null,

        status:
            "New",

        createdAt:
            new Date().toISOString()

    };


    feedbackList.unshift(
        feedback
    );


    saveFeedback(
        feedbackList
    );


    return feedback;

}


/* =====================================================
   SETUP FEEDBACK FORM
   ===================================================== */

function setupFeedbackForm() {

    const form =
        document.getElementById(
            "feedbackForm"
        );


    if (!form) {
        return;
    }


    const ratingInput =
        document.getElementById(
            "feedbackRating"
        );


    const ratingStars =
        document.querySelectorAll(
            "[data-rating]"
        );


    /* =========================================
       LOAD CURRENT USER
    ========================================= */

    try {

        const user =
            typeof getCurrentUser === "function"
                ? getCurrentUser()
                : null;


        if (user) {

            const nameInput =
                document.getElementById(
                    "feedbackName"
                );


            const emailInput =
                document.getElementById(
                    "feedbackEmail"
                );


            if (nameInput) {

                nameInput.value =
                    user.name || "";

            }


            if (emailInput) {

                emailInput.value =
                    user.email || "";

            }

        }

    } catch (error) {

        console.log(
            "User information not available."
        );

    }


    /* =========================================
       STAR RATING
    ========================================= */

    ratingStars.forEach(
        function (star) {

            star.addEventListener(
                "click",
                function () {

                    const rating =
                        Number(
                            this.dataset.rating
                        );


                    if (ratingInput) {

                        ratingInput.value =
                            rating;

                    }


                    ratingStars.forEach(
                        function (item) {

                            const itemRating =
                                Number(
                                    item.dataset.rating
                                );


                            const icon =
                                item.querySelector(
                                    "i"
                                );


                            if (
                                itemRating <=
                                rating
                            ) {

                                item.classList.add(
                                    "selected"
                                );


                                if (icon) {

                                    icon.className =
                                        "bi bi-star-fill";

                                }

                            } else {

                                item.classList.remove(
                                    "selected"
                                );


                                if (icon) {

                                    icon.className =
                                        "bi bi-star";

                                }

                            }

                        }
                    );

                }
            );

        }
    );


    /* =========================================
       FORM SUBMIT
    ========================================= */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "feedbackName"
                )?.value || "";


            const email =
                document.getElementById(
                    "feedbackEmail"
                )?.value || "";


            const category =
                document.getElementById(
                    "feedbackCategory"
                )?.value || "General";


            const message =
                document.getElementById(
                    "feedbackMessage"
                )?.value || "";


            const rating =
                Number(
                    ratingInput?.value || 0
                );


            const messageBox =
                document.getElementById(
                    "feedbackAlert"
                );


            /* =================================
               VALIDATION
            ================================= */

            if (name.trim().length < 2) {

                displayFeedbackAlert(
                    messageBox,
                    "Please enter your name.",
                    "danger"
                );

                return;

            }


            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                displayFeedbackAlert(
                    messageBox,
                    "Please enter a valid email address.",
                    "danger"
                );

                return;

            }


            if (rating < 1 || rating > 5) {

                displayFeedbackAlert(
                    messageBox,
                    "Please select a rating from 1 to 5.",
                    "danger"
                );

                return;

            }


            if (message.trim().length < 5) {

                displayFeedbackAlert(
                    messageBox,
                    "Please write a little more feedback.",
                    "danger"
                );

                return;

            }


            /* =================================
               SAVE
            ================================= */

            createFeedback({

                name: name,

                email: email,

                category: category,

                rating: rating,

                message: message

            });


            /* =================================
               SUCCESS
            ================================= */

            displayFeedbackAlert(
                messageBox,
                "Thank you! Your feedback has been submitted successfully.",
                "success"
            );


            form.reset();


            if (ratingInput) {

                ratingInput.value = "";

            }


            ratingStars.forEach(
                function (star) {

                    star.classList.remove(
                        "selected"
                    );


                    const icon =
                        star.querySelector("i");


                    if (icon) {

                        icon.className =
                            "bi bi-star";

                    }

                }
            );


            setTimeout(
                function () {

                    if (messageBox) {

                        messageBox.style.display =
                            "none";

                    }

                },
                4500
            );

        }
    );

}


/* =====================================================
   DISPLAY ALERT
   ===================================================== */

function displayFeedbackAlert(
    element,
    message,
    type
) {

    if (!element) {

        alert(message);

        return;

    }


    element.className =
        "alert alert-" + type;


    element.textContent =
        message;


    element.style.display =
        "block";

}


/* =====================================================
   CHARACTER COUNTER
   ===================================================== */

function setupFeedbackCharacterCounter() {

    const textarea =
        document.getElementById(
            "feedbackMessage"
        );


    const counter =
        document.getElementById(
            "feedbackCharacterCount"
        );


    if (
        !textarea ||
        !counter
    ) {

        return;

    }


    function updateCounter() {

        counter.textContent =
            textarea.value.length;

    }


    textarea.addEventListener(
        "input",
        updateCounter
    );


    updateCounter();

}


/* =====================================================
   LOAD FEEDBACK FOR CURRENT USER
   ===================================================== */

function getMyFeedback() {

    const user =
        typeof getCurrentUser === "function"
            ? getCurrentUser()
            : null;


    if (!user) {

        return [];

    }


    return getFeedback().filter(
        function (item) {

            return (
                item.userId ===
                user.id
            );

        }
    );

}


/* =====================================================
   DELETE FEEDBACK
   ===================================================== */

function deleteFeedback(
    feedbackId
) {

    const feedbackList =
        getFeedback();


    const updatedList =
        feedbackList.filter(
            function (item) {

                return item.id !== feedbackId;

            }
        );


    saveFeedback(
        updatedList
    );


    return true;

}


/* =====================================================
   ADMIN FEEDBACK HELPERS
   ===================================================== */

function getFeedbackCount() {

    return getFeedback().length;

}


function getNewFeedbackCount() {

    return getFeedback().filter(
        function (item) {

            return item.status === "New";

        }
    ).length;

}


function updateFeedbackStatus(
    feedbackId,
    status
) {

    const feedbackList =
        getFeedback();


    const feedback =
        feedbackList.find(
            function (item) {

                return item.id === feedbackId;

            }
        );


    if (!feedback) {

        return false;

    }


    feedback.status =
        status;


    saveFeedback(
        feedbackList
    );


    return true;

}


/* =====================================================
   INITIALIZE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupFeedbackForm();

        setupFeedbackCharacterCounter();

    }
);
