import { defineStore } from 'pinia'

interface NewsletterConfigForm {
  title: string
  content: string
  mailingList: string[]
}

export const useNewsletterStore = defineStore('newsletter', {
  state: (): NewsletterConfigForm => {
    return {
      title: '',
      content: '',
      mailingList: [],
    }
  },
  actions: {
    resetStore () {
      this.title = ''
      this.content = ''
      this.mailingList = []
    },
    saveForm () {
      console.log('SAVING', this.title, this.content, this.mailingList)
      this.resetStore()
    },
  },
})
