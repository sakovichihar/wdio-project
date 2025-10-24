class HoverPromo {

  //здеся я храню все локаторы для нажатия кнопок
    get promoButton() { return '//a[@href="/promo"]';}
    get statusButton() { return '//ul[contains(@class, "dropdown-promo")]//a[@href="/status" and contains(normalize-space(.), "статусы")]';}
    get tournamentButton() { return '//ul[contains(@class, "dropdown-promo")]//a[@href="/tournaments" and contains(normalize-space(.), "турниры")]';}
    get bonusesButton() { return '//ul[contains(@class, "dropdown-promo")]//a[@href="/bonus" and contains(normalize-space(.), "бонусы")]';}
    get lotteriesButton() { return '//ul[contains(@class, "dropdown-promo")]//a[@href="/lottery" and contains(normalize-space(.), "лотереи")]';}
    get cashbackButton() { return '//ul[contains(@class, "dropdown-promo")]//a[@href="/cashback" and contains(normalize-space(.), "кешбэк")]';}
    get newsButton() { return '//ul[contains(@class, "dropdown-promo")]//a[@href="/news" and contains(normalize-space(.), "новости")]';}
    get promotionsButton() { return '//ul[contains(@class, "dropdown-promo")]//a[@href="/promotions" and contains(normalize-space(.), "акции")]';}
}

module.exports = new HoverPromo();