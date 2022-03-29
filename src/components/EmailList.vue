<script setup lang="ts">
import { ref, toRefs } from 'vue'

const props = defineProps<{ mailingList: string[]}>()
const { mailingList } = toRefs(props)
const emit = defineEmits(['update:mailingList'])

const newEmail = ref('')
const addNewEmail = () => {
  if (!mailingList.value.includes(newEmail.value)) {
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
  <input
    v-model="newEmail"
    type="text"
    class="form-control"
    placeholder="Email"
    @keyup.enter="addNewEmail"
  >
</template>
