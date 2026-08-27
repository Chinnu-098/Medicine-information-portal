/* =========================================
   MEDINFO PORTAL
   ADMIN FEEDBACK MANAGEMENT
========================================= */


/* GET FEEDBACK */

function getAdminFeedback() {

    return JSON.parse(
        localStorage.getItem("medicinePortalFeedback")
    ) || [];

}


/* SAVE FEEDBACK */

function saveAdminFeedback(feedback) {

    localStorage.setItem(
        "medicinePortalFeedback",
        JSON.stringify(feedback)
    );

}


/* DISPLAY FEEDBACK */

function displayFeedback(feedback = getAdminFeedback()) {

    const table =
        document.getElementById("feedbackTableBody");

    const empty =
        document.getElementById("emptyFeedbackState");

    if (!table) return;

    table.innerHTML = "";


    /* Count */

    const count =
        document.getElementById("feedbackCount");

    if (count) {
        count.textContent = feedback.length;
    }


    /* Statistics */

    updateFeedbackStats(feedback);


    if (feedback.length === 0) {

        if (empty) {
            empty.style.display = "block";
        }

        return;
    }


    if (empty) {
        empty.style.display = "none";
    }


    feedback.forEach(function(item, index) {

        const row =
            document.createElement("tr");


        const name =
            item.name ||
            item.username ||
            "Anonymous";


        const email =
            item.email ||
            "";


        const rating =
            Number(item.rating) || 0;


        const message =
            item.message ||
            item.feedback ||
            "";


        const date =
            item.date ||
            item.createdAt ||
            "-";


        let stars = "";


        for (let i = 1; i <= 5; i++) {

            stars +=
                i <= rating
                    ? "★"
                    : "☆";

        }


        row.innerHTML = `

            <td class="px-3">
                ${index + 1}
            </td>

            <td>

                <strong>
                    ${escapeFeedbackHTML(name)}
                </strong>

                <br>

                <small class="text-muted">
                    ${escapeFeedbackHTML(email)}
                </small>

            </td>

            <td>

                <span class="text-warning fs-5">

                    ${stars}

                </span>

                <br>

                <small>
                    ${rating}/5
                </small>

            </td>

            <td style="min-width:250px;">

                ${escapeFeedbackHTML(message)}

            </td>

            <td>

                <small>
                    ${escapeFeedbackHTML(date)}
                </small>

            </td>

            <td class="text-center">

                <button
                    class="btn btn-sm btn-danger"
                    onclick="openDeleteFeedbackModal(${index})">

                    <i class="bi bi-trash"></i>

                </button>

            </td>

        `;


        table.appendChild(row);

    });

}


/* =========================================
   SEARCH + FILTER
========================================= */

function filterFeedback() {

    const search =
        document.getElementById(
            "feedbackSearch"
        )?.value
        .trim()
        .toLowerCase() || "";


    const rating =
        document.getElementById(
            "ratingFilter"
        )?.value || "all";


    const feedback =
        getAdminFeedback();


    const filtered =
        feedback.filter(function(item) {

            const name =
                (
                    item.name ||
                    item.username ||
                    ""
                ).toLowerCase();


            const email =
                (
                    item.email ||
                    ""
                ).toLowerCase();


            const message =
                (
                    item.message ||
                    item.feedback ||
                    ""
                ).toLowerCase();


            const matchesSearch =
                name.includes(search) ||
                email.includes(search) ||
                message.includes(search);


            const itemRating =
                String(item.rating || "");


            const matchesRating =
                rating === "all" ||
                itemRating === rating;


            return (
                matchesSearch &&
                matchesRating
            );

        });


    displayFeedback(filtered);

}


/* =========================================
   STATISTICS
========================================= */

function updateFeedbackStats(feedback) {

    const averageElement =
        document.getElementById(
            "averageRating"
        );


    const fiveStarElement =
        document.getElementById(
            "fiveStarCount"
        );


    const latestElement =
        document.getElementById(
            "latestFeedback"
        );


    if (feedback.length === 0) {

        if (averageElement)
            averageElement.textContent = "0.0";

        if (fiveStarElement)
            fiveStarElement.textContent = "0";

        if (latestElement)
            latestElement.textContent = "—";

        return;

    }


    let total = 0;

    let fiveStars = 0;


    feedback.forEach(function(item) {

        const rating =
            Number(item.rating) || 0;

        total += rating;

        if (rating === 5) {
            fiveStars++;
        }

    });


    const average =
        total / feedback.length;


    if (averageElement) {

        averageElement.textContent =
            average.toFixed(1);

    }


    if (fiveStarElement) {

        fiveStarElement.textContent =
            fiveStars;

    }


    if (latestElement) {

        const latest =
            feedback[feedback.length - 1];


        latestElement.textContent =
            latest.name ||
            latest.username ||
            "Anonymous";

    }

}


/* =========================================
   DELETE FEEDBACK
========================================= */

let feedbackToDelete = null;


function openDeleteFeedbackModal(index) {

    const feedback =
        getAdminFeedback();


    if (!feedback[index]) {
        return;
    }


    feedbackToDelete = index;


    const modalElement =
        document.getElementById(
            "deleteFeedbackModal"
        );


    if (modalElement) {

        const modal =
            new bootstrap.Modal(
                modalElement
            );

        modal.show();

    }

}


/* CONFIRM DELETE */

function deleteAdminFeedback() {

    if (
        feedbackToDelete === null
    ) {
        return;
    }


    const feedback =
        getAdminFeedback();


    feedback.splice(
        feedbackToDelete,
        1
    );


    saveAdminFeedback(
        feedback
    );


    feedbackToDelete = null;


    const modalElement =
        document.getElementById(
            "deleteFeedbackModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getInstance(
                modalElement
            );


        if (modal) {
            modal.hide();
        }

    }


    displayFeedback();

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeFeedbackHTML(value) {

    const div =
        document.createElement("div");


    div.textContent =
        value;


    return div.innerHTML;

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        displayFeedback();


        const search =
            document.getElementById(
                "feedbackSearch"
            );


        const rating =
            document.getElementById(
                "ratingFilter"
            );


        if (search) {

            search.addEventListener(
                "input",
                filterFeedback
            );

        }


        if (rating) {

            rating.addEventListener(
                "change",
                filterFeedback
            );

        }


        const deleteButton =
            document.getElementById(
                "confirmDeleteFeedback"
            );


        if (deleteButton) {

            deleteButton.addEventListener(
                "click",
                deleteAdminFeedback
            );

        }

    }
);
``
