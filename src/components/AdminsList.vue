<template>
  <div class="px-10">
    <div>
      <table class="w-full">
        <thead>
          <tr class="py-4">
            <th class="py-4 px-4 text-start text-sm text-[#ACACAC]">ID</th>
            <th class="py-4 px-4 text-start text-sm text-[#ACACAC]">Photo</th>
            <th class="py-4 px-4 text-start text-sm text-[#ACACAC]">Name</th>
            <th class="py-4 px-4 text-start text-sm text-[#ACACAC]">Email</th>
            <th class="py-4 px-4 text-start text-sm text-[#ACACAC]">Phone</th>
            <!-- <th class="py-4 px-4 text-start text-sm text-[#ACACAC]">
              Enroll Number
            </th>
            <th class="py-4 text-start text-sm text-[#ACACAC]">
              Date of admission
            </th> -->
            <th class="py-4 text-start text-sm text-[#ACACAC]">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(admin, index) in admins" :key="admin.id" class="border">
            <td class="bg-white py-3 px-4">{{ index + 1 }}</td>
            <td class="bg-white py-3 px-4">
              <img :src="admin.profile_img" alt="" />
            </td>
            <td class="bg-white py-3 px-4">{{ admin.full_name }}</td>
            <td class="bg-white py-3 px-4">{{ admin.email }}</td>
            <td class="bg-white py-3 px-4">{{ admin.phone_number }}</td>
            <!-- <td class="bg-white py-3 px-4">{{ admin.enrollNumber }}</td>
            <td class="bg-white py-3 px-4">{{ admin.dateOfAdmission }}</td> -->
            <td class="bg-white py-3 px-4">
              <div class="flex gap-x-8">
                <span>Edit</span>
                <span>Delete</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const admins = ref([]);

const fetchAdmins = async () => {
  try {
    const api = await axios.get(
      "https://tour.touristan-bs.uz/v1/admins/list?limit=5&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTg5MjUyNTgsImlhdCI6MTcxODIwNTI1OCwiaXNzIjoiIiwicm9sZSI6InN1ZG8iLCJzdWIiOiIyZTljYTI3Ni01Nzk5LTRmMzQtYTBhNi05MzhmN2IwYTVjOGQifQ.vG377oKJy4IwE_tp8ob2CJXDRsRP3nAS_kMQkqRkQa0",
        },
      }
    );
    admins.value = api.data.users;
    console.log(admins.value);
  } catch (error) {
    console.error("Error fetching admins:", error);
  }
};

onMounted(fetchAdmins);
</script>

<style lang="scss" scoped></style>
