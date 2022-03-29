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
        <EmailList v-model:mailingList="form.mailingList" />
      </fieldset>
    </fieldset>
    <button @click="save">
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
import { useNewsletterStore } from '../store/newsletter'
import EmailList from 'src/components/EmailList.vue'

const form = useNewsletterStore()

const save = () => {
  form.saveForm()
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
