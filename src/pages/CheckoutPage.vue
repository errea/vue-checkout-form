<template>
      <div :class="isCard ? '' : 'lg:h-screen'"
      class="container mx-auto p-6 grid grid-cols-1
      row-gap-12 lg:grid-cols-10 lg:col-gap-10 lg:pt-12">
      <Payment @handle-card="handleCard" @change-parent="handleAlert" :total="total"></Payment>
    </div>
</template>

import Payment from "../components/Payment";
<script>
export default {
  name: 'CheckoutPage',
  components: {
    Payment,
  },
  data() {
    return {
      items: [
        {
          title: 'Title 1',
          description: 'lorem impsu liwe',
          price: 1000,
        },
        {
          title: 'Title 2',
          description: 'lorem impsu liwe',
          price: 500,
        },
        {
          title: 'Title 3',
          description: 'lorem impsu liwe',
          price: 2000,
        },
      ],
      alertVisible: false,
      total: 0,
      isCard: false,
    };
  },

  mounted() {
    this.getTotal(this.items);
  },
  methods: {
    getTotal(items) {
      items.forEach((item) => {
        this.total += item.price;
      });
    },
    handleAlert() {
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 4000);
    },
    handleCard() {
      this.isCard = true;
    },
  },
};

</script>
