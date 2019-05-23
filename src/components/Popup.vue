<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">Add new project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" :rules="titleRules" prepend-icon="folder"></v-text-field>
          <v-textarea label="Information" v-model="content" :rules="infoRules" prepend-icon="edit"></v-textarea>
          <v-menu>
            <v-text-field
              slot="activator"
              :value="formattedDate"
              :rules="dateRules"
              label="Due date"
              prepend-icon="date_range"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn flat class="success mx-0 mt-3" @click="submit()">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length >= 3) || "Title must be greater than 3"
      ],
      infoRules: [
        v => !!v || "Information is required",
        v => (v && v.length >= 10) || "Information must be greter than 10"
      ],
      dateRules: [v => !!v || "Date is required"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content, this.formattedDate);
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>
