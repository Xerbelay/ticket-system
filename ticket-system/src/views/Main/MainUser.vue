<template>
  <v-container>
    <v-row justify="center">
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab :value="1">Форма</v-tab>
        <v-tab :value="2">История тикетов</v-tab>
      </v-tabs>
    </v-row>
    <v-window v-model="tab">
      <v-window-item :value="1">
        <v-container fluid>
          <v-row>
            <v-sheet width="300" class="mx-auto">
              <v-form @submit.prevent>
                <br>
                <v-text-field v-model="summary" label="Тема тикета" />
                <v-textarea v-model="content" label="Описание проблемы" />
                <v-select v-model="priority" label="Приоритет" :items="['LOW', 'MED', 'HIGH']" />
                <v-btn @click="addTicket" type="submit" block class="mt-2">Создать тикет</v-btn>
              </v-form>
            </v-sheet>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="2">
        <v-container fluid>
          <v-row class="ticket-pos">
            <div v-for="item in ticket">
              <div class="ticket">
                <p>{{'Тема: ' + item.summary }}</p>
                <p>{{ 'Содержание: ' + item.content }}</p>
                <p>Важность: <span :style="{ 'color': item.priority == 'HIGH' ? 'red' : item.priority == 'MED' ? 'orange' : 'grey' }">{{item.priority}}</span></p>
                <p>{{ 'Пользователь: ' + item.from }}</p>
                <p>Статус: <span :style="{ 'color': item.status == 'DONE' ? 'green' : 'red' }">{{ item.status }}</span></p>
                <p>{{ 'Дата создания: ' + item.create_date }}</p>
                <hr class="hr" v-if="item.status == 'DONE'">
                <p v-if="item.status == 'DONE'">{{ 'Ответ: ' + item.answ }}</p>
                <p v-if="item.status == 'DONE'">{{ 'Дата ответа: ' + item.update_date }}</p>
              </div>
            </div>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-container>
</template>
  
<script>


export default {
  name: 'MainUser',

  components: {

  },

  data: () => ({
    tab: 1,
    summary: '',
    content: '',
    priority: '',
  }),
  computed: {
    ticket(){
      return this.$store.state.ticket.tickets
    }
  },
  methods:{
    addTicket(){
      const newTicket = {
        summary: this.summary,
        content: this.content,
        priority: this.priority,
        from: this.$store.state.user.curUser.fullname,
        status: 'UNDONE',
        create_date: new Date().toLocaleString(),
      };
      this.ticket.unshift(newTicket);
      this.summary = '';
      this.content = '';
      this.priority = '';
   }
  }
}
</script>

<style>
  .ticket-pos{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
  }
  .ticket{
    width: 550px;
    height: 216px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid black;
    border-radius: 4px;
    margin: 10px 0 10px 0;
    padding: 10px;
  }
  .hr{
    width: 100%;
  }
</style>