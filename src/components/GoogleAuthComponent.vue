<template>
    <div>
      <button @click="handleSignIn">Sign in with Google</button>
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
  
  <style scoped>
  button {
    background-color: #4285F4;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #357AE8;
  }
  </style>
  