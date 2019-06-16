var app = new Vue({
  el: '#app',
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'socks',
      selectedVariant: 0,
      onSale: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          id: '2234',
          color: 'green',
          image: './assets/vmSocks-green-onWhite.jpg',
          quantity: 10
        },
        {
          id: '2235',
          color: 'blue',
          image: './assets/vmSocks-blue-onWhite.jpg',
          quantity: 0
        }
      ],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeToCart() {
      this.cart > 0 ? (this.cart -= 1) : (this.cart = 0)
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    }
  }
})
