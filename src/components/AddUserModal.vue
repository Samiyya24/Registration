<template>
  <div>
    <!-- Form to create a new user -->
    <form @submit.prevent="createUser">
      <div>
        <label for="full_name">Full Name:</label>
        <input
          class="border border-blue-500 p-2 outline-none"
          type="text"
          id="full_name"
          v-model="newUser.full_name"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          class="border border-blue-500 p-2 outline-none"
          type="email"
          id="email"
          v-model="newUser.email"
          required
        />
      </div>
      <div>
        <label for="phone_number">Phone Number:</label>
        <input
          class="border border-blue-500 p-2 outline-none"
          type="text"
          id="phone_number"
          v-model="newUser.phone_number"
          required
        />
      </div>
      <div>
        <button type="submit">Create User</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const newUser = ref({
  full_name: "",
  email: "",
  phone_number: "",
});

const createUser = async () => {
  try {
    // Send POST request to server to create user
    const response = await axios.post(
      "https://tour.touristan-bs.uz/v1/users",
      newUser.value,
      {
        headers: {
          accept: "application/json",
          Authorization: "YOUR_AUTH_TOKEN_HERE",
        },
      }
    );
    console.log("New user created:", response.data);
    // Clear the form after successful creation
    newUser.value = {
      full_name: "",
      email: "",
      phone_number: "",
    };
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
</script>
