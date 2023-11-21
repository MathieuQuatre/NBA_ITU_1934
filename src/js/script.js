document.addEventListener('DOMContentLoaded', function () {
    const nbaTableBody = document.querySelector('#nbaTable tbody');

    // Make a request to the API endpoint
    fetch('http://localhost:3000/api/nba-stats')
        .then(response => response.json())
        .then(data => {
            // Process the retrieved data and populate the table
            data.forEach(stat => {
                const row = nbaTableBody.insertRow();
                row.innerHTML = `
                    <td>${stat.CLASSEMENT}</td>
                    <td>${stat.JOUEUR}</td>
                    <td>${stat.EQUIPE}</td>
                    <td>${stat.M}</td>
                    <td>${stat.MJ}</td>
                    <td>${stat.PPM}</td>
                    <td>${stat.RPM}</td>
                    <td>${stat.PDPM}</td>
                    <td>${stat.MPM}</td>
                    <td>${stat.EFF}</td>
                    <td>${stat.FG}</td>
                    <td>${stat.LF}</td> <!-- Include LF -->
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching NBA stats:', error);
        });
});
