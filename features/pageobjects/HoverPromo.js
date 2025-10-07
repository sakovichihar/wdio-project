class HoverPromo {

    get promoButton() {
    return $('//a[@href="/promo"]');
  }

    async moveToPromoButton() {
      await this.promoButton.moveTo();
  }
}

export default new HoverPromo();