<template>
  <div id="app">
    <div class="des">
      <pre><h1>Nokia</h1><h2>Sign in to <br><Strong>Nokia Digital Site Twin</Strong></h2></pre>
    </div>
    <div class="staff-container">
      <h3>Nokia Group Staff Sign In</h3>
      <pre><button onclick="window.location.href='https://apportal.nokia.com/APPortalExt/Register.aspx'"><strong><i class="fa-solid fa-n"></i> Nokia Account </strong></button></pre>
      <p>Use this if you have a @nokia.com, @nokia-sbell.com, @nokia-<br>bell-labs.com or @bell-labs-consulting.com email address etc...</p>
    </div>
    <div class="container">
      <h3>Sign in</h3>
      <form>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <div class="checkbox-container">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Remember me</label>
        </div>
        <a href="#">Forgot password?</a>
        <button type="submit">Sign In</button>
        <button type="button" @click="handleSignIn">
          <i class="fab fa-google"></i> Sign in with Google
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoogleAuthComponent',
    methods: {
      handleSignIn() {
        this.$gAuth.signIn()
          .then(googleUser => {
            const profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  </script>

<style>
body {
  background-image: url("../public/nokia.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100vh;
  margin: 0;
  margin-left: 10px;
}
.des {
  color: white;
  text-align: left;
  justify-content: left;
}
.h1 {
  color: white;
  margin-bottom: 60px;
  font-weight: 600;
  transition: 0.5s;
}
.des h1:hover{
  -webkit-text-stroke: 2px white;
  color: transparent;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-container input[type="checkbox"] {
  margin-right: 5px;
}

button[type="submit"] {
  margin-top: 10px;
  padding: 10px;
  background-color: rgb(0, 0, 187);
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
}

.staff-container {
  background-color: rgb(0, 0, 156);
  color: #fff;
  border-color: black;
  border-radius: 10px;
  margin-bottom: 10px;
  display: inline-block;
  padding: 10px 20px;
}

.staff-container button {
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.staff-container p {
  margin-top: 10px;
  font-size: 14px;
  color: white;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
}

.google-btn:hover {
  background-color: #f1f1f1;
}

.google-btn i {
  margin-right: 8px;
  font-size: 16px;
}
</style>