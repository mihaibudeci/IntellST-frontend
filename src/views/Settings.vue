<template>
  <ValidationObserver ref="observer" class="mx-auto">
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
              <ValidationProvider rules="required|between:35,38" name="Temperature" v-slot="{ errors }">
              <v-text-field
                      v-model="temperature"
                      required
                      :error-messages="errors"
                      step=".1"
                      label=""
                      outlined
                      dense
              ></v-text-field>
              </ValidationProvider>
            </v-col>
          </div>
        <div class="row" style="height: 80px;">
          <div class="col-8">
            <v-list-item-subtitle class="mt-3">Set restriction period (days)</v-list-item-subtitle>
          </div>
          <v-col cols="3">
            <ValidationProvider rules="required|max:2" name="Days" v-slot="{ errors }">
            <v-text-field
                    v-model="days"
                    required
                    :error-messages="errors"
                    label=""
                    outlined
                    dense
            ></v-text-field>
            </ValidationProvider>
          </v-col>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-col class="text-center">
          <v-btn @click="submit" color="red">Save</v-btn>
      </v-col>
    </v-card-actions>
    </v-form>
  </v-card>
  </ValidationObserver>
</template>

<script>
  import { required, between, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: 'Empty field',
  })

  extend('max', {
    ...max,
    message: 'Invalid data',
  })

  extend('between', {
    ...between,
    message: 'Invalid data',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      days: '',
      temperature: '',
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      }
    }
  }
</script>