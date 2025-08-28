import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const products = [
    {
      id: 1,
      name: 'Железобетонные блоки',
      description: 'ФБС блоки для фундаментов',
      image: '/img/a63d4dbb-b4af-4d59-a255-799af2d3ee6a.jpg',
      category: 'Фундаменты',
      minOrder: '50 шт',
      price: 'от 2,500 ₽/шт'
    },
    {
      id: 2,
      name: 'Железобетонные трубы',
      description: 'Трубы для дренажа и канализации',
      image: '/img/fa9fec77-67d3-4d6a-868a-6c7835cb620f.jpg',
      category: 'Дренаж',
      minOrder: '20 шт',
      price: 'от 3,800 ₽/шт'
    },
    {
      id: 3,
      name: 'Железобетонные панели',
      description: 'Панели для ограждений и стен',
      image: '/img/c3c82ece-d3ce-4137-a862-b2a3a66225e2.jpg',
      category: 'Ограждения',
      minOrder: '30 шт',
      price: 'от 1,900 ₽/шт'
    }
  ];

  const categories = [
    { name: 'Фундаментные блоки', icon: 'Building2', count: '25+' },
    { name: 'Железобетонные плиты', icon: 'Square', count: '18+' },
    { name: 'Колонны и балки', icon: 'Pilcrow', count: '12+' },
    { name: 'Дренажные системы', icon: 'Waves', count: '15+' }
  ];

  const advantages = [
    { icon: 'Factory', title: 'Собственное производство', description: 'Заводское качество и контроль на всех этапах' },
    { icon: 'Truck', title: 'Логистика по РФ', description: 'Доставка спецтранспортом в любой регион' },
    { icon: 'FileCheck', title: 'Сертификаты ГОСТ', description: 'Полный пакет документов и сертификатов' },
    { icon: 'Calculator', title: 'Расчет нагрузок', description: 'Техническая поддержка и проектирование' }
  ];

  const stats = [
    { number: '15+', label: 'лет на рынке' },
    { number: '500+', label: 'выполненных проектов' },
    { number: '50+', label: 'видов изделий' },
    { number: '24/7', label: 'техподдержка' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Building2" size={36} className="text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">
                  СтройБетон
                </div>
                <div className="text-sm text-muted-foreground">
                  Железобетонные изделия
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О компании</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors font-medium">Доставка</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Calculator" size={16} className="mr-2" />
                Калькулятор
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
                🏭 Заводское производство
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Железобетонные
                <span className="block text-primary mt-2">
                  изделия оптом
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Прямые поставки ЖБИ с завода. Полный цикл от производства до доставки на объект. 
                Работаем с застройщиками и подрядчиками по всей России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать прайс
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать заказ
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Основные категории ЖБИ</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/30 border">
                      <Icon name={category.icon} size={32} className="mx-auto mb-3 text-primary" />
                      <div className="font-medium text-sm text-center mb-1">{category.name}</div>
                      <div className="text-xs text-muted-foreground text-center">{category.count} позиций</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm">Минимальный заказ</div>
                      <div className="text-xs text-muted-foreground">от 100 000 ₽</div>
                    </div>
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">🏗️ Наш каталог</Badge>
            <h2 className="text-4xl font-bold mb-6">Основные категории ЖБИ</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Производим полный спектр железобетонных изделий для промышленного 
              и гражданского строительства согласно ГОСТ и техническим условиям
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 animate-fade-in border-0 bg-white shadow-lg" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-white">
                      {product.category}
                    </Badge>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold">{product.minOrder}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      {product.price}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Опт
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Запросить КП
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Layers" size={20} className="mr-2" />
              Посмотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">⚡ Наши преимущества</Badge>
            <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Более 15 лет успешной работы на рынке ЖБИ. 
              Надежный партнер для крупных строительных проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 animate-fade-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Нужна консультация по ЖБИ?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Наши инженеры помогут рассчитать потребность в материалах, 
              подберут оптимальные изделия и составят коммерческое предложение
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-4">
                <Icon name="FileText" size={20} className="mr-2" />
                Получить прайс-лист
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 000-00-00
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Building2" size={32} className="text-primary" />
                <div>
                  <div className="text-2xl font-bold">СтройБетон</div>
                  <div className="text-sm text-white/70">Железобетонные изделия</div>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-lg leading-relaxed">
                Завод полного цикла по производству железобетонных изделий. 
                Качественные ЖБИ для промышленного и гражданского строительства.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <Icon name="Award" size={20} className="text-primary mr-2" />
                  <span className="text-sm">ГОСТ качество</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Truck" size={20} className="text-primary mr-2" />
                  <span className="text-sm">Доставка РФ</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Продукция</h3>
              <ul className="space-y-3 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Фундаментные блоки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Железобетонные плиты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Колонны и балки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дренажные трубы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Панели ограждений</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Контакты</h3>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start">
                  <Icon name="Phone" size={16} className="mr-3 mt-1 text-primary" />
                  <div>
                    <div>+7 (495) 000-00-00</div>
                    <div className="text-sm">Отдел продаж</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" size={16} className="mr-3 mt-1 text-primary" />
                  <div>
                    <div>sales@stroybeton.ru</div>
                    <div className="text-sm">Коммерческие запросы</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="MapPin" size={16} className="mr-3 mt-1 text-primary" />
                  <div>
                    <div>г. Москва, промзона</div>
                    <div className="text-sm">ул. Заводская, 15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 mb-4 md:mb-0">
                &copy; 2024 СтройБетон. Все права защищены.
              </p>
              <div className="flex space-x-6 text-white/60 text-sm">
                <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-white transition-colors">Условия поставки</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}