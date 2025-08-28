import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const products = [
    {
      id: 1,
      name: 'HDMI кабель 4K',
      price: '1,299',
      image: '/img/52bafd23-65ad-4083-9f11-45217b7457f1.jpg',
      category: 'Видео',
      features: ['4K Ultra HD', '2 метра', 'Позолоченные контакты']
    },
    {
      id: 2,
      name: 'USB-C кабель',
      price: '899',
      image: '/img/cdbe08ef-22d4-4434-86ee-14c94756d5fb.jpg',
      category: 'Зарядка',
      features: ['Fast Charge', '1.5 метра', 'Нейлоновая оплетка']
    },
    {
      id: 3,
      name: 'Ethernet кабель',
      price: '599',
      image: '/img/a8ee9399-adec-4f5e-a356-3666777ab4b5.jpg',
      category: 'Сеть',
      features: ['Cat 6', '3 метра', 'Экранированный']
    }
  ];

  const categories = [
    { name: 'Зарядные кабели', icon: 'Zap', count: '45+' },
    { name: 'HDMI & Video', icon: 'Monitor', count: '30+' },
    { name: 'Сетевые кабели', icon: 'Wifi', count: '25+' },
    { name: 'Аудио кабели', icon: 'Headphones', count: '20+' }
  ];

  const features = [
    { icon: 'Shield', title: 'Гарантия качества', description: '2 года гарантии на все кабели' },
    { icon: 'Truck', title: 'Быстрая доставка', description: 'Доставка по Москве за 1 день' },
    { icon: 'Award', title: 'Сертификаты', description: 'Все товары сертифицированы' },
    { icon: 'Phone', title: 'Поддержка 24/7', description: 'Консультации по выбору кабелей' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cable" size={32} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КабельМастер
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                🚀 Новинки в каталоге
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Кабели для
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  всего
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Качественные кабели и соединители для дома, офиса и производства. 
                Более 1000 наименований в наличии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                      <Icon name={category.icon} size={32} className="mx-auto mb-2 text-primary" />
                      <div className="font-semibold text-sm">{category.name}</div>
                      <div className="text-xs text-muted-foreground">{category.count} товаров</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">⭐ Популярные товары</Badge>
            <h2 className="text-4xl font-bold mb-4">Хиты продаж</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Самые востребованные кабели и аксессуары от ведущих производителей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-white/80 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-muted/50 to-muted/30">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-primary/90 text-white">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardTitle className="text-xl mb-3">{product.name}</CardTitle>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {product.price} ₽
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full group-hover:bg-secondary transition-colors">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Показать все товары
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">✨ Наши преимущества</Badge>
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Нужна помощь с выбором?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Наши эксперты помогут подобрать идеальное решение для ваших задач
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Онлайн консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Cable" size={28} className="text-primary" />
                <span className="text-2xl font-bold">КабельМастер</span>
              </div>
              <p className="text-white/80 mb-4">
                Качественные кабели и аксессуары для всех сфер применения
              </p>
              <div className="flex space-x-4">
                <Icon name="Mail" size={20} className="text-white/60" />
                <Icon name="Phone" size={20} className="text-white/60" />
                <Icon name="MapPin" size={20} className="text-white/60" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Зарядные кабели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HDMI кабели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сетевые кабели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аудио кабели</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@cablemaster.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Кабельная, 1
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 КабельМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}