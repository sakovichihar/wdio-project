class HoverPromo {

  get promoButton() {
    return $('//a[@href="/promo"]');
  }

  get button() {
    return {
      'Статус': $('//ul[contains(@class, "dropdown-promo")]//a[@href="/status" and contains(normalize-space(.), "статусы")]')
      // 'Лотереи': $('//*[@class="main-bottom-line dropdown dropdown-promo"]//*[@href="/lottery"]'),
      // 'Кешбэк': $('//*[@class="main-bottom-line dropdown dropdown-promo"]//*[@href="/cashback"]'),
      // 'Новости': $('//*[@class="main-bottom-line dropdown dropdown-promo"]//*[@href="/news"]'),
      // 'Акции': $('//*[@class="main-bottom-line dropdown dropdown-promo"]//*[@href="/promotions"]'),
      // 'Бонусы': $('//*[@class="main-bottom-line dropdown dropdown-promo"]//*[@href="/bonus"]'),
      // 'Турнир': $('//*[@class="main-bottom-line dropdown dropdown-promo"]//*[@href="/tournaments"]'),
      // 'Пром': $('//*[@class="main-bottom-line dropdown dropdown-promo"]//*[@href="/tournaments"]'),
    };
  }

  async moveToPromoButton() {
    await this.promoButton.moveTo();
  }
}

module.exports = new HoverPromo();