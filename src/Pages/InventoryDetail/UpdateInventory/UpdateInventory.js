import React from 'react';

const UpdateInventory = () => {
    const handleUpdateProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedProduct = {name,email};

        // send data to the server

        fetch('http://localhost:5000/user', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedProduct),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert('users added succesfully!!!')
  event.target.reset();
})
.catch((error) => {
  console.error('Error:', error);
});

    }
    return (
        <div>
            <form onSubmit={handleUpdateProduct}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="text" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default UpdateInventory;