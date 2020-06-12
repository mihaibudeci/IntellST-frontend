<template>
  <v-card
          class="mx-auto"
          max-width="444"
          outlined
  >
    <v-form>
    <v-list-item two-line>
      <v-list-item-content>
        <div class="row" style="height: 70px;">
          <div class="col-8">
            <v-list-item-subtitle class="mt-3">Set maximum allowed temperature C°</v-list-item-subtitle>
          </div>
            <v-col cols="3">
              <v-text-field
                      type="number"
                      v-model="temperature"
                      name="temperature"
                      :rules="[rules.required,rules.number,rules.boundaries]"
                      step=".1"
                      label=""
                      suffix="°"
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
                    type="number"
                    required
                    size="2"
                    label=""
                    outlined
                    dense
            ></v-text-field>
          </v-col>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-col class="text-center">
          <v-btn type="submit" color="red">Save</v-btn>
      </v-col>
    </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
  // import { ValidationProvider, ValidationObserver } from 'vee-validate';

  export default {
    data () {
      return {
        temperature: null,
        rules: {
          required: value => !!value || 'Invalid data.',
          boundaries: value => Number(value) <= 35 && Number(value) >= 38 || 'the value must be between 35 and 38',
        },
      }
    },
  }
</script>