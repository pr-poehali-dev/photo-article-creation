import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://cdn.poehali.dev/projects/07635706-8feb-4157-b0bb-06f094aa8f07/files/f717c8ab-8a77-40a8-9ded-7408fc08ba04.jpg',
      caption: 'Fosi Audio DA2120B - вид спереди'
    },
    {
      url: 'https://cdn.poehali.dev/projects/07635706-8feb-4157-b0bb-06f094aa8f07/files/b600a329-0b0c-4dd4-8091-7f84068a53e1.jpg',
      caption: 'Задняя панель с разъёмами'
    },
    {
      url: 'https://cdn.poehali.dev/projects/07635706-8feb-4157-b0bb-06f094aa8f07/files/b92dd3df-06cc-4e64-9a1e-610b7cb4a61f.jpg',
      caption: 'Комплект с блоком питания 24В'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Icon name="AudioLines" size={16} />
            <span>Аудиотехника</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Fosi Audio DA2120B
          </h1>
          <p className="text-xl text-muted-foreground font-light mb-8">
            Компактный усилитель класса D с блоком питания 24В
          </p>
          <Button 
            size="lg"
            className="group"
            asChild
          >
            <a 
              href="https://market.yandex.ru/cc/8WcR4N" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icon name="ShoppingCart" size={20} />
              Купить на Яндекс Маркете
              <Icon name="ExternalLink" size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </header>

        <div className="mb-20 animate-fade-in">
          <img
            src={images[0].url}
            alt="Fosi Audio DA2120B"
            className="w-full h-auto object-cover"
          />
        </div>

        <section className="mb-20 prose prose-lg max-w-none animate-fade-in">
          <h2 className="text-3xl font-light mb-6">О продукте</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fosi Audio DA2120B — это современный усилитель класса D, сочетающий компактность и мощность. 
            Благодаря передовым технологиям усиления, устройство обеспечивает чистое звучание 
            при минимальных искажениях.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Усилитель идеально подходит для домашних аудиосистем, компактных студийных мониторов 
            и настольных акустических комплектов. Минималистичный дизайн позволяет органично 
            вписать устройство в любой интерьер.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light mb-10 animate-fade-in">Технические характеристики</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'Zap', label: 'Выходная мощность', value: '2 × 50 Вт / 4 Ом' },
              { icon: 'Settings', label: 'Класс усиления', value: 'Класс D' },
              { icon: 'Plug', label: 'Питание', value: 'Блок питания 24В' },
              { icon: 'Activity', label: 'КНИ', value: '< 0.05%' },
              { icon: 'Radio', label: 'Частотный диапазон', value: '20 Гц - 20 кГц' },
              { icon: 'Volume2', label: 'Соотношение сигнал/шум', value: '> 100 дБ' }
            ].map((spec, index) => (
              <Card 
                key={index} 
                className="p-6 border-0 bg-secondary/50 hover:bg-secondary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Icon name={spec.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{spec.label}</div>
                    <div className="text-muted-foreground">{spec.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light mb-10 animate-fade-in">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="overflow-hidden bg-secondary/50">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{image.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-light mb-6">Комплектация</h2>
          <ul className="space-y-3">
            {[
              'Усилитель Fosi Audio DA2120B',
              'Блок питания 24В/4.5А',
              'Набор соединительных кабелей',
              'Руководство пользователя',
              'Гарантийный талон'
            ].map((item, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-muted-foreground animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="pt-12 border-t border-border animate-fade-in">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              <span>Январь 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Tag" size={16} />
              <span>Аудиотехника</span>
            </div>
          </div>
        </footer>
      </article>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].caption}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Index;