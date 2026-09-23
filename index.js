// Initialize icons
        lucide.createIcons();


        // Destination search
        function searchDestination() {

            const input = document.getElementById("destination");
            const destination = input.value.trim();

            if (destination === "") {
                alert("Please enter a destination.");
                return;
            }

            document.getElementById("destinationName").textContent = destination;

            // Scroll to results
            document.getElementById("results").scrollIntoView({
                behavior: "smooth"
            });
        }


        // Press Enter to search
        document.getElementById("destination").addEventListener("keypress", function(event) {

            if (event.key === "Enter") {
                searchDestination();
            }

        });
