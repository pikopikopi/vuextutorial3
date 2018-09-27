<template>
  <div>
    <h1>Students - Total is {{ studetCount }}</h1>
    <ul>
      <li
        v-for="(student, index) in students"
        :key="student.id"
      >
        {{ student.name }}
        <i>{{ student.games.length }} games he plays</i>
        <button
          :disabled="student.selected"
          @click="addTeamMember({type:'A', index})"
        >
          Team A
        </button>
        <button
          :disabled="student.selected"
          @click="addTeamMember({type:'B', index})"
        >
          Team B
        </button>
      </li>
    </ul>
    <hr>
    <TeamComponent type="A">Team A</TeamComponent>
    <TeamComponent type="B">Team B</TeamComponent>
    <InfoComponent/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import TeamComponent from './TeamComponent.vue';
import InfoComponent from './InfoComponent.vue';

export default {
  components: { TeamComponent, InfoComponent },
  computed: {
    // students() {
    //   return this.$store.state.students;
    // },
    ...mapState(['students']),
    ...mapGetters(['studetCount']),
  },
  created() {
    this.$store.dispatch('getStudents');
  },
  methods: {
    // addTeamMember(type, index) {
    //   this.$store.dispatch('addTeamMember', { type, index });
    // },
    ...mapActions(['addTeamMember']),
  },
};
</script>

<style>
</style>
