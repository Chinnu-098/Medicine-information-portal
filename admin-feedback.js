```javascript
/* =========================================================
   ADMIN FEEDBACK
   Medicine Information Portal
   ========================================================= */

let selectedFeedbackId = null;


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadFeedback();


        const searchInput =
            document.getElementById(
                "feedbackSearch"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                function () {

                    loadFeedback(
                        this.value.trim()
                    );

                }
            );

        }


        const deleteButton =
            document.getElementById(
                "confirmDeleteFeedback"
            );


        if (deleteButton) {

            deleteButton.addEventListener(
                "click",
                deleteSelectedFeedback
            );

        }

    }
);


/* =========================================================
   GET FEEDBACK
   ========================================================= */

function getStoredFeedback() {

    try {

        const data =
            localStorage.getItem(
                "feedback"
            );


        if (!data) {

            return [];

        }


        const feedback =
            JSON.parse(data);


        return Array.isArray(feedback)
            ? feedback
            : [];

    }
    catch (error) {

        console.error(
            "Error loading feedback:",
            error
        );


        return [];

    }

}


/* =========================================================
   LOAD FEEDBACK
   ========================================================= */

function loadFeedback(
    searchText = ""
) {


    const feedback =
        getStoredFeedback();


    const search =
        String(
            searchText
        ).toLowerCase();


    const filtered =
        feedback.filter(
            function (item) {

                const name =
                    String(
                        item.name ||
                        item.userName ||
                        ""
                    ).toLowerCase();


                const email =
                    String(
                        item.email ||
                        ""
                    ).toLowerCase();


                const message =
                    String(
                        item.message ||
                        item.feedback ||
                        ""
                    ).toLowerCase();


                const subject =
                    String(
                        item.subject ||
                        ""
                    ).toLowerCase();


                return (
                    name.includes(search) ||
                    email.includes(search) ||
                    message.includes(search) ||
                    subject.includes(search)
                );

            }
        );


    updateFeedbackStats(
        feedback
    );


    renderFeedback(
        filtered
    );

}


/* =========================================================
   UPDATE STATISTICS
   ========================================================= */

function updateFeedbackStats(
    feedback
) {


    const total =
        document.getElementById(
            "totalFeedback"
        );


    const today =
        document.getElementById(
            "todayFeedback"
        );


    const latest =
        document.getElementById(
            "latestFeedback"
        );


    if (total) {

        total.textContent =
            feedback.length;

    }


    const todayString =
        new Date().toDateString();


    const todayCount =
        feedback.filter(
            function (item) {

                const date =
                    new Date(
                        item.createdAt ||
                        item.date ||
                        item.submittedAt ||
                        0
                    );


                return (
                    !Number.isNaN(
                        date.getTime()
                    ) &&
                    date.toDateString() ===
                    todayString
                );

            }
        ).length;


    if (today) {

        today.textContent =
            todayCount;

    }


    if (latest) {

        if (feedback.length === 0) {

            latest.textContent =
                "No feedback";

            return;

        }


        const sorted =
            [...feedback].sort(
                function (a, b) {

                    return (
                        getTime(b) -
                        getTime(a)
                    );

                }
            );


        latest.textContent =
            getFeedbackName(
                sorted[0]
            );

    }

}


/* =========================================================
   RENDER FEEDBACK
   ========================================================= */

function renderFeedback(
    feedback
) {


    const tbody =
        document.getElementById(
            "feedbackTableBody"
        );


    const empty =
        document.getElementById(
            "emptyFeedback"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    if (feedback.length === 0) {

        if (empty) {

            empty.classList.remove(
                "d-none"
            );

        }


        return;

    }


    if (empty) {

        empty.classList.add(
            "d-none"
        );

    }


    const sorted =
        [...feedback].sort(
            function (a, b) {

                return (
                    getTime(b) -
                    getTime(a)
                );

            }
        );


    sorted.forEach(
        function (item, index) {

            tbody.appendChild(
                createFeedbackRow(
                    item,
                    index
                )
            );

        }
    );

}


/* =========================================================
   CREATE FEEDBACK ROW
   ========================================================= */

function createFeedbackRow(
    item,
    index
) {


    const row =
        document.createElement(
            "tr"
        );


    const id =
        getFeedbackId(
            item,
            index
        );


    const name =
        getFeedbackName(
            item
        );


    const email =
        item.email ||
        "No email";


    const subject =
        item.subject ||
        "General Feedback";


    const message =
        item.message ||
        item.feedback ||
        "No message";


    const date =
        formatFeedbackDate(
            item
        );


    const rating =
        Number(
            item.rating
        ) || 0;


    row.innerHTML = `

        <td>

            <span
                class="fw-semibold">

                ${index + 1}

            </span>

        </td>


        <td>

            <div
                class="d-flex
                       align-items-center
                       gap-2">


                <div
                    class="user-table-avatar">

                    <i class="bi bi-person"></i>

                </div>


                <div>

                    <strong>
                        ${escapeHTML(name)}
                    </strong>

                    <small
                        class="d-block text-muted">

                        ${escapeHTML(email)}

                    </small>

                </div>


            </div>

        </td>


        <td>

            <strong>

                ${escapeHTML(
                    truncate(
                        subject,
                        30
                    )
                )}

            </strong>

            <small
                class="d-block text-muted">

                ${escapeHTML(
                    truncate(
                        message,
                        55
                    )
                )}

            </small>

        </td>


        <td>

            ${
                rating > 0
                ? createStars(rating)
                : '<span class="text-muted">Not rated</span>'
            }

        </td>


        <td>

            <small>
                ${date}
            </small>

        </td>


        <td class="text-end">

            <div
                class="d-flex
                       justify-content-end
                       gap-1">


                <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    title="View Feedback"
                    onclick="viewFeedback('${escapeAttribute(id)}')">

                    <i class="bi bi-eye"></i>

                </button>


                <button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    title="Delete Feedback"
                    onclick="askDeleteFeedback('${escapeAttribute(id)}')">

                    <i class="bi bi-trash"></i>

                </button>


            </div>

        </td>

    `;


    return row;

}


/* =========================================================
   VIEW FEEDBACK
   ========================================================= */

function viewFeedback(
    feedbackId
) {


    const feedback =
        getStoredFeedback();


    const item =
        feedback.find(
            function (feedbackItem, index) {

                return String(
                    getFeedbackId(
                        feedbackItem,
                        index
                    )
                ) === String(
                    feedbackId
                );

            }
        );


    if (!item) {

        showMessage(
            "Feedback not found.",
            "danger"
        );

        return;

    }


    setText(
        "modalFeedbackName",
        getFeedbackName(item)
    );


    setText(
        "modalFeedbackEmail",
        item.email ||
        "No email"
    );


    setText(
        "modalFeedbackSubject",
        item.subject ||
        "General Feedback"
    );


    setText(
        "modalFeedbackMessage",
        item.message ||
        item.feedback ||
        "No message"
    );


    setText(
        "modalFeedbackDate",
        formatFeedbackDate(item)
    );


    const rating =
        Number(
            item.rating
        ) || 0;


    const ratingElement =
        document.getElementById(
            "modalFeedbackRating"
        );


    if (ratingElement) {

        ratingElement.innerHTML =
            rating > 0
                ? createStars(rating)
                : "Not rated";

    }


    const modalElement =
        document.getElementById(
            "feedbackDetailsModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );


        modal.show();

    }

}


/* =========================================================
   ASK DELETE
   ========================================================= */

function askDeleteFeedback(
    feedbackId
) {


    selectedFeedbackId =
        feedbackId;


    const modalElement =
        document.getElementById(
            "deleteFeedbackModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal.getOrCreateInstance(
                modalElement
            );


        modal.show();

    }

}


/* =========================================================
   DELETE FEEDBACK
   ========================================================= */

function deleteSelectedFeedback() {


    if (!selectedFeedbackId) {

        return;

    }


    const feedback =
        getStoredFeedback();


    const updated =
        feedback.filter(
            function (item, index) {

                return String(
                    getFeedbackId(
                        item,
                        index
                    )
                ) !== String(
                    selectedFeedbackId
                );

            }
        );


    if (
        updated.length ===
        feedback.length
    ) {

        showMessage(
            "Feedback not found.",
            "danger"
        );

        return;

    }


    try {

        localStorage.setItem(
            "feedback",
            JSON.stringify(
                updated
            )
        );

    }
    catch (error) {

        console.error(
            error
        );


        showMessage(
            "Unable to delete feedback.",
            "danger"
        );

        return;

    }


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


    selectedFeedbackId =
        null;


    loadFeedback();


    showMessage(
        "Feedback deleted successfully.",
        "success"
    );

}


/* =========================================================
   GET FEEDBACK ID
   ========================================================= */

function getFeedbackId(
    item,
    index
) {

    return (
        item.id ||
        item.feedbackId ||
        `FEEDBACK-${index + 1}`
    );

}


/* =========================================================
   GET FEEDBACK NAME
   ========================================================= */

function getFeedbackName(
    item
) {

    return (
        item.name ||
        item.userName ||
        item.username ||
        "Anonymous User"
    );

}


/* =========================================================
   GET TIME
   ========================================================= */

function getTime(
    item
) {


    const value =
        item.createdAt ||
        item.date ||
        item.submittedAt;


    if (!value) {

        return 0;

    }


    const time =
        new Date(value).getTime();


    return Number.isNaN(time)
        ? 0
        : time;

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatFeedbackDate(
    item
) {


    const time =
        getTime(item);


    if (!time) {

        return "Not available";

    }


    return new Date(
        time
    ).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   CREATE STARS
   ========================================================= */

function createStars(
    rating
) {


    let html = "";


    const safeRating =
        Math.max(
            0,
            Math.min(
                5,
                Number(rating)
            )
        );


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if (i <= safeRating) {

            html +=
                '<i class="bi bi-star-fill text-warning"></i>';

        }
        else {

            html +=
                '<i class="bi bi-star text-muted"></i>';

        }

    }


    return html;

}


/* =========================================================
   TRUNCATE
   ========================================================= */

function truncate(
    text,
    maxLength
) {


    const value =
        String(
            text || ""
        );


    if (
        value.length <=
        maxLength
    ) {

        return value;

    }


    return (
        value.substring(
            0,
            maxLength
        ) + "..."
    );

}


/* =========================================================
   SET TEXT
   ========================================================= */

function setText(
    id,
    value
) {


    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            value ?? "";

    }

}


/* =========================================================
   SHOW MESSAGE
   ========================================================= */

function showMessage(
    message,
    type = "info"
) {


    const box =
        document.getElementById(
            "pageMessage"
        );


    if (!box) {

        return;

    }


    box.className =
        `alert alert-${type}`;


    box.innerHTML = `

        <i
            class="bi bi-info-circle-fill me-2">
        </i>

        ${escapeHTML(message)}

    `;


    box.classList.remove(
        "d-none"
    );


    setTimeout(
        function () {

            box.classList.add(
                "d-none"
            );

        },
        3000
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(
    value
) {


    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value ?? "";


    return div.innerHTML;

}


/* =========================================================
   ESCAPE ATTRIBUTE
   ========================================================= */

function escapeAttribute(
    value
) {

    return String(
        value ?? ""
    )
    .replace(
        /\\/g,
        "\\\\"
    )
    .replace(
        /'/g,
        "\\'"
    );

}
```
