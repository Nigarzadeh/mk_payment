<template>
  <!-- The main container for the payment page -->
  <div class="background-container">
    <!-- Fluid container to make the layout responsive -->
    <v-container fluid>
      <!-- Centered row with the payment card information -->
      <v-row justify="center" align="center" class="mt-1">
        <v-col xs="12" sm="7" md="5" lg="4" justify="center" align="center">
          <v-card class="mx-auto pt-6" rounded>
            <!-- Millikart logo -->
            <v-img src="../assets/Millikart_logo.png" class="d-flex align-center justify-center"
              max-width="150px"></v-img>
            <!-- Dashed line separator -->
            <div class="dashed-line mt-4"></div>
            <v-row class="mt-2" align="center">
              <!-- Payment Inscription and Price -->
              <v-col>
                <v-flex xs12 sm6 md4 lg3 xl2>
                  <div class="d-flex  justify-space-around">
                    <div>
                      <h3 class="font-weight-medium">Amount payment</h3>
                      <small class="font-weight-light">ZARA black midi dress</small>
                    </div>
                    <div>
                      <h3 style="color: #0282CA;" class="text-right">$49</h3>
                      <small class="font-weight-light">USD/AZN 1,6999 </small>
                    </div>
                  </div>
                </v-flex>
              </v-col>
            </v-row>
            <!-- Dashed line separator -->
            <div class="dashed-line mt-4"></div>
            <v-card-text class="mx-4">
              <!-- Payment form -->
              <v-form class="mt-3" @submit.prevent="submitForm">
                <div class="mx-4">
                  <!-- Cardholder name input -->
                  <h3 class="font-weight-medium text-left">Card holder name</h3>
                  <v-text-field v-model="cardHolderName" placeholder="Name and Surname" variant="outlined"
                    class="v-text-field-margin" :rules="nameRules"></v-text-field>
                  <!-- Email input with validation -->
                  <h3 class="font-weight-medium text-left">Email</h3>
                  <v-text-field v-model="Email" placeholder="Email" variant="outlined" class="custom-border-color"
                    :rules="emailRules"></v-text-field>
                  <!-- Phone input with validation -->
                  <h3 class="font-weight-medium text-left">Phone</h3>
                  <v-text-field v-model="Phone" placeholder="+994 - xx  -  xxx - xx - xx" variant="outlined"
                    class="v-text-field-margin" :rules="phoneRules"></v-text-field>
                  <!-- Card information section -->
                  <div class="position-relative">
                    <h3 class="font-weight-medium text-left">Card information</h3>
                    <!-- Visa and MasterCard logo -->
                    <v-img src="../assets/visa_master.jpg" width="65px" class="img-logo"></v-img>
                  </div>
                  <!-- Card number input with validation -->
                  <v-text-field v-model="Cardnumber" placeholder="1234- 1234 - 1234 - 1234" hide-details="auto"
                    variant="outlined" class="v-text-field-margin" :rules="cardNumberRules"
                    append-inner-icon="mdi-credit-card"></v-text-field>
                  <!-- Row for expiry date and CVV -->
                  <v-row>
                    <v-col xs="12" sm="6" md="6" lg="6" class="pr-0">
                      <v-text-field v-model="Expirydate" placeholder="MM/YY" :rules="expiryDateRules"
                        variant="outlined"></v-text-field>
                    </v-col>

                    <v-col xs="12" sm="6" md="6" lg="6" class="pl-0">
                      <v-text-field v-model="cvv" placeholder="CVV" :rules="cvvRules" variant="outlined"></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <!-- Submit button -->
                <v-col class="d-flex justify-end">
                  <v-btn type="submit" color="#0282CA" class="py-5" block>Confirm payment</v-btn>
                </v-col>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PaymentPage',
  data() {
    return {
      cardHolderName: '',
      Email: '',
      Phone: '',
      Cardnumber: '',
      Expirydate: '',
      cvv: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /@/.test(v) || 'Please include an \'@\' in the email address',
      ],
      phoneRules: [
        v => !!v || 'Phone is required',
        v => /^\+\d{1,15}$/.test(v) || 'Please enter a \'+\' in front of the phone number',
      ],
      cardNumberRules: [
        v => !!v || 'Card number is required',
        v => /^\d{16}$/.test(v) || 'Please enter the 16 digits of the card',
      ],
      expiryDateRules: [
        v => !!v || 'Expiry date is required',
        v => /^\d{2}\/\d{2}$/.test(v) || 'Enter a valid expiry date (MM/YY)',
      ],
      cvvRules: [
        v => !!v || 'CVV is required',
        v => /^\d{3}$/.test(v) || 'Enter a valid CVV (3 digits)',
      ],
    };
  },
  methods: {
    submitForm() {
      // Check if all required fields are filled
      if (
        this.cardHolderName &&
        this.Email &&
        this.Phone &&
        this.Cardnumber &&
        this.Expirydate &&
        this.cvv
      ) {
        // Handle form submission logic here

        // Redirect to the /access page
        this.$router.push('/access');
      } else {
        // Show an error message or handle incomplete form submission
        console.log('Please fill in all required fields.');
      }
    },
  },
};
</script>

<style scoped>
.img-logo {
  position: absolute;
  right: 0;
  bottom: 0;
}

.dashed-line {
  width: 100%;
  height: 1px;
  background: repeating-linear-gradient(45deg, #00478C, #00478C 5px, transparent 5px, transparent 10px);
}

.font-weight-medium {
  color:
    #444F5C;
}

.v-text-field-margin {
  margin-top: 10px;
}
</style>
