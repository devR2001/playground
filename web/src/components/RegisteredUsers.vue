<template>
    <div>
        <div class="overflow-x-auto w-full">
            <table class="table">
                <thead>
                    <tr>
                        <th>{{ $t("registeredUsers.name") }}</th>
                        <th>{{ $t("registeredUsers.age") }}</th>
                        <th>{{ $t("registeredUsers.userName") }}</th>
                        <th>{{ $t("registeredUsers.actions") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in userIsRegistered" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                                <div v-if="user.editing">
                                    <input v-model="user.firstName" class="input input-bordered input-secondary me-5" />
                                    <input v-model="user.lastName" class="input input-bordered input-secondary" />
                                </div>
                                <div v-else>
                                    <div class="font-bold">{{ user.firstName }}</div>
                                    <div class="text-sm opacity-50">{{ user.lastName }}</div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div v-if="user.editing">
                                <input v-model="user.age" class="input input-bordered input-secondary" />
                            </div>
                            <div v-else>
                                {{ user.age }} {{ $t("registeredUsers.years") }}
                                <br />
                                <span class="badge badge-ghost badge-sm">{{ $t("registeredUsers.actions") }} {{ user.birth
                                }}</span>
                            </div>

                        </td>
                        <td>
                            <div v-if="user.editing">
                                <input v-model="user.username" class="input input-bordered input-secondary" />
                            </div>
                            <div v-else>
                                {{ user.username }}
                            </div>
                        </td>
                        <th>
                            <button class="btn btn-success btn-xs me-5" @click="editUser(user)">{{ user.editing ?
                                $t("registeredUsers.save") :
                                $t("registeredUsers.edit") }}</button>
                            <button class="btn-xs btn btn-error" @click="deleteUser(user.id)">{{
                                $t("registeredUsers.delete") }}</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <button class="btn-xs btn btn-info" @click="adduser">{{ $t("registeredUsers.addUser") }}</button>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const userIsRegistered = ref([])

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:4000/users')
        const data = await response.json()
        userIsRegistered.value = data
        console.log('userIsRegistered', userIsRegistered.value);
    } catch (error) {
        console.error('Error:', error);
    }
})

const editUser = (user) => {
    user.editing = !user.editing;
};

const adduser = () => {
    router.push('/register-user');
}

const deleteUser = async (userId) => {
    try {
        const response = await fetch(`http://localhost:4000/users/${userId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            userIsRegistered.value = userIsRegistered.value.filter(user => user.id !== userId);
        } else {
            console.error('Failed to delete user');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
</script>
