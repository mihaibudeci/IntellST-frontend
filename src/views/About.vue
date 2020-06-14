<template>

		<v-flex xs12 sm7 offset-sm3>
		<v-container class="flex-direction: column " width="80%" >
				<v-card 	class="justify-content-center"  max-width="80%"  >
  <v-row justify="center">
		<v-toolbar dense class="error" height="80">
			<v-toolbar-content>
			<text-field>
			<h1>Info</h1>
	</text-field>
		</v-toolbar-content>
		</v-toolbar>
    <v-expansion-panels v-model="panel"
      :disabled="disabled"
      multiple>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header v-text="item.title"></v-expansion-panel-header>
        <v-expansion-panel-content >
					<text-field v-text="item.text"></text-field>
				</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
				
		</v-card>
		</v-container>
		</v-flex>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'People who have access !',
          text: 'Who has a fever less than 37.5 C WELCOME :)',
        },
				{
          title: 'Access is forbidden !',
          text: 'I say STOP !!! ;  Who has a fever higher than 37.5 C, GET OUT OF HERE !!!',
        },
				
				{
          title: 'Quarantine period',
          text: '14 days NOT TO SEE YOU HERE !!!',
        },

				{
          title: 'Data collection and storage',
          text: 'Face ID + High Temperature = Welcome to our database !!!',
        },

				{
          title: 'Face recognition',
          text: 'Say Cheese :)',
        },

				{
          title: 'Temperature measurement',
          text: 'Are you hot ?, let\'s check this out ;)',
        },

				{
          title: 'Administration',
          text: 'Dudes from UTM or Pentalog',
        },

				{
          title: 'Developers, big bosses !!!',
          text: 'WE ARE !!!',
        },
       
      ],
      
    }),
  }
</script>