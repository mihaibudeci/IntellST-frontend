<template>
  <v-card
          class="mx-auto"
          max-width="444"
          outlined
  >
    <v-list-item two-line>
      <v-list-item-content>
        <div class="row" style="height: 70px;">
          <div class="col-8">
            <v-list-item-subtitle class="mt-3">Set maximum allowed temperature C</v-list-item-subtitle>
          </div>
            <v-col cols="3">
              <v-text-field
                      label=""
                      outlined
                      dense
              ></v-text-field>
            </v-col>
          </div>
        <div class="row" style="height: 80px;">
          <div class="col-8">
            <v-list-item-subtitle class="mt-3">Set restriction period (days)</v-list-item-subtitle>
          </div>
          <v-col cols="3">
            <v-text-field
                    label=""
                    outlined
                    dense
            ></v-text-field>
          </v-col>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>