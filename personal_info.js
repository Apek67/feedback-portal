function updatePersonalInfo() {
    const formData=new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);

    fetch('update_personal_info.php', {

        method: 'POST',
        body: formData,
    }) .then((response)=> response.json()) .then((data)=> {
        if (data.success) {
            alert(data.message);
        }

        else {
            alert('Error: ' + data.message);
        }
    }) .catch((error)=> console.error('Error:', error));
}