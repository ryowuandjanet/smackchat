<template>
  <q-page class="flex column">
    <q-banner class="text-center bg-grey-4">
      User is offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message 
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false" />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width">
          <q-input 
            v-model="newMessage" 
            bg-color="white" 
            outlined 
            rounded 
            label="Message" 
            dense>

            <template v-slot:after>
              <q-btn
              @click="sendMessage"
              round
              dense
              flat
              color="white"
              icon="send" />
            </template>

          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>
<script>
  export default {
    data() {
      return {
        newMessage: '',
        messages: [
          {
            text: 'Hello Ryowu',
            from: 'me'
          },
          {
            text: 'Hello Janet',
            from: 'them'
          },
          {
            text: 'Today is happy day',
            from: 'me'
          }
        ]
      }
    },
    methods: {
      sendMessage() {
        this.messages.push({
          text: this.newMessage,
          from: 'me'
        })
      }
    }
  }
</script>
<style>
</style>
