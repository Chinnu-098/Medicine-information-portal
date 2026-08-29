/* =====================================================
   MEDINFO PORTAL - MAIN SCRIPT
   File: js/script.js
   ===================================================== */


/* =====================================================
   DOM READY
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeNavbar();

    initializeScrollButton();

    initializePasswordToggle();

    initializeCurrentYear();

    initializeTooltips();

    initializeAlerts();

    initializeSmoothLinks();

    initializeMobileMenu();

});


/* =====================================================
   NAVBAR
   ===================================================== */

function initializeNavbar() {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar) {
        return;
    }


    function updateNavbar() {

        if (window.scrollY > 30) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    }


    updateNavbar();


    window.addEventListener(
        "scroll",
        updateNavbar
    );

}


/* =====================================================
   SCROLL TO TOP
   ===================================================== */

function initializeScrollButton() {

    let button =
        document.getElementById(
            "scrollToTop"
        );


    if (!button) {

        button =
            document.createElement("button");

        button.id =
            "scrollToTop";

        button.type =
            "button";

        button.innerHTML =
            '<i class="bi bi-arrow-up"></i>';

        button.setAttribute(
            "aria-label",
            "Scroll to top"
        );

        button.style.cssText = `
            position: fixed;
            right: 22px;
            bottom: 22px;
            width: 44px;
            height: 44px;
            border: none;
            border-radius: 50%;
            background: #2563eb;
            color: white;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            box-shadow: 0 8px 20px rgba(37,99,235,0.25);
            cursor: pointer;
        `;

        document.body.appendChild(button);

    }


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 350) {

                button.style.display =
                    "flex";

            } else {

                button.style.display =
                    "none";

            }

        }
    );


    button.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =====================================================
   PASSWORD SHOW / HIDE
   ===================================================== */

function initializePasswordToggle() {

    const buttons =
        document.querySelectorAll(
            "[data-password-toggle]"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const targetId =
                        button.getAttribute(
                            "data-password-toggle"
                        );


                    const input =
                        document.getElementById(
                            targetId
                        );


                    if (!input) {
                        return;
                    }


                    const icon =
                        button.querySelector("i");


                    if (
                        input.type ===
                        "password"
                    ) {

                        input.type =
                            "text";


                        if (icon) {

                            icon.className =
                                "bi bi-eye-slash";

                        }

                    } else {

                        input.type =
                            "password";


                        if (icon) {

                            icon.className =
                                "bi bi-eye";

                        }

                    }

                }
            );

        }
    );

}


/* =====================================================
   CURRENT YEAR
   ===================================================== */

function initializeCurrentYear() {

    const elements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    elements.forEach(
        function (element) {

            element.textContent =
                new Date().getFullYear();

        }
    );

}


/* =====================================================
   BOOTSTRAP TOOLTIPS
   ===================================================== */

function initializeTooltips() {

    if (
        typeof bootstrap ===
        "undefined"
    ) {

        return;

    }


    const tooltipElements =
        document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );


    tooltipElements.forEach(
        function (element) {

            new bootstrap.Tooltip(
                element
            );

        }
    );

}


/* =====================================================
   AUTO HIDE ALERTS
   ===================================================== */

function initializeAlerts() {

    const alerts =
        document.querySelectorAll(
            ".alert[data-auto-hide]"
        );


    alerts.forEach(
        function (alert) {

            const time =
                parseInt(
                    alert.getAttribute(
                        "data-auto-hide"
                    )
                ) || 4000;


            setTimeout(
                function () {

                    alert.style.transition =
                        "opacity 0.4s ease";

                    alert.style.opacity =
                        "0";


                    setTimeout(
                        function () {

                            alert.remove();

                        },
                        400
                    );

                },
                time
            );

        }
    );

}


/* =====================================================
   SMOOTH INTERNAL LINKS
   ===================================================== */

function initializeSmoothLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        }
    );

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

function initializeMobileMenu() {

    const navLinks =
        document.querySelectorAll(
            ".navbar .nav-link"
        );


    const navbarCollapse =
        document.querySelector(
            ".navbar-collapse"
        );


    if (
        !navbarCollapse ||
        typeof bootstrap ===
        "undefined"
    ) {

        return;

    }


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <
                        992 &&
                        navbarCollapse.classList.contains(
                            "show"
                        )
                    ) {

                        const collapse =
                            bootstrap.Collapse
                                .getInstance(
                                    navbarCollapse
                                );


                        if (collapse) {

                            collapse.hide();

                        }

                    }

                }
            );

        }
    );

}


/* =====================================================
   ACTIVE NAV LINK
   ===================================================== */

function setActiveNavLink() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const links =
        document.querySelectorAll(
            ".navbar .nav-link"
        );


    links.forEach(
        function (link) {

            const href =
                link.getAttribute("href");


            if (!href) {
                return;
            }


            const linkPage =
                href.split("/").pop();


            link.classList.remove(
                "active"
            );


            if (
                linkPage ===
                currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    setActiveNavLink
);


/* =====================================================
   UTILITY: SHOW MESSAGE
   ===================================================== */

function showMessage(
    elementId,
    text,
    type = "success"
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {

        alert(text);

        return;

    }


    element.className =
        `alert alert-${type}`;


    element.textContent =
        text;


    element.style.display =
        "block";


    element.scrollIntoView({

        behavior: "smooth",

        block: "nearest"

    });

}


/* =====================================================
   UTILITY: FORMAT DATE
   ===================================================== */

function formatDate(
    dateValue
) {

    if (!dateValue) {

        return "N/A";

    }


    const date =
        new Date(dateValue);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "N/A";

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


/* =====================================================
   UTILITY: ESCAPE HTML
   ===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement("div");


    div.textContent =
        String(value ?? "");


    return div.innerHTML;

}


/* =====================================================
   UTILITY: CAPITALIZE
   ===================================================== */

function capitalize(
    value
) {

    if (!value) {
        return "";
    }


    return String(value)
        .charAt(0)
        .toUpperCase() +
        String(value)
            .slice(1);

}


/* =====================================================
   LOGOUT CONFIRMATION
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const logoutButton =
            event.target.closest(
                "[data-confirm-logout]"
            );


        if (!logoutButton) {
            return;
        }


        const confirmed =
            confirm(
                "Are you sure you want to logout?"
            );


        if (!confirmed) {

            event.preventDefault();

        }

    }
);


/* =====================================================
   ONLINE / OFFLINE STATUS
   ===================================================== */

window.addEventListener(
    "offline",
    function () {

        console.log(
            "You are currently offline."
        );

    }
);


window.addEventListener(
    "online",
    function () {

        console.log(
            "Internet connection restored."
        );

    }
);
