/* =========================================
   MEDINFO PORTAL
   ADMIN USER MANAGEMENT
========================================= */


/* =========================================
   GET USERS
========================================= */

function getAdminUsers() {

    return JSON.parse(
        localStorage.getItem("medicinePortalUsers")
    ) || [];

}


/* =========================================
   SAVE USERS
========================================= */

function saveAdminUsers(users) {

    localStorage.setItem(
        "medicinePortalUsers",
        JSON.stringify(users)
    );

}


/* =========================================
   DISPLAY USERS
========================================= */

function displayUsers(users = getAdminUsers()) {

    const tableBody =
        document.getElementById("userTableBody");

    const emptyState =
        document.getElementById("emptyUserState");

    const count =
        document.getElementById("userCount");


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    /* Update total count */

    if (count) {

        count.textContent =
            users.length;

    }


    /* Empty state */

    if (users.length === 0) {

        if (emptyState) {

            emptyState.style.display =
                "block";

        }

        return;

    }


    if (emptyState) {

        emptyState.style.display =
            "none";

    }


    /* Create rows */

    users.forEach(
        function(user, index) {

            const row =
                document.createElement("tr");


            const userName =
                user.name ||
                user.username ||
                "User";


            const email =
                user.email ||
                "Not available";


            const registeredDate =
                user.createdAt ||
                user.registeredAt ||
                "-";


            const role =
                user.role ||
                "User";


            row.innerHTML = `

                <td class="px-3">
                    ${index + 1}
                </td>


                <td>

                    <div class="d-flex
                                align-items-center">

                        <div
                            class="rounded-circle
                                   bg-primary
                                   text-white
                                   d-flex
                                   align-items-center
                                   justify-content-center
                                   me-2"
                            style="
                                width:40px;
                                height:40px;
                            ">

                            <i class="bi bi-person-fill"></i>

                        </div>


                        <strong>
                            ${escapeUserHTML(userName)}
                        </strong>

                    </div>

                </td>


                <td>

                    ${escapeUserHTML(email)}

                </td>


                <td>

                    <span class="badge bg-secondary">

                        ${escapeUserHTML(role)}

                    </span>

                </td>


                <td>

                    <small>

                        ${escapeUserHTML(
                            registeredDate
                        )}

                    </small>

                </td>


                <td class="text-center">

                    <span
                        class="badge bg-success">

                        Active

                    </span>

                </td>


                <td class="text-center">

                    <button
                        class="btn btn-sm btn-danger"
                        onclick="openDeleteUserModal(${index})"
                        title="Delete User">

                        <i class="bi bi-trash"></i>

                    </button>

                </td>

            `;


            tableBody.appendChild(row);

        }
    );

}


/* =========================================
   SEARCH USERS
========================================= */

function searchUsers() {

    const searchInput =
        document.getElementById("userSearch");


    if (!searchInput) {
        return;
    }


    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    const users =
        getAdminUsers();


    const filteredUsers =
        users.filter(
            function(user) {

                const name =
                    (
                        user.name ||
                        user.username ||
                        ""
                    ).toLowerCase();


                const email =
                    (
                        user.email ||
                        ""
                    ).toLowerCase();


                return (
                    name.includes(search) ||
                    email.includes(search)
                );

            }
        );


    displayUsers(
        filteredUsers
    );

}


/* =========================================
   DELETE USER
========================================= */

let userToDelete = null;


function openDeleteUserModal(index) {

    const users =
        getAdminUsers();


    if (!users[index]) {
        return;
    }


    userToDelete =
        index;


    const userName =
        users[index].name ||
        users[index].username ||
        "this user";


    const nameElement =
        document.getElementById(
            "deleteUserName"
        );


    if (nameElement) {

        nameElement.textContent =
            userName;

    }


    const modalElement =
        document.getElementById(
            "deleteUserModal"
        );


    if (modalElement) {

        const modal =
            new bootstrap.Modal(
                modalElement
            );

        modal.show();

    }

}


/* =========================================
   CONFIRM DELETE
========================================= */

function deleteAdminUser() {

    if (
        userToDelete === null
    ) {
        return;
    }


    const users =
        getAdminUsers();


    if (!users[userToDelete]) {
        return;
    }


    users.splice(
        userToDelete,
        1
    );


    saveAdminUsers(
        users
    );


    userToDelete = null;


    /* Close modal */

    const modalElement =
        document.getElementById(
            "deleteUserModal"
        );


    if (modalElement) {

        const modal =
            bootstrap.Modal
                .getInstance(
                    modalElement
                );


        if (modal) {

            modal.hide();

        }

    }


    /* Refresh table */

    displayUsers();

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeUserHTML(value) {

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


        /* Load users */

        displayUsers();


        /* Search */

        const searchInput =
            document.getElementById(
                "userSearch"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchUsers
            );

        }


        /* Delete button */

        const deleteButton =
            document.getElementById(
                "confirmDeleteUser"
            );


        if (deleteButton) {

            deleteButton.addEventListener(
                "click",
                deleteAdminUser
            );

        }

    }
);
