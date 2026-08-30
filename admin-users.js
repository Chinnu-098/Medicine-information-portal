```javascript
/* =========================================================
   ADMIN USERS
   Medicine Information Portal
   ========================================================= */

let selectedUserId = null;


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadUsers();


        const search =
            document.getElementById(
                "userSearch"
            );


        if (search) {

            search.addEventListener(
                "input",
                function () {

                    loadUsers(
                        this.value.trim()
                    );

                }
            );

        }


        const deleteButton =
            document.getElementById(
                "confirmDeleteButton"
            );


        if (deleteButton) {

            deleteButton.addEventListener(
                "click",
                deleteSelectedUser
            );

        }

    }
);


/* =========================================================
   GET USERS FROM LOCAL STORAGE
   ========================================================= */

function getStoredUsers() {

    try {

        const data =
            localStorage.getItem(
                "users"
            );


        if (!data) {

            return [];

        }


        const users =
            JSON.parse(data);


        return Array.isArray(users)
            ? users
            : [];

    }
    catch (error) {

        console.error(
            "Error loading users:",
            error
        );


        return [];

    }

}


/* =========================================================
   LOAD USERS
   ========================================================= */

function loadUsers(
    searchText = ""
) {


    const users =
        getStoredUsers();


    const search =
        searchText.toLowerCase();


    const filteredUsers =
        users.filter(
            function (user) {

                const name =
                    String(
                        user.name ||
                        user.fullName ||
                        ""
                    ).toLowerCase();


                const email =
                    String(
                        user.email ||
                        ""
                    ).toLowerCase();


                return (
                    name.includes(search) ||
                    email.includes(search)
                );

            }
        );


    updateStatistics(
        users
    );


    renderUsers(
        filteredUsers
    );

}


/* =========================================================
   UPDATE STATISTICS
   ========================================================= */

function updateStatistics(
    users
) {


    const total =
        document.getElementById(
            "totalUsers"
        );


    const registered =
        document.getElementById(
            "registeredUsers"
        );


    const latest =
        document.getElementById(
            "latestUser"
        );


    if (total) {

        total.textContent =
            users.length;

    }


    if (registered) {

        registered.textContent =
            users.length;

    }


    if (latest) {

        if (users.length === 0) {

            latest.textContent =
                "No users";

            return;

        }


        const sorted =
            [...users].sort(
                function (a, b) {

                    const dateA =
                        new Date(
                            a.createdAt ||
                            a.registeredAt ||
                            0
                        );

                    const dateB =
                        new Date(
                            b.createdAt ||
                            b.registeredAt ||
                            0
                        );

                    return dateB - dateA;

                }
            );


        const user =
            sorted[0];


        latest.textContent =
            getUserName(user);

    }

}


/* =========================================================
   RENDER USERS TABLE
   ========================================================= */

function renderUsers(
    users
) {


    const tbody =
        document.getElementById(
            "usersTableBody"
        );


    const empty =
        document.getElementById(
            "emptyUsers"
        );


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    if (users.length === 0) {

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


    users.forEach(
        function (user, index) {

            tbody.appendChild(
                createUserRow(
                    user,
                    index
                )
            );

        }
    );

}


/* =========================================================
   CREATE USER ROW
   ========================================================= */

function createUserRow(
    user,
    index
) {


    const row =
        document.createElement(
            "tr"
        );


    const name =
        getUserName(user);


    const email =
        user.email ||
        "No email";


    const id =
        user.id ||
        user.userId ||
        `USER-${index + 1}`;


    const registeredDate =
        formatDate(
            user.createdAt ||
            user.registeredAt
        );


    const status =
        user.status ||
        "Active";


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

                </div>


            </div>

        </td>


        <td>

            <span
                class="text-muted">

                ${escapeHTML(email)}

            </span>

        </td>


        <td>

            ${registeredDate}

        </td>


        <td>

            <span
                class="badge rounded-pill
                       ${getStatusClass(status)}">

                ${escapeHTML(status)}

            </span>

        </td>


        <td>

            <div
                class="d-flex
                       justify-content-end
                       gap-1">


                <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    title="View User"
                    onclick="viewUser('${escapeAttribute(id)}')">

                    <i class="bi bi-eye"></i>

                </button>


                <button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    title="Delete User"
                    onclick="askDeleteUser('${escapeAttribute(id)}')">

                    <i class="bi bi-trash"></i>

                </button>


            </div>

        </td>

    `;


    return row;

}


/* =========================================================
   GET USER NAME
   ========================================================= */

function getUserName(
    user
) {

    return (
        user.name ||
        user.fullName ||
        user.username ||
        "User"
    );

}


/* =========================================================
   VIEW USER
   ========================================================= */

function viewUser(
    userId
) {


    const users =
        getStoredUsers();


    const user =
        users.find(
            function (item, index) {

                const id =
                    item.id ||
                    item.userId ||
                    `USER-${index + 1}`;


                return String(id) ===
                    String(userId);

            }
        );


    if (!user) {

        showMessage(
            "User not found.",
            "danger"
        );

        return;

    }


    setText(
        "modalUserName",
        getUserName(user)
    );


    setText(
        "modalUserEmail",
        user.email ||
        "No email"
    );


    setText(
        "modalUserId",
        user.id ||
        user.userId ||
        "N/A"
    );


    const status =
        user.status ||
        "Active";


    const statusElement =
        document.getElementById(
            "modalUserStatus"
        );


    if (statusElement) {

        statusElement.textContent =
            status;


        statusElement.className =
            "fw-semibold " +
            (
                String(status).toLowerCase() ===
                "active"
                    ? "text-success"
                    : "text-danger"
            );

    }


    setText(
        "modalUserDate",
        formatDate(
            user.createdAt ||
            user.registeredAt
        )
    );


    const modalElement =
        document.getElementById(
            "userDetailsModal"
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

function askDeleteUser(
    userId
) {


    selectedUserId =
        userId;


    const modalElement =
        document.getElementById(
            "deleteUserModal"
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
   DELETE USER
   ========================================================= */

function deleteSelectedUser() {


    if (!selectedUserId) {

        return;

    }


    const users =
        getStoredUsers();


    const updatedUsers =
        users.filter(
            function (user, index) {

                const id =
                    user.id ||
                    user.userId ||
                    `USER-${index + 1}`;


                return String(id) !==
                    String(selectedUserId);

            }
        );


    if (
        updatedUsers.length ===
        users.length
    ) {

        showMessage(
            "User not found.",
            "danger"
        );

        return;

    }


    try {

        localStorage.setItem(
            "users",
            JSON.stringify(
                updatedUsers
            )
        );

    }
    catch (error) {

        console.error(
            error
        );


        showMessage(
            "Unable to delete user.",
            "danger"
        );

        return;

    }


    /*
     * Close modal
     */

    const modalElement =
        document.getElementById(
            "deleteUserModal"
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


    selectedUserId =
        null;


    /*
     * Reload table
     */

    loadUsers();


    showMessage(
        "User deleted successfully.",
        "success"
    );

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(
    value
) {


    if (!value) {

        return "Not available";

    }


    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "Not available";

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   STATUS CLASS
   ========================================================= */

function getStatusClass(
    status
) {


    if (
        String(status).toLowerCase() ===
        "active"
    ) {

        return "bg-success-subtle text-success";

    }


    if (
        String(status).toLowerCase() ===
        "blocked"
    ) {

        return "bg-danger-subtle text-danger";

    }


    return "bg-secondary-subtle text-secondary";

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
