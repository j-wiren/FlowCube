<template>
  <v-app>
    <v-main>
      <div class="scroll-container d-flex overflow-x-scroll">
        <info-dump v-for="(infoItem, index) in info"
          :key="index"
          :info="infoItem"
        >
        </info-dump>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import InfoDump from '@/components/InfoDump.vue'
  export default ({
    components: { 
      InfoDump
    },
    data() {
      return {
        info: [
          {
            title: "1. What is Flow?",
            body: [
              "Flow is a state of mind characterized by an individual only focusing on performing an activity and as a result losing grasp of what happens around it. This results in high levels of performance and a strong sense of control."   
            ]
          },
          {
            title: "2. Mihalys three factors",
            body: [
              "Research says that there are three conditions for achieving Flow:",
            ],
            ul: [
              "1. Defining the activity",
              "2. Dividing it into smaller tasks",
              "3. Allowing for feedback that progress is being made",

            ]
          },
          {
            title: "3. Definie the activity",
            body: [
              "To get started with your session, you first need to understand and define the activity.",
              "Ask yourself... What to you want to accomplish?"
            ]
          },
          {
            title: "4. Divide it into smaller tasks",
            body: [
              "When you know what you want to accomplish, it can feel overwhelming. It's good to then divide the activity into smaller, achievable goals.",
              "What milestones do you see with your activity?"
            ]
          },
          {
            title: "5. Allow for feedback that progress is being made",
            body: [
              "It is important that you create a feedback loop for yourself, so that you know when you are getting closer to your goal.",
              "For example: if you're stuck, check back on the smaller tasks you made and start on one of those.",
              "Think about how giving feedback helps you with your activity!"
            ]
          },
          {
            title: "6. Create you Flow",
            body: [
              "In order to give yourself the best conditions for achieving flow, you must get to know your own study technique and study environment.",
              "Therefore, you will now have the opportunity to set light and sound in FlowCube."
            ],
            lastPage: true,
          },
        ]
      }
    },
  })
</script>

<style>
 /* Hide scrollbar for Chrome, Safari and Opera */
.scroll-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scroll-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>