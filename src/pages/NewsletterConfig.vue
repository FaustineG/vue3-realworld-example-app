<template>
  <div class="newsletter-page">
    <h2>Create your blog newsletter</h2>
    <fieldset>
      <fieldset class="form-group">
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          placeholder="Title"
        >
      </fieldset>
      <fieldset class="form-group">
        <textarea
          v-model="form.content"
          type="text"
          class="form-control"
          placeholder="Contenu"
        />
      </fieldset>
      <fieldset class="form-group">
        <div
          v-for="email in form.mailingList"
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
      </fieldset>
    </fieldset>
    <button @click="save">
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface NewsletterConfigForm {
    title: string,
    content: string,
    mailingList: string[]
}

const form: NewsletterConfigForm = reactive({
  title: '',
  content: '',
  mailingList: [],
})

const newEmail = ref('')
const addNewEmail = () => {
  if (!form.mailingList.includes(newEmail.value)) { form.mailingList.push(newEmail.value) }
  newEmail.value = ''
}
const removeEmail = (email: string) => {
  form.mailingList = form.mailingList.filter(e => e !== email)
}
const save = () => {
  console.log('On save', form)
  form.content = ''
  form.title = ''
  form.mailingList = []
}
</script>

<style>
.newsletter-page {
    padding: 10%;
}

.email-line {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
}

.email-line p{
    width: 200px;
}
</style>
