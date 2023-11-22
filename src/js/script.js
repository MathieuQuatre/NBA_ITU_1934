document.addEventListener('DOMContentLoaded', function () {
    const nbaTableBody = document.querySelector('#nbaTable tbody');
    Parse.initialize('ZOeEUiWH0Hxdw2dG1pGdOXjZwAY9XjT7KfXIPlkB', 'tLkgSDi93nrRDnSabZFBha0sWgAk0ZBREFwyQ27S');
    Parse.serverURL = 'https://parseapi.back4app.com';


    // Make a request to the Cloud Code function using Parse.Cloud.run
    Parse.Cloud.run("getNBAStats")
    .then(response => response.result)  // Access the 'result' property
    .then(data => {
        // Log the structure of the data
        console.log('Received data:', data);

        // Check if data is an array
        if (Array.isArray(data)) {
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
                    <td>${stat.LF}</td> <!-- Add LF column -->
                `;
            });
        } else {
            console.error('Data is not an array:', data);
        }
    })
    .catch(error => {
        console.error('Error fetching NBA stats:', error);
    });
});
