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
            title: "1. Vad är flow?",
            body: [
              "Flow är att state of mind / sinnestillstånd som kännetecknas av att en individ är helt uppslukad av en aktivitet och går bortom sin reflekterande självmedvetenhet samtidigt som personen upplever en djup känsla av kontroll."
            ]
          },
          {
            title: "2. Mihalys tre faktorer",
            body: [
              "Forskaren säger:",
            ],
            ul: [
              "1. Definiera aktiviteten",
              "2. Dela upp mål",
              "3. Ge dig själv feedback",

            ]
          },
          {
            title: "3. Definiera aktiviteten",
            body: [
              "För att komma igång med din session behöver du först veta och definiera aktiviteten.",
              "Tänk efter... Vad vill du åstadkomma?",
          ]
          },
          {
            title: "4. Dela upp mål",
            body: [
              "När du vet vad du vill åstadkomma är det möjligt att det känns överväldigande. Då är det bra att dela upp aktiviteten i mindre, nåbara mål.",
              "Vilka delmål ser du med din aktivitet?"
            ]
          },
          {
            title: "5. Ge dig själv feedback",
            body: [
              "Det är viktigt att du skapar en feedback-loop för dig själv, så att du vet när du kommer närmare ditt mål.",
              "Exv. ?",
              "Fundera: Hur kan du ge dig själv denna feedback?"
            ]
          },
          {
            title: "6. Skapa ditt flow",
            body: [
              "För att ge dig själv de bästa förutsättningarna fär att uppnå flow måste du lära känna din egen studieteknik och studiemiljö.",
              "Därför kommer du nu få möjlighet att ställa in ljus och ljud i FlowCube.",
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