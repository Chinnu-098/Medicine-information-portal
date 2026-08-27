/* =========================================
   FEEDBACK SYSTEM
========================================= */

let selectedRating = 0;


/* =========================================
   GET FEEDBACKS
========================================= */

function getFeedbacks() {

    return JSON.parse(
        localStorage.getItem("medicinePortalFeedbacks")
    ) || [];

}


/* =========================================
   SAVE FEEDBACKS
========================================= */

function saveFeedbacks(feedbacks) {

    localStorage.setItem(
        "medicinePortalFeedbacks",
        JSON.stringify(feedbacks)
    );

}


/* =========================================
   SHOW MESSAGE
========================================= */

function showFeedbackMessage(
    message,
    type
) {

    const alertBox =
        document.getElementById(
            "feedbackMessage"
        );

    if (!alertBox) return;

    alertBox.className =
        "alert alert-" + type;

    alertBox.textContent =
        message;

    alertBox.style.display =
        "block";

}


/* =========================================
   STAR RATING
========================================= */

function initializeStars() {

    const stars =
        document.querySelectorAll(
            ".star-btn"
        );

    const ratingText =
        document.getElementById(
            "ratingText"
        );

    stars.forEach(function(star) {

        star.addEventListener(
            "click",
            function() {

                selectedRating =
                    parseInt(
                        this.dataset.rating
                    );

                document.getElementById(
                    "rating"
                ).value =
                    selectedRating;

                updateStarDisplay();

                const messages = {

                    1: "Very Poor 😞",
                    2: "Poor 😕",
                    3: "Average 🙂",
                    4: "Good 😊",
                    5: "Excellent 🤩"

                };

                ratingText.textContent =
                    messages[selectedRating];

            }
        );

    });

}


/* =========================================
   UPDATE STARS
========================================= */

function updateStarDisplay() {

    const stars =
        document.querySelectorAll(
            ".star-btn"
        );

    stars.forEach(function(star) {

        const value =
            parseInt(
                star.dataset.rating
            );

        if (
            value <= selectedRating
        ) {

            star.style.color =
                "gold";

        } else {

            star.style.color =
                "#cccccc";

        }

    });

}


/* =========================================
   AUTO FILL USER
========================================= */

function autoFillUserData() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "medicinePortalCurrentUser"
            )
        );

    if (!currentUser) return;

    const nameField =
        document.getElementById(
            "feedbackName"
        );

    const emailField =
        document.getElementById(
            "feedbackEmail"
        );

    if (nameField) {

        nameField.value =
            currentUser.name;

    }

    if (emailField) {

        emailField.value =
            currentUser.email;

    }

}


/* =========================================
   SUBMIT FEEDBACK
========================================= */

function submitFeedback(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "feedbackName"
        ).value.trim();

    const email =
        document.getElementById(
            "feedbackEmail"
        ).value.trim();

    const feedback =
        document.getElementById(
            "feedbackText"
        ).value.trim();


    if (
        name === "" ||
        email === "" ||
        feedback === ""
    ) {

        showFeedbackMessage(
            "Please fill all fields.",
            "danger"
        );

        return;

    }


    if (
        selectedRating === 0
    ) {

        showFeedbackMessage(
            "Please select a rating.",
            "warning"
        );

        return;

    }


    const feedbacks =
        getFeedbacks();


    const newFeedback = {

        id: Date.now(),

        name: name,

        email: email,

        rating: selectedRating,

        feedback: feedback,

        createdAt:
            new Date().toLocaleString()

    };


    feedbacks.push(
        newFeedback
    );

    saveFeedbacks(
        feedbacks
    );


    showFeedbackMessage(
        "Thank you! Feedback submitted successfully.",
        "success"
    );


    document.getElementById(
        "feedbackForm"
    ).reset();


    selectedRating = 0;

    updateStarDisplay();

    document.getElementById(
        "ratingText"
    ).textContent =
        "Select a rating";

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        initializeStars();

        autoFillUserData();

        const form =
            document.getElementById(
                "feedbackForm"
            );

        if (form) {

            form.addEventListener(
                "submit",
                submitFeedback
            );

        }

    }
);
