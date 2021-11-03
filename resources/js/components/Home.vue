<template>
  <v-app id="app">
    <v-main class="white">
      <v-app-bar color="deep-purple darken-4" dark>
        <v-toolbar-title class="headline">Glossier</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-badge
        bordered
        :color="netTotalValue != 0 ? 'success' : 'error'"
        :value="cartCount"
        :content="cartCount"
        overlap
      >
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        </v-badge>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Your Bag</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item v-for="item in itemsCart" :key="item.id" link>
            <v-list-item-icon>
              <v-img
                class="white--text align-end"
                height="30px"
                width="30px"
                :src="item.imageURL"
              >
              </v-img>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle
                >Item ~ {{ item.quantity }}</v-list-item-subtitle
              >
              <v-btn color="red" icon @click="removeProductFromCart(item.id)">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-card class="mx-auto" max-width="400" tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title v-if="netTotalValue != 0"
                >Net Total ~ $ {{ netTotalValue }}</v-list-item-title
              >
              <v-list-item-title v-if="netTotalValue == 0"
                >Cart is Empty!</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card tile v-if="netTotalValue != 0">
          <v-btn color="primary" class="ml-2 mt-2 mb-2 mr-2">
            <v-icon>mdi-cash-check</v-icon> &nbsp; Checkout
          </v-btn>
        </v-card>
      </v-navigation-drawer>

      <v-container fluid>
        <v-carousel height="450">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <v-row class="mt-5">
          <v-col cols="12" md="3" lg="3" sm="12">
            <v-card class="mx-auto" max-width="300" hover>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://5.imimg.com/data5/IX/XH/YY/SELLER-27424251/foundation-cream-500x500.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-0">
                Fair Foundation Cream
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>OEM/Third Party Manufacturer</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="
                    addToCart(
                      1,
                      'Fair Foundation Cream',
                      15,
                      'https://5.imimg.com/data5/IX/XH/YY/SELLER-27424251/foundation-cream-500x500.jpg'
                    )
                  "
                >
                  <v-icon>mdi-cart</v-icon> Add to Cart
                  <v-spacer></v-spacer> &nbsp; &nbsp; &nbsp;
                  <div>$15</div>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="3" lg="3" sm="12">
            <v-card class="mx-auto" max-width="300" hover>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://5.imimg.com/data5/MM/TF/VF/SELLER-34066355/oil-free-aloe-vera-foundation-500x500.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-0">
                White Aloe Vera Foundation Oil Free
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>SHRYOAN</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="
                    addToCart(
                      2,
                      'White Aloe Vera Foundation Oil Free',
                      30,
                      'https://5.imimg.com/data5/MM/TF/VF/SELLER-34066355/oil-free-aloe-vera-foundation-500x500.jpg'
                    )
                  "
                >
                  <v-icon>mdi-cart</v-icon> Add to Cart
                  <v-spacer></v-spacer> &nbsp; &nbsp; &nbsp;
                  <div>$30</div>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="3" lg="3" sm="12">
            <v-card class="mx-auto" max-width="300" hover>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://5.imimg.com/data5/ANDROID/Default/2021/1/CU/WC/PT/12957046/product-jpeg-500x500.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-0">
                New White Sunisa Foundation
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Natural Own Brand</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="
                    addToCart(
                      3,
                      'New White Sunisa Foundation',
                      25,
                      'https://5.imimg.com/data5/ANDROID/Default/2021/1/CU/WC/PT/12957046/product-jpeg-500x500.jpg'
                    )
                  "
                >
                  <v-icon>mdi-cart</v-icon> Add to Cart
                  <v-spacer></v-spacer> &nbsp; &nbsp; &nbsp;
                  <div>$25</div>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="3" lg="3" sm="12">
            <v-card class="mx-auto" max-width="300" hover>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://5.imimg.com/data5/SELLER/Default/2021/5/VU/KK/WQ/87636958/the-one-express-peach-perfector-fair-500x500.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-0">
                Peach Perfector Fair
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Natural Own Brand</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="
                    addToCart(
                      4,
                      'Peach Perfector Fair',
                      45,
                      'https://5.imimg.com/data5/SELLER/Default/2021/5/VU/KK/WQ/87636958/the-one-express-peach-perfector-fair-500x500.jpg'
                    )
                  "
                >
                  <v-icon>mdi-cart</v-icon> Add to Cart
                  <v-spacer></v-spacer> &nbsp; &nbsp; &nbsp;
                  <div>$45</div>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-snackbar
        v-model="snackbar"
        :multi-line="false"
        :color="snackColor"
        :right="snackBarRight"
        :bottom="true"
        timeout="1000"
      >
        {{ snackMessage }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>


<script>
import { store } from "./store/store";
import { mapState } from "vuex";
export default {
  name: "Home",
  data: () => {
    return {
      drawer: null,
      loading: true,
      search: null,
      overlay: true,
      allCartDetails: [],
      snackbar: false,
      snackColor: "",
      snackMessage: "",
      snackBarRight: false,
      itemsCart: [],
      netTotalValue: 0,
      cartCount:0,
      items: [
        {
          src: "https://image.freepik.com/free-vector/sale-banner-with-cosmetic-products-black-silk_107791-2095.jpg",
        },
        {
          src: "https://image.freepik.com/free-vector/sakura-cosmetics-bottles-advertising-banner-face-care_33099-1772.jpg",
        },
        {
          src: "https://c0.wallpaperflare.com/preview/849/848/984/makeup-cosmetics-beauty-brushes.jpg",
        },
        {
          src: "https://st4.depositphotos.com/1561359/22205/v/1600/depositphotos_222054366-stock-illustration-cosmetic-banner-ads-spray-bottle.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      cartDetails: (state) => state.cartDetails,
    }),

    getAllCartDetails() {
      return store.state.cartDetails;
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    addToCart(id, name, price, imageURL) {
      let that = this;
      store.state.cartDetails.push({
        id: id,
        name: name,
        price: price,
        imageURL: imageURL,
        quantity: 1,
      });

      let newArray = _.groupBy(store.state.cartDetails, "id");

      this.itemsCart = [];
      this.netTotalValue = 0;
      this.cartCount = 0;
      _.forEach(newArray, function (value, key) {
        let countQuantity = 0;
        _.forEach(value, function (valueSub, keySub) {
          // _.last(value[key]);
          console.log(value.length);
          that.netTotalValue += valueSub.price;
          if (key == valueSub.id) {
            countQuantity += valueSub.quantity;
          }

          if (value.length - 1 == keySub) {
            that.itemsCart.push({
              id: valueSub.id,
              name: valueSub.name,
              price: valueSub.price,
              imageURL: valueSub.imageURL,
              quantity: countQuantity,
            });
          }
        });
        that.cartCount += 1;
      });

      this.snackMessage = name + " Add To Cart";
      this.snackColor = "success";
      this.snackbar = true;
      console.log(this.itemsCart);
    },

    removeProductFromCart(productID) {
      let that = this;
      this.cartCount -= 1;
      let index = _.findIndex(that.itemsCart, { id: productID });

      if (this.cartCount == 0) {
        this.netTotalValue = 0;
      }else{
        this.netTotalValue -= that.itemsCart[index].price * that.itemsCart[index].quantity;
      }
      

      
      that.itemsCart.splice(index, 1);
    },
  },
};
</script>
