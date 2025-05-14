function generateReport() {
    fetch('generate_report.php')
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                let reportContent = '<h3>User Report</h3><ul>';
                data.data.forEach((user) => {
                    reportContent += `<li>${user.name} - ${user.email}</li>`;
                });
                reportContent += '</ul>';
                document.getElementById('report-content').innerHTML = reportContent;
            } else {
                document.getElementById('report-content').innerHTML = '<p>No data found</p>';
            }
        })
        .catch((error) => console.error('Error:', error));
}
