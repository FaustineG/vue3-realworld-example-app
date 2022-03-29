<template>
  <div class="newsletter-page">
    <h2>Create your blog newsletter</h2>
    <Form
      class="newsletter-form"
      :validation-schema="validationSchema"
      @submit="save"
    >
      <Field
        v-model="formStore.title"
        name="title"
        :validate-on-change="true"
      />
      <ErrorMessage name="title" />
      <Field
        v-model="formStore.content"
        name="content"
        as="textarea"
        :validate-on-change="true"
      />
      <ErrorMessage name="content" />
      <EmailList v-model:mailingList="formStore.mailingList" />
      <ErrorMessage name="mailingList" />
      <button type="submit">
        Save
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { useNewsletterStore } from '../store/newsletter'
import EmailList from 'src/components/EmailList.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

const validationSchema = {
  title: 'required|alpha',
  content: 'required|alpha',
  mailingList: '',
}

const formStore = useNewsletterStore()

const save = () => {
  formStore.saveForm()
}

</script>

<style>
.newsletter-page {
  padding: 10%;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
