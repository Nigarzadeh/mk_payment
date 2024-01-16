<template>
    <!-- Main container for the Error page -->
    <div class="background-container">
        <v-container fluid>
            <!-- Centered row for the Error page content -->
            <v-row justify="center" align="center" class="mt-1">
                <v-col xs="12" sm="7" md="5" lg="4" justify="center" align="center">
                    <v-card class="mx-auto pt-6" rounded>
                        <!-- Millikart logo at the top of the card -->
                        <v-img src="../assets/Millikart_logo.png" class="d-flex align-center justify-center"
                            max-width="150px"></v-img>
                        <v-card-text class="mx-5">
                            <!-- Image for the Error Denied illustration -->
                            <v-img src="../assets/error.png"></v-img>
                            <p class="font-weight-medium text-center my-8">Oops.. Something went wrong!
                            </p>
                            <!-- Button to return to the payment page -->
                            <v-col class="d-flex justify-end">
                                <v-btn @click="returnToPayment" type="submit" color="#0282CA" class="py-5" block>Return to
                                    payment</v-btn>
                            </v-col>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
export default {
    name: 'ErrorPage',
    methods: {
        returnToPayment() {
            this.$router.go(-1);
        }
    }
}
</script>
  