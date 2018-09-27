<template>
  <div>
    <h1>Team {{ type }}</h1>
    <ul>
      <li
        v-for="(member, index) in team"
        :key="member.id"
      >
        {{ member.name }}
        <button @click="removeFromTeam({type, index, memberId:member.id})">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    team() {
      return this.type === 'A' ? this.$store.state.teamA : this.$store.state.teamB;
    },
  },
  methods: {
    // removeFromTeam(type, index, memberId) {
    //   this.$store.dispatch('removeFromTeam', { type, index, memberId });
    // },
    ...mapActions(['removeFromTeam']),
  },
};
</script>

<style lang="css">
</style>
