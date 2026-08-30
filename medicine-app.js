/* =====================================================
   MEDICINE LIST APPLICATION
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("medicineSearch");
    const category = document.getElementById("categoryFilter");
    const reset = document.getElementById("resetFilters");
    const reset2 = document.getElementById("noResultReset");

    populateCategories();
    renderMedicines(getAllMedicines());

    search.addEventListener("input", filterMedicines);
    category.addEventListener("change", filterMedicines);

    reset.addEventListener("click", clearFilters);

    if (reset2) {
        reset2.addEventListener("click", clearFilters);
    }
});


function populateCategories() {

    const select = document.getElementById("categoryFilter");

    if (!select) return;

    const categories = [
        ...new Set(
            getAllMedicines()
                .map(m => m.category)
                .filter(Boolean)
        )
    ].sort();

    categories.forEach(category => {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        select.appendChild(option);
    });
}


function filterMedicines() {

    const search =
        document.getElementById("medicineSearch")
            .value
            .trim()
            .toLowerCase();

    const category =
        document.getElementById("categoryFilter")
            .value;

    const medicines = getAllMedicines();

    const filtered = medicines.filter(medicine => {

        const text = [
            medicine.name,
            medicine.genericName,
            medicine.category,
            medicine.manufacturer,
            ...(medicine.uses || [])
        ]
        .join(" ")
        .toLowerCase();

        const matchesSearch =
            !search || text.includes(search);

        const matchesCategory =
            category === "all" ||
            medicine.category === category;

        return matchesSearch && matchesCategory;
    });

    renderMedicines(filtered);
}


function renderMedicines(medicines) {

    const grid =
        document.getElementById("medicineGrid");

    const loading =
        document.getElementById("medicineLoading");

    const empty =
        document.getElementById("noMedicines");

    const count =
        document.getElementById("medicineResultCount");

    loading.classList.add("d-none");
    grid.classList.remove("d-none");

    grid.innerHTML = "";

    count.textContent =
        `${medicines.length} medicine${medicines.length !== 1 ? "s" : ""} found`;

    if (!medicines.length) {

        grid.classList.add("d-none");
        empty.classList.remove("d-none");

        return;
    }

    empty.classList.add("d-none");

    medicines.forEach(medicine => {

        const col = document.createElement("div");

        col.className =
            "col-xl-4 col-md-6";

        const image =
            medicine.image ||
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";

        const uses =
            (medicine.uses || [])
                .slice(0, 2)
                .join(" • ");

        col.innerHTML = `

        <div class="medicine-card h-100">

            <div class="medicine-image-wrap">

                <img
                    src="${escapeHTML(image)}"
                    alt="${escapeHTML(medicine.name)}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'">

                <span class="medicine-category">
                    ${escapeHTML(medicine.category || "General")}
                </span>

            </div>

            <div class="p-4">

                <div class="d-flex justify-content-between gap-2">

                    <div>

                        <h4 class="fw-bold mb-1">
                            ${escapeHTML(medicine.name)}
                        </h4>

                        <p class="text-muted small mb-2">
                            ${escapeHTML(medicine.genericName || "")}
                        </p>

                    </div>

                    <span class="medicine-type">
                        ${escapeHTML(medicine.type || "Medicine")}
                    </span>

                </div>

                <p class="small text-muted">
                    <strong>Uses:</strong>
                    ${escapeHTML(uses)}
                </p>

                <p class="small text-muted">
                    <strong>Manufacturer:</strong>
                    ${escapeHTML(medicine.manufacturer || "Not specified")}
                </p>

                <a
                    href="medicine-details.html?id=${encodeURIComponent(medicine.id)}"
                    class="btn btn-primary w-100">

                    View Complete Details
                    <i class="bi bi-arrow-right ms-1"></i>

                </a>

            </div>

        </div>
        `;

        grid.appendChild(col);
    });
}


function clearFilters() {

    document.getElementById("medicineSearch").value = "";
    document.getElementById("categoryFilter").value = "all";

    renderMedicines(getAllMedicines());
}


function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value ?? "";

    return div.innerHTML;
}
