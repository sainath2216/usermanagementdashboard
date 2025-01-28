# USER MANAGEMENT DASHBOARD 
# REF IMAGE 
![Screenshot_20-11-2024_11443_localhost](https://github.com/user-attachments/assets/c05285ba-5243-487b-91c2-dae8f27676c1)



### Set Up Instructions

<details>
<summary>Click to view</summary>
  
- install npx create-react-app user-management-dashboard
- cd dashbaord
- Download dependencies by running `npm install`
- Start up the app using `npm start`
  
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities
- View: Display all users by fetching data from the '/users' endpoint.
- Add: Allow adding a new user by posting to the '/users' endpoint. (Note: JSONPlaceholder won't actually add the user, but will simulate a successful response.)
- Edit: Allow editing an existing user. This should involve fetching the current data for a user, allowing for edits, and then putting the updated data back via the API.
- Delete: Allow users to be deleted, by sending a delete request to the API.

</details>

<details>
<summary>User Interface</summary>
  
<br/>

- Display a list of users with details such as ID, First Name, Last Name, Email, and Department.
- Provide buttons or links to "Add", "Edit", and "Delete" users.
- A form to input details of a new user or edit details of an existing user.
</details>

 <details> 
<summary>Backend Interaction</summary>

<br/>

- Use JSONPlaceholder, a free online REST API that you can use for demonstration and test purposes.
- Specifically, use the '/users' endpoint to fetch and manipulate user data.

</details>

 <details> 
<summary>Error Handling</summary>
<br/>
  
- Handle scenarios where the API request might fail - show an error message to the user in such cases.

</details>

 <details> 
<summary>Guidelines</summary>

<br/>

- Your primary focus should be on functionality. However, a clean UI will be appreciated.
- You may use vanilla JavaScript or any JavaScript framework/library of your choice like React, Angular, Vue, etc.
- Consider using tools like Axios or Fetch API for HTTP requests.
- Ensure the solution is modular and scalable.
- Document any assumptions you make.
  </details>

<details>
<summary>Implementation Files</summary>
<br/>
  
- src/components/User/index.js
- src/components/User/index.js
- src/components/AddUser/index.js
- src/components/AddUser/index.js
- src/components/EditUser/index.js
- src/components/EditUser/index.js
- src/components/UserList/index.js
- src/components/UserList/index.js
- src/app.js
  
</details>


