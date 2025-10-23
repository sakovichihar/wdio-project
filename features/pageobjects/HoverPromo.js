class HoverPromo {

  //здеся я храню все локаторы для нажатия кнопок
  get button() {
    return {
      'Промо': '//a[@href="/promo"]',
      'Статус': '//ul[contains(@class, "dropdown-promo")]//a[@href="/status" and contains(normalize-space(.), "статусы")]',
      'Турнир': '//ul[contains(@class, "dropdown-promo")]//a[@href="/tournaments" and contains(normalize-space(.), "турниры")]',
      'Бонусы': '//ul[contains(@class, "dropdown-promo")]//a[@href="/bonus" and contains(normalize-space(.), "бонусы")]',
      'Лотереи': '//ul[contains(@class, "dropdown-promo")]//a[@href="/lottery" and contains(normalize-space(.), "лотереи")]',
      'Кешбэк': '//ul[contains(@class, "dropdown-promo")]//a[@href="/cashback" and contains(normalize-space(.), "кешбэк")]',
      'Новости': '//ul[contains(@class, "dropdown-promo")]//a[@href="/news" and contains(normalize-space(.), "новости")]',
      'Акции': '//ul[contains(@class, "dropdown-promo")]//a[@href="/promotions" and contains(normalize-space(.), "акции")]'
    };
  }
}

module.exports = new HoverPromo();