"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const dataTable = new simpleDatatables.DataTable("#customersDatatable", {
        columns: [
            // Disable sorting on the first column
            //{ select: [0], sortable: false },
        ],
    });

    // Add Bulk Actions Select & Bootstrap styles to the elements
    // in the header
    dataTable.on("datatable.init", function () {
        const select = document.getElementById("categoryBulkAction");
        const header = document.querySelector(".dataTable-top .dataTable-dropdown");

        header.prepend(select);

        const input = document.querySelector(".dataTable-input");
        input.classList.add("form-control", "form-control-sm");

        const dataTableSelect = document.querySelector(".dataTable-selector");
        dataTableSelect.classList.add("form-select", "form-select-sm");

        const dataTableContainer = document.querySelector(".dataTable-container");
        dataTableContainer.classList.add("border-0");
    });

    // Fade in after init
    dataTable.on("datatable.init", function (args) {
        document.getElementById("customersDatatable").closest(".preload-wrapper").classList.add("opacity-10");
    });
});
