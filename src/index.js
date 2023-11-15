const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navContainer = document.querySelector('nav');

navContainer.innerHTML = '';

for (const key in siteContent.nav) {
  if (siteContent.nav.hasOwnProperty(key)) {
    const anchorText = siteContent.nav[key];
    const anchorElement = document.createElement('a');
    anchorElement.href = '#';
    anchorElement.textContent = anchorText;
    anchorElement.classList.add('italic');
    navContainer.appendChild(anchorElement);
  }
}


const logoImg = document.getElementById('logo-img');
logoImg.setAttribute("src", siteContent.images["logo-img"]);

//Cta Section

const ctaText = document.querySelector('.cta-text h1');

const ctaButton = document.querySelector('.cta-text button');

const ctaImg = document.getElementById('cta-img');

ctaText.textContent = 'Bu DOM Mükemmel';
ctaButton.textContent = 'Başlayın';
ctaImg.setAttribute("src", siteContent.images['cta-img']) 

//Main Section

const topContentHeadings = document.querySelectorAll('.top-content h4');
const topContentParagraphs = document.querySelectorAll('.top-content p');
const middleImg = document.getElementById('middle-img');
const bottomContentHeadings = document.querySelectorAll('.bottom-content h4');
const bottomContentParagraphs = document.querySelectorAll('.bottom-content p');

const mainContentData = [
  {
    heading: 'Özellikler',
    paragraph: 'Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  {
    heading: 'Hakkında',
    paragraph: 'Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  {
  heading: 'Servisler',
  paragraph: 'Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  {
    heading: 'Ürünler',
    paragraph: 'Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  {
    heading: 'Vizyon',
    paragraph: 'Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  }
];

topContentHeadings.forEach((heading, index) => {
  heading.textContent = mainContentData[index].heading;
  topContentParagraphs[index].textContent = mainContentData[index].paragraph;
});

middleImg.setAttribute("src", siteContent.images['accent-img']);

bottomContentHeadings.forEach((heading, index) => {
  heading.textContent = mainContentData[index + 2].heading;
  bottomContentParagraphs[index].textContent = mainContentData[index + 2].paragraph;
});

//Contact section

const contactHeading = document.querySelector('.contact h4');
const contactParagraphs = document.querySelectorAll('.contact p');

contactHeading.textContent = 'İletişim';
contactParagraphs[0].textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
contactParagraphs[1].textContent = '+90 (123) 456-7899';
contactParagraphs[2].textContent = 'satis@birsirketsitesi.com.tr';

//Footer

const footerLink = document.querySelector('footer a');
footerLink.href = '#'; 
footerLink.textContent = 'Copyright Bir Şirket Sitesi 2022';
footerLink.classList.add('bold'); 