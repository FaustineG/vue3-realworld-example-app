<script setup lang="ts">
import { toRefs } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps<{ mailingList: string[] }>()
const { mailingList } = toRefs(props)
const emit = defineEmits(['update:mailingList'])

const { value: newEmail, errorMessage: newEmailErrorMessage, meta } = useField<string>('email', 'email')
const addNewEmail = () => {
  if (!mailingList.value.includes(newEmail.value) && meta.valid) {
    emit('update:mailingList', [...mailingList.value, newEmail.value])
  }
  newEmail.value = ''
}
const removeEmail = (email: string) => {
  emit('update:mailingList',
    mailingList.value.filter(e => e !== email),
  )
}
</script>

<template>
  <div class="email-list">
    <div
      v-for="email in mailingList"
      :key="email"
      class="email-line"
    >
      <p>{{ email }}</p>
      <button @click="() => removeEmail(email)">
        <i class="ion-trash-a" />
      </button>
    </div>
    <div class="email-line">
      <input
        v-model="newEmail"
        type="text"
        class="form-control"
        placeholder="Email"
      >
      <button @click="addNewEmail">
        <i class="ion-plus" />
      </button>
      <span class="error-message">{{ newEmailErrorMessage }}</span>
    </div>
  </div>
</template>

<style>
.email-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.email-line {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}

.email-line p {
  width: 200px;
}

.error-message{
  color:red;
}
</style>
