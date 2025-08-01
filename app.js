// Baskets Data
const baskets = [
  {
    id: "food",
    title: "Food Basket",
    price: "$15–20",
    img: "https://img.icons8.com/color/96/meal.png",
    description: "A selection of popular, shelf-stable food essentials.",
    items: [
      "Rice (1 kg)",
      "Pasta (500 g)",
      "Canned vegetables (2 cans)",
      "Canned soup (2 cans)",
      "Peanut butter (1 jar)",
      "Instant noodles (3 packs)",
      "Crackers (1 box)",
      "Tea or coffee (small pack)",
      "Shelf-stable milk (1 L)",
      "Granola bars (4)",
      "Canned fruit (1 can)",
      "Oatmeal (6 instant servings)",
      "Cooking oil (250 ml)"
    ],
    aiDonor: "AI Suggestion: Food baskets are in high demand in your area. Thank you for helping fight hunger!",
    aiDonee: "AI Suggestion: This basket contains nutritious, easy-to-prepare items ideal for quick meals."
  },
  {
    id: "hygiene",
    title: "Hygiene Basket",
    price: "$10–15",
    img: "https://img.icons8.com/color/96/toiletries.png",
    description: "Essential hygiene supplies for daily care and dignity.",
    items: [
      "Bar soap (2 pcs)",
      "Toothpaste (1 tube)",
      "Toothbrushes (2 pcs)",
      "Shampoo (250 ml)",
      "Conditioner (250 ml)",
      "Deodorant (1 stick)",
      "Wet wipes (1 pack)",
      "Hand sanitizer (50–100 ml)",
      "Feminine hygiene products (1 pack)",
      "Comb or small hairbrush (1)",
      "Disposable face masks (5 pcs)",
      "Nail clippers (1 set)",
      "Body lotion (100 ml)"
    ],
    aiDonor: "AI Suggestion: Hygiene products are urgently needed in local shelters. Your donation makes a difference!",
    aiDonee: "AI Suggestion: This basket provides everything for staying clean and refreshed."
  },
  {
    id: "medicine",
    title: "Medicine Basket",
    price: "$20–25",
    img: "https://img.icons8.com/color/96/first-aid-kit.png",
    description: "Basic medical supplies for emergencies and health.",
    items: [
      "Basic first aid kit (bandages, antiseptic wipes, gauze)",
      "Pain relievers (ibuprofen or acetaminophen)",
      "Thermometer (digital)",
      "Cough drops (1 pack)",
      "Multivitamins (small bottle)",
      "Antiseptic cream (1 tube)",
      "Cotton swabs (1 pack)",
      "Hand sanitizer (medium bottle)",
      "Reusable hot/cold pack (1)",
      "Allergy medicine (antihistamine pack)",
      "Disposable gloves (1 pair)",
      "Face masks (5 pcs)",
      "Emergency contact card (blank)"
    ],
    aiDonor: "AI Suggestion: Medicine baskets are critical for families without easy access to healthcare. Your support can make a real difference in emergencies.",
    aiDonee: "AI Suggestion: Great for families who want to be prepared for minor health needs."
  },
  {
    id: "baby",
    title: "Baby Care Basket",
    price: "$25–30",
    img: "https://img.icons8.com/color/96/baby-bottle.png",
    description: "Comfort and care for infants and new parents.",
    items: [
      "Diapers (small pack)",
      "Baby wipes (1 pack)",
      "Baby lotion (100 ml)",
      "Baby shampoo (tear‑free, 250 ml)",
      "Baby food jars (4)",
      "Infant formula (small container)",
      "Pacifier (1)",
      "Baby blanket (1 soft fleece blanket)",
      "Onesie or baby outfit (1 piece)",
      "Small toy or rattle (1)",
      "Burp cloths (2)",
      "Disposable changing pads (2)"
    ],
    aiDonor: "AI Suggestion: Baby care items are highly requested by new parents in shelters. Your basket will bring comfort to both babies and caregivers.",
    aiDonee: "AI Suggestion: Contains the most requested baby essentials to ease caregiving."
  },
  {
    id: "custom",
    title: "Customizable Basket",
    price: "$15–30",
    img: "https://img.icons8.com/color/96/shopping-basket-2.png",
    description: "Mix & match items from all categories for a unique basket.",
    items: [
      "Food (rice, pasta, canned goods, peanut butter, snacks)",
      "Hygiene (soap, shampoo, wipes, feminine products)",
      "Medicine (first aid basics, pain relievers, vitamins)",
      "Baby care (diapers, wipes, formula, baby food)"
    ],
    aiDonor: "AI Suggestion: Consider adding hygiene and medicine items — these are among the most requested by community centers this month.",
    aiDonee: "AI Suggestion: Best choice if you need a mix of categories."
  }
];

// Mode: 'donor' or 'donee'
let userMode = 'donor';

function setMode(mode) {
  userMode = mode;
  renderBaskets();
}

function renderBaskets() {
  const list = document.getElementById('basket-list');
  list.innerHTML = '';

  baskets.forEach(basket => {
    const div = document.createElement('div');
    div.className = 'basket-card';

    const img = document.createElement('img');
    img.className = 'basket-img';
    img.src = basket.img;
    img.alt = basket.title + ' image';

    const title = document.createElement('div');
    title.className = 'basket-title';
    title.textContent = basket.title;

    const desc = document.createElement('div');
    desc.className = 'basket-desc';
    desc.textContent = basket.description;

    const items = document.createElement('ul');
    items.className = 'basket-items';
    basket.items.forEach(it => {
      const li = document.createElement('li');
      li.textContent = it;
      items.appendChild(li);
    });

    const aiMsg = document.createElement('div');
    aiMsg.className = 'ai-suggestion';
    aiMsg.textContent = userMode === 'donor' ? basket.aiDonor : basket.aiDonee;

    const btn = document.createElement('button');
    btn.className = 'primary-btn select-btn';
    btn.textContent = userMode === 'donor' ? 'Select Basket to Donate' : 'Select Basket to Receive';
    btn.onclick = () => onSelectBasket(basket.id);

    div.appendChild(img);
    div.appendChild(title);
    if (userMode === 'donor') {
      const price = document.createElement('div');
      price.className = 'basket-price';
      price.textContent = basket.price;
      div.appendChild(price);
    }
    div.appendChild(desc);
    div.appendChild(items);
    div.appendChild(aiMsg);
    div.appendChild(btn);

    list.appendChild(div);
  });
}

function onSelectBasket(basketId) {
  const basket = baskets.find(b => b.id === basketId);
  document.getElementById('ai-message').textContent = basket ? (userMode === 'donor' ? basket.aiDonor : basket.aiDonee) : '';
  document.getElementById('confirmation-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('confirmation-modal').classList.remove('active');
  goHome();
}

function filterBaskets(query) {
  const term = query.toLowerCase();
  const list = document.getElementById('basket-list');
  list.innerHTML = '';
  baskets.filter(b =>
    b.title.toLowerCase().includes(term) ||
    b.description.toLowerCase().includes(term) ||
    b.items.some(item => item.toLowerCase().includes(term))
  ).forEach(renderFilteredBasket);
}

function renderFilteredBasket(basket) {
  const div = document.createElement('div');
  div.className = 'basket-card';

  const img = document.createElement('img');
  img.className = 'basket-img';
  img.src = basket.img;
  img.alt = basket.title + ' image';

  const title = document.createElement('div');
  title.className = 'basket-title';
  title.textContent = basket.title;

  const desc = document.createElement('div');
  desc.className = 'basket-desc';
  desc.textContent = basket.description;

  const items = document.createElement('ul');
  items.className = 'basket-items';
  basket.items.forEach(it => {
    const li = document.createElement('li');
    li.textContent = it;
    items.appendChild(li);
  });

  const aiMsg = document.createElement('div');
  aiMsg.className = 'ai-suggestion';
  aiMsg.textContent = userMode === 'donor' ? basket.aiDonor : basket.aiDonee;

  const btn = document.createElement('button');
  btn.className = 'primary-btn select-btn';
  btn.textContent = userMode === 'donor' ? 'Select Basket to Donate' : 'Select Basket to Receive';
  btn.onclick = () => onSelectBasket(basket.id);

  div.appendChild(img);
  div.appendChild(title);
  if (userMode === 'donor') {
    const price = document.createElement('div');
    price.className = 'basket-price';
    price.textContent = basket.price;
    div.appendChild(price);
  }
  div.appendChild(desc);
  div.appendChild(items);
  div.appendChild(aiMsg);
  div.appendChild(btn);

  document.getElementById('basket-list').appendChild(div);
}

document.addEventListener('DOMContentLoaded', () => {
  setMode('donor');
});

